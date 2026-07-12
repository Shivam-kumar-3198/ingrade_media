export const siteConfig = {
  name: "Ingrade Media",
  legalName: "Ingrade Media LLC",
  tagline: "Performance marketing and product development for growing companies.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.ingrademedia.com",
  ogImage: "/images/og/default.svg",
  // TODO: replace with a real inbox before launch
  email: "hello@ingrademedia.com",
  // TODO: replace with a real support line before launch — placeholder format only
  phone: "+1 (555) 014-2890",
  // TODO: replace with the real registered office address before launch
  address: {
    line1: "228 Park Ave S, Suite 91074",
    city: "New York",
    region: "NY",
    postalCode: "10003",
    country: "United States",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/ingrade-media",
    instagram: "https://www.instagram.com/ingrade_media",
    x: "https://www.x.com/ingrademedia",
    youtube: "https://www.youtube.com/@ingrademedia",
  },
  founded: 2018,
  countriesServed: 27,
  timezoneCoverage: "US, UK, EU, UAE, and APAC business hours",
  channels: ["Slack", "WhatsApp", "Email", "Weekly video calls"],
};

export type SiteConfig = typeof siteConfig;
