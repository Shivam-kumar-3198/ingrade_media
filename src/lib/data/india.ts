import { Building2, Car, GraduationCap, HeartHandshake, HeartPulse, Landmark, ShoppingCart, Wrench } from "lucide-react";

import type { Faq } from "@/lib/data/faqs";
import type { Industry } from "@/lib/data/process";
import type { ServiceSlug } from "@/lib/data/services";
import type { Stat } from "@/lib/data/stats";
import { caseStudies } from "@/lib/data/case-studies";
import { siteConfig } from "@/lib/site-config";

/**
 * Everything the India version of the site says differently from the global one.
 *
 * TODO before launch: the rupee figures below are placeholders sized for the
 * Indian market, not quotes. Confirm every price, minimum spend, and the
 * support hours with the team before this goes live.
 */

export const indiaStats: Stat[] = [
  { value: 100, prefix: "₹", suffix: " Cr+", label: "Ad spend managed" },
  { value: 240, suffix: "+", label: "Brands served" },
  { value: 27, suffix: "", label: "Countries" },
  { value: 4.2, suffix: "x", label: "Average client ROAS", decimals: 1 },
];

export const indiaIndustries: Industry[] = [
  { name: "D2C & E-commerce", icon: ShoppingCart },
  { name: "EdTech & Coaching", icon: GraduationCap },
  { name: "Fintech & Lending", icon: Landmark },
  { name: "Real Estate", icon: Building2 },
  { name: "Healthcare & Clinics", icon: HeartPulse },
  { name: "Automotive", icon: Car },
  { name: "NGOs & Nonprofits", icon: HeartHandshake },
  { name: "Local Services", icon: Wrench },
];

/** Real India engagements, taken from the case studies so there is one source of truth. */
export const indiaClients = caseStudies.filter((study) => study.country === "India");

export interface IndiaPricing {
  description?: string;
  startingPoint: string;
}

/** Rupee pricing per service. All figures exclude GST. */
export const indiaPricing: Record<ServiceSlug, IndiaPricing> = {
  "meta-ads": {
    description:
      "We charge a management fee based on your monthly ad spend, not a percentage that punishes you for growing. No setup fee for accounts spending ₹4 lakh/month or more.",
    startingPoint: "Retainers start at ₹40,000/month for accounts spending under ₹15 lakh/month in ad spend.",
  },
  "google-ads": {
    startingPoint: "Retainers start at ₹45,000/month for single-market accounts.",
  },
  "app-development": {
    startingPoint: "Typical builds range from ₹8 lakh to ₹40 lakh depending on scope.",
  },
  "website-development": {
    startingPoint: "Typical marketing sites range from ₹1.5 lakh to ₹8 lakh depending on page count and integrations.",
  },
  "social-media-management": {
    startingPoint: "Retainers start at ₹25,000/month for a single-platform content system.",
  },
  "webflow-development": {
    startingPoint: "Typical Webflow builds range from ₹1.5 lakh to ₹6 lakh.",
  },
  "wordpress-development": {
    startingPoint: "Typical projects range from ₹75,000 to ₹4 lakh.",
  },
};

export const indiaPricingNote = `All prices in ₹, excluding ${siteConfig.india.gstRate} GST. You get a proper GST invoice every month.`;

/** Replacement answers for service-page FAQs that quote dollar amounts. Keyed by service slug, then question. */
const indiaServiceFaqAnswers: Partial<Record<ServiceSlug, Record<string, string>>> = {
  "meta-ads": {
    "What's the minimum ad spend to work with you on Meta Ads?":
      "We recommend at least ₹1,00,000/month in ad spend so there's enough data volume to optimize against. Below that, the algorithm doesn't get enough signal to leave the learning phase reliably.",
  },
  "google-ads": {
    "How much should I budget for ad spend?":
      "It depends on your market and average order value, but most clients start testing with ₹1,50,000–₹4,00,000/month in spend, separate from our management fee.",
  },
};

export function localizeServiceFaqs(slug: ServiceSlug, faqs: Faq[]): Faq[] {
  const overrides = indiaServiceFaqAnswers[slug];
  if (!overrides) return faqs;
  return faqs.map((faq) => (overrides[faq.question] ? { ...faq, answer: overrides[faq.question] } : faq));
}

export const indiaHomeFaqs: Faq[] = [
  {
    question: "How do you price your services?",
    answer: `Paid media and social management run on a flat monthly retainer in ₹, scoped to your account complexity or ad spend tier, not a percentage that penalizes you for growing. Development work (apps, websites, Webflow, WordPress) is quoted as a fixed project price after a scoping call. Prices exclude ${siteConfig.india.gstRate} GST, and you'll always see the number before you commit.`,
  },
  {
    question: "Do we need to sign a long-term contract?",
    answer:
      "No. Retainer engagements run month to month after an initial 90-day period, which is roughly how long it takes paid media or content systems to show a clear trend. Development projects are scoped with fixed milestones, not open-ended contracts.",
  },
  {
    question: "How do we communicate day to day?",
    answer: `Your account manager is reachable on WhatsApp, phone, or email during ${siteConfig.india.supportHours}. You also get a standing weekly call and a live dashboard, so you never have to chase a status update.`,
  },
  {
    question: "What does reporting actually look like?",
    answer:
      "A live dashboard you can check anytime from your phone, plus a written weekly or monthly summary (depending on the service) walking through what changed, why, and what we're doing next. No screenshots of a single metric with no context.",
  },
  {
    question: "Is there a minimum budget to work with you?",
    answer:
      "For paid media, we recommend at least ₹1,00,000/month in ad spend so campaigns get enough data to leave the learning phase. Retainers for social media management start around ₹25,000/month. Development projects vary by scope — we'll give you a straight answer after a scoping call, even if that answer is that we're not the right fit yet.",
  },
  {
    question: "How fast will we see results?",
    answer:
      "It depends on the service. Paid media typically needs 2-3 weeks of structured testing before we scale spend, with a clearer trend by day 45-60. Development projects are scoped with a fixed timeline up front. Anyone promising overnight results on paid media is skipping the testing that makes results last.",
  },
];

export const indiaTrustPoints = [
  {
    title: "Pricing in ₹",
    description: `Retainers from ₹25,000/month. Prices exclude ${siteConfig.india.gstRate} GST.`,
  },
  {
    title: "GST invoices",
    description: "A proper tax invoice every month, ready for your accountant.",
  },
  {
    title: "WhatsApp-first support",
    description: "Quick approvals and weekly updates where you already are.",
  },
  {
    title: "IST working hours",
    description: `${siteConfig.india.supportHours}. Based in Noida.`,
  },
] as const;

export const indiaDifferentiators = [
  {
    title: "Reporting you can read on your phone",
    description:
      "You get a live link to your numbers, updated continuously, plus a short written breakdown of what changed and why, shared on WhatsApp or email. Not a PDF you have to chase down.",
  },
  {
    title: "No long-term lock-in contracts",
    description:
      "Retainers run month to month after an initial 90-day period. If the work isn't earning its keep, you're not stuck in a 12-month agreement.",
  },
  {
    title: "A dedicated account manager in IST",
    description: `One person who knows your account, reachable on call or WhatsApp ${siteConfig.india.supportHours}, not a rotating support queue.`,
  },
] as const;
