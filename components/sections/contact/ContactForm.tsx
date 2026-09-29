"use client";
import { contactSchema, contactType } from "@/lib/validations/contact";
import { zodResolver } from "@hookform/resolvers/zod";
import { Variants, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { LuLoaderCircle } from "react-icons/lu";
import { toast } from "react-toastify";

// Each child: fades in and slides up slightly
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ContactForm = () => {
  const form = useForm({
    resolver: zodResolver(contactSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form;

  const onSubmit = async (data: contactType) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error();

      toast.success("Thanks! Your message has been sent.");

      form.reset();
    } catch (e) {
      toast.error("Sorry, a server error occurred. Please try again.");
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      variants={itemVariants}
      className="flex-start-col gap-8 rounded-sm shadow-box bg-card-style p-6 md:p-8"
    >
      {/* honeypot: Hidden from user */}
      <input
        disabled={isSubmitting}
        type="text"
        {...register("hp_field")}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <div className="grid gap-5 sm:grid-cols-2 w-full">
        <div className="flex-start-col gap-2 relative">
          <label
            htmlFor="name"
            className="text-xs uppercase tracking-[1.5] text-body"
          >
            Your Name
          </label>
          <input
            disabled={isSubmitting}
            id="name"
            type="text"
            className={inputStyle}
            {...register("name")}
          />
          {errors?.name && <ErrorMessage message={errors.name.message!} />}
        </div>
        <div className="flex-start-col gap-2 relative">
          <label
            htmlFor="phone"
            className="text-xs uppercase tracking-[1.5] text-body"
          >
            Phone Number
          </label>
          <input
            disabled={isSubmitting}
            id="phone"
            type="tel"
            {...register("phone")}
            className={inputStyle}
          />

          {errors?.phone && <ErrorMessage message={errors.phone.message!} />}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 w-full ">
        <div className="flex-start-col gap-2 w-full relative">
          <label
            htmlFor="email"
            className="text-xs uppercase tracking-[1.5] text-body"
          >
            Email
          </label>
          <input
            disabled={isSubmitting}
            id="email"
            {...register("email")}
            type="email"
            className={inputStyle}
          />
          {errors?.email && <ErrorMessage message={errors.email.message!} />}
        </div>

        <div className="flex-start-col gap-2 w-full relative">
          <label
            htmlFor="subject"
            className="text-xs uppercase tracking-[1.5] text-body"
          >
            Subject
          </label>
          <input
            disabled={isSubmitting}
            id="subject"
            {...register("subject")}
            type="text"
            className={inputStyle}
          />
          {errors?.subject && (
            <ErrorMessage message={errors.subject.message!} />
          )}
        </div>
      </div>

      <div className="flex-start-col gap-2 w-full grow relative">
        <label
          htmlFor="message"
          className="text-xs uppercase tracking-[1.5] text-body"
        >
          Your Message
        </label>
        <textarea
          id="message"
          {...register("message")}
          rows={5}
          className={`h-full ${inputStyle}`}
          disabled={isSubmitting}
        />
        {errors?.message && <ErrorMessage message={errors.message.message!} />}
      </div>

      <button
        disabled={isSubmitting}
        type="submit"
        className="flex-center w-full rounded-sm bg-accent px-6 py-4 text-sm font-medium uppercase tracking-[1.5] text-white shadow-button duration-300 hover:-translate-y-1"
      >
        {isSubmitting ? (
          <LuLoaderCircle className="animate-spin" />
        ) : (
          "Send Message"
        )}
      </button>
    </motion.form>
  );
};

const inputStyle = `
w-full rounded-sm bg-white px-4 py-2.5 outline-none focus:ring-2 focus:ring-accent resize-none text-sm
`;

const ErrorMessage = ({ message }: { message: string }) => {
  return (
    <p className="text-red-500 text-xs absolute -bottom-5 left-0">{message}</p>
  );
};

export default ContactForm;
