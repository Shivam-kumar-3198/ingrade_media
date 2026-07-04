import { clientPhotos } from "@/lib/stock-photos";

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  country: string;
  countryFlag: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "We went from a 1.6x to a 3.4x ROAS on Meta in two billing cycles. The weekly dashboard actually explains why numbers moved, which no past agency did.",
    name: "Sarah Kim",
    role: "Founder",
    company: "GlowTherapy Skincare",
    country: "United States",
    countryFlag: "🇺🇸",
    avatar: clientPhotos["Sarah Kim"],
  },
  {
    quote:
      "Qualified leads went up 312% in 90 days without raising our budget. They rebuilt our keyword structure around what our sales team actually closes.",
    name: "James Whitfield",
    role: "VP Marketing",
    company: "Northline",
    country: "United Kingdom",
    countryFlag: "🇬🇧",
    avatar: clientPhotos["James Whitfield"],
  },
  {
    quote:
      "Our app passed App Store review on the first submission and held a 4.7-star rating three months post-launch. No surprises, no scope creep.",
    name: "Fatima Al-Rashid",
    role: "Product Lead",
    company: "Keyspace",
    country: "United Arab Emirates",
    countryFlag: "🇦🇪",
    avatar: clientPhotos["Fatima Al-Rashid"],
  },
  {
    quote:
      "Mobile load time went from 5.4 seconds to 1.8. Form completions jumped 41% the month after launch and it hasn't dipped since.",
    name: "Daniel Osei",
    role: "Operations Director",
    company: "CareHive Scheduling",
    country: "Australia",
    countryFlag: "🇦🇺",
    avatar: clientPhotos["Daniel Osei"],
  },
  {
    quote:
      "Profile-to-website clicks more than tripled once we had an actual content calendar instead of posting whenever someone remembered to.",
    name: "Mei Lin Tan",
    role: "Marketing Manager",
    company: "FormFit Studios",
    country: "Singapore",
    countryFlag: "🇸🇬",
    avatar: clientPhotos["Mei Lin Tan"],
  },
];
