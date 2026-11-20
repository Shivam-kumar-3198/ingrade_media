export const siteConfig = {
  name: "Ingrade Media",
  legalName: "Ingrade Media LLC",
  tagline: "Performance marketing and product development for growing companies.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://ingrade.io",
  ogImage: "/images/og/default.svg",
  email: "team@ingrade.io",
  phone: "+91 98765 43210",
  // TODO: replace with the real registered office address before launch
  address: {
    line1: "Noida",
    locality: "Noida",
    region: "Uttar Pradesh",
    country: "IN",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/ingrade-media",
    instagram: "https://www.instagram.com/ingrade_media",
    x: "https://www.x.com/ingrademedia",
    youtube: "https://www.youtube.com/@ingrademedia",
  },
  domain: "ingrade.io",
  legalLastUpdated: "17 November 2026",
  founded: 2018,
  countriesServed: 27,
  timezoneCoverage: "US, UK, EU, UAE, and APAC business hours",
  channels: ["Slack", "WhatsApp", "Email", "Weekly video calls"],
  // TODO: confirm these India-facing details before launch.
  india: {
    // Shown on the India version of the contact page, footer, and FAQs.
    supportHours: "Mon–Sat, 10 AM – 7 PM IST",
    gstRate: "18%",
  },
};

export type SiteConfig = typeof siteConfig;

/** Digits-only international number, as wa.me expects it (e.g. 919876543210). */
export function whatsappNumber(): string {
  return siteConfig.phone.replace(/\D/g, "");
}

/** Click-to-chat link with an optional prefilled message. */
export function whatsappLink(message = "Hi Ingrade Media, I'd like a free growth plan for my business."): string {
  return `https://wa.me/${whatsappNumber()}?text=${encodeURIComponent(message)}`;
}

export function telLink(): string {
  return `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`;
}
