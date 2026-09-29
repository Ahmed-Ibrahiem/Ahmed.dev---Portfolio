import { z } from "zod";

export const contactSchema = z.object({
  email: z.string().trim().email("Invalid Eamil").max(200),
  name: z
    .string()
    .trim()
    .min(1, "Name is messing! Please enter your name.")
    .max(100),
  subject: z
    .string()
    .trim()
    .min(1, "Subject is required")
    .max(100)
    .transform((s) => s.replace(/[\r\n]+/g, " ")),
  phone: z.string().trim().min(1, "Phone is required").max(30),
  message: z.string().trim().min(1, "Message is required").max(5000),
  hp_field: z.string().optional(),
});

export type contactType = z.infer<typeof contactSchema>;
