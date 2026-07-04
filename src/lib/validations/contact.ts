import { z } from "zod";

import { countries as countryList } from "@/lib/data/countries";

export const budgetRanges = [
  "Under $2,500/month",
  "$2,500 – $5,000/month",
  "$5,000 – $15,000/month",
  "$15,000 – $50,000/month",
  "$50,000+/month",
  "Project-based (not a monthly retainer)",
] as const;

export const countries = [...countryList.map((c) => c.name), "Other"] as const;

export const serviceOptions = [
  { id: "meta-ads", label: "Meta Ads" },
  { id: "google-ads", label: "Google Ads" },
  { id: "app-development", label: "Mobile App Development" },
  { id: "website-development", label: "Website Development" },
  { id: "social-media-management", label: "Social Media Management" },
  { id: "webflow-development", label: "Webflow Development" },
  { id: "wordpress-development", label: "WordPress Development" },
] as const;

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name"),
  email: z.string().trim().email("Enter a valid email address"),
  company: z.string().trim().min(2, "Enter your company name"),
  website: z
    .string()
    .trim()
    .min(1, "Enter your website URL")
    .refine((val) => /^https?:\/\/.+\..+/.test(val) || /^[\w-]+\.[a-z]{2,}(\/.*)?$/i.test(val), {
      message: "Enter a valid website URL",
    }),
  country: z.string().min(1, "Select your country"),
  budget: z.string().min(1, "Select a budget range"),
  services: z.array(z.string()).min(1, "Select at least one service"),
  message: z.string().trim().min(10, "Tell us a little more (10 characters minimum)"),
  // Honeypot field — must stay empty. Bots that auto-fill every field will trip this.
  company_website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
