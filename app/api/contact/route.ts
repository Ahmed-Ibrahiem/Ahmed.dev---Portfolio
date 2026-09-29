import { resend } from "@/lib/resend";
import { contactSchema } from "@/lib/validations/contact";

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export const POST = async (req: Request) => {
  let body: Record<string, unknown>;

  try {
    body = await req.json();
  } catch (e) {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json(
      { error: "Invalid input", issues: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  const { email, phone, name, subject, message, hp_field } = body as Record<
    string,
    string
  >;

  if (hp_field) return Response.json({ ok: true });

  const cleanSubject = subject.replace(/[\r\n]+/g, " ").trim();

  const { error } = await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: [process.env.CONTACT_TO_EMAIL!],
    replyTo: email,
    subject: `[Portfolio] ${cleanSubject}`,
    html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6">
        <h2>رسالة جديدة من الـ Portfolio</h2>
        <p><strong>الاسم:</strong> ${escapeHtml(name)}</p>
        <p><strong>الإيميل:</strong> ${escapeHtml(email)}</p>
        <p><strong>الموبايل:</strong> ${phone ? escapeHtml(phone) : "—"}</p>
        <p><strong>الموضوع:</strong> ${escapeHtml(cleanSubject)}</p>
        <hr />
        <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
      </div>
    
    `,
  });

  if (error) {
    return Response.json({ error: "Failed To Send" }, { status: 500 });
  }

  return Response.json({ ok: true }, { status: 200 });
};
