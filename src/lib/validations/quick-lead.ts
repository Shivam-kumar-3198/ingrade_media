import { z } from "zod";

export const quickLeadSchema = z.object({
  name: z.string().trim().min(2, "Enter your name"),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(20, "Enter a valid phone number")
    .refine((val) => /^[+]?[0-9\s\-().]{7,20}$/.test(val) && val.replace(/\D/g, "").length >= 7, {
      message: "Enter a valid phone number",
    }),
  // Honeypot field — must stay empty. Bots that auto-fill every field will trip this.
  company_website: z.string().max(0).optional().or(z.literal("")),
});

export type QuickLeadValues = z.infer<typeof quickLeadSchema>;
