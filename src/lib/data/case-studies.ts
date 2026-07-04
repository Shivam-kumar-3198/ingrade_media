import type { ServiceSlug } from "./services";
import { clientPhotos } from "@/lib/stock-photos";

export interface CaseStudyResult {
  value: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  country: string;
  countryFlag: string;
  services: ServiceSlug[];
  headlineResult: string;
  headlineLabel: string;
  summary: string;
  timeframe: string;
  challenge: string;
  approach: string[];
  results: CaseStudyResult[];
  testimonialQuote: string;
  testimonialName: string;
  testimonialRole: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "glowtherapy-skincare",
    client: "GlowTherapy Skincare",
    industry: "E-commerce",
    country: "United States",
    countryFlag: "🇺🇸",
    services: ["meta-ads"],
    headlineResult: "2.1x",
    headlineLabel: "ROAS improvement in 60 days",
    summary:
      "A DTC skincare brand spending $40K/month at a 1.6x ROAS moved to 3.4x after a creative and tracking overhaul.",
    timeframe: "60 days",
    challenge:
      "GlowTherapy was running Meta ads with three static creatives that hadn't changed in four months. Cost per purchase had climbed 60% quarter over quarter, and their pixel wasn't paired with Conversions API, so iOS 14.5+ was hiding a large share of their conversion data.",
    approach: [
      "Rebuilt server-side tracking with Conversions API to recover lost signal from iOS opt-outs.",
      "Produced 14 new ad variations across 4 creative angles, tested against a fixed budget before scaling anything.",
      "Split Advantage+ shopping campaigns from manual retargeting to compare performance cleanly.",
      "Shifted budget weekly toward the two winning angles once statistical significance was reached.",
    ],
    results: [
      { value: "3.4x", label: "ROAS, up from 1.6x" },
      { value: "-38%", label: "Cost per purchase" },
      { value: "14", label: "New ad variations tested" },
    ],
    testimonialQuote:
      "We went from a 1.6x to a 3.4x ROAS on Meta in two billing cycles. The weekly dashboard actually explains why numbers moved, which no past agency did.",
    testimonialName: "Sarah Kim",
    testimonialRole: "Founder, GlowTherapy Skincare",
  },
  {
    slug: "northline-saas",
    client: "Northline",
    industry: "SaaS",
    country: "United Kingdom",
    countryFlag: "🇬🇧",
    services: ["google-ads", "website-development"],
    headlineResult: "+312%",
    headlineLabel: "qualified leads in 90 days",
    summary:
      "A B2B SaaS company tripled qualified leads by rebuilding Google Ads around buyer intent instead of broad match volume.",
    timeframe: "90 days",
    challenge:
      "Northline's Google Ads account ran almost entirely on broad match keywords with no negative keyword list. Cost per lead was rising and the sales team said fewer than a third of form fills were sales-qualified.",
    approach: [
      "Rebuilt keyword architecture around buying-stage intent instead of generic product terms.",
      "Layered in an offline conversion import so Google could optimize toward closed deals, not just form fills.",
      "Added a weekly negative keyword review to cut spend on searches that never converted.",
      "Rebuilt two landing pages that were leaking paid traffic before it reached the demo request form.",
    ],
    results: [
      { value: "+312%", label: "Qualified leads" },
      { value: "-29%", label: "Cost per qualified lead" },
      { value: "0", label: "Increase in monthly ad spend required" },
    ],
    testimonialQuote:
      "Qualified leads went up 312% in 90 days without raising our budget. They rebuilt our keyword structure around what our sales team actually closes.",
    testimonialName: "James Whitfield",
    testimonialRole: "VP Marketing, Northline",
  },
  {
    slug: "keyspace-real-estate",
    client: "Keyspace",
    industry: "Real Estate",
    country: "United Arab Emirates",
    countryFlag: "🇦🇪",
    services: ["app-development"],
    headlineResult: "4.7★",
    headlineLabel: "App Store rating at 90 days",
    summary:
      "A real estate marketplace app launched with zero critical bugs and passed Apple review on the first submission.",
    timeframe: "14 weeks",
    challenge:
      "Keyspace had a completed design file but no technical architecture, and a prior development attempt had been rejected twice by App Store review over data handling issues.",
    approach: [
      "Ran a two-week technical discovery to scope data architecture and resolve the App Store compliance issues from the earlier rejection.",
      "Built in React Native to hit both iOS and Android from a single codebase within the client's timeline.",
      "Shipped working builds every two weeks so the product team could test with real listings before launch.",
      "Ran device testing across 11 common device and OS combinations before submission.",
    ],
    results: [
      { value: "4.7★", label: "App Store rating at 90 days" },
      { value: "1st", label: "Submission passed Apple review" },
      { value: "14 wks", label: "Discovery to store launch" },
    ],
    testimonialQuote:
      "Our app passed App Store review on the first submission and held a 4.7-star rating three months post-launch. No surprises, no scope creep.",
    testimonialName: "Fatima Al-Rashid",
    testimonialRole: "Product Lead, Keyspace",
  },
  {
    slug: "carehive-scheduling",
    client: "CareHive Scheduling",
    industry: "Healthcare",
    country: "Australia",
    countryFlag: "🇦🇺",
    services: ["website-development"],
    headlineResult: "1.8s",
    headlineLabel: "average LCP, down from 5.4s",
    summary:
      "A healthcare scheduling platform's WordPress site was losing mobile visitors to load time; the custom rebuild cut load time by two-thirds.",
    timeframe: "8 weeks",
    challenge:
      "CareHive's existing WordPress site relied on a heavy page builder and unoptimized images, pushing mobile load time past 5 seconds. Booking form completions were falling, especially on mobile.",
    approach: [
      "Rebuilt the marketing site in Next.js with static generation for all core pages.",
      "Migrated content into a headless CMS so the internal team could publish without a developer.",
      "Optimized every image through next/image and rebuilt font loading to remove layout shift.",
      "Preserved all existing URLs with 301 redirects to protect organic rankings during migration.",
    ],
    results: [
      { value: "1.8s", label: "Largest Contentful Paint" },
      { value: "+41%", label: "Booking form completions" },
      { value: "0", label: "Organic rankings lost in migration" },
    ],
    testimonialQuote:
      "Mobile load time went from 5.4 seconds to 1.8. Form completions jumped 41% the month after launch and it hasn't dipped since.",
    testimonialName: "Daniel Osei",
    testimonialRole: "Operations Director, CareHive Scheduling",
  },
  {
    slug: "formfit-studios",
    client: "FormFit Studios",
    industry: "Local Services",
    country: "Singapore",
    countryFlag: "🇸🇬",
    services: ["social-media-management"],
    headlineResult: "3.4x",
    headlineLabel: "profile-to-website clicks",
    summary:
      "A boutique fitness studio chain moved from sporadic posting to a structured content system and tripled profile clicks.",
    timeframe: "1 quarter",
    challenge:
      "FormFit posted inconsistently across three locations with no shared content calendar, and had no way to tell whether social activity was contributing to trial sign-ups.",
    approach: [
      "Built a shared content calendar around 4 recurring content pillars across all three studio locations.",
      "Produced and scheduled 18 posts per month across Instagram and TikTok, batched to stay consistent.",
      "Added a tracked link in every bio and story to measure profile-to-website clicks directly.",
      "Ran a monthly content review to double down on the formats driving trial sign-ups, not just likes.",
    ],
    results: [
      { value: "3.4x", label: "Profile-to-website clicks" },
      { value: "18/mo", label: "Posts published consistently" },
      { value: "+22%", label: "Trial class sign-ups" },
    ],
    testimonialQuote:
      "Profile-to-website clicks more than tripled once we had an actual content calendar instead of posting whenever someone remembered to.",
    testimonialName: "Mei Lin Tan",
    testimonialRole: "Marketing Manager, FormFit Studios",
  },
  {
    slug: "meridian-realty",
    client: "Meridian Realty",
    industry: "Real Estate",
    country: "Canada",
    countryFlag: "🇨🇦",
    services: ["webflow-development"],
    headlineResult: "9 days",
    headlineLabel: "from final design to live site",
    summary:
      "A regional real estate brokerage needed a rebrand launched before a major listing event, and made the deadline without cutting CMS setup corners.",
    timeframe: "9 days",
    challenge:
      "Meridian's rebrand was finished but had no site to launch it on, with a major regional listing event nine days out. They also needed their agents to manage listings without developer help.",
    approach: [
      "Built listing and agent profiles as Webflow CMS collections from day one, not static pages.",
      "Designed custom page templates in Figma matched to the new brand, avoiding template-gallery layouts.",
      "Configured on-page SEO fields and schema markup for every listing template before launch.",
      "Delivered a recorded CMS training session so agents could add listings independently at launch.",
    ],
    results: [
      { value: "9 days", label: "Design approval to launch" },
      { value: "100%", label: "Listings self-managed by agents" },
      { value: "0", label: "Post-launch developer tickets in month one" },
    ],
    testimonialQuote:
      "We hit a launch date we didn't think was realistic, and our agents have added listings themselves ever since without calling us for help.",
    testimonialName: "Claire Bouchard",
    testimonialRole: "Marketing Director, Meridian Realty",
  },
  {
    slug: "brightpath-franchise",
    client: "BrightPath",
    industry: "Education",
    country: "United States",
    countryFlag: "🇺🇸",
    services: ["wordpress-development"],
    headlineResult: "-68%",
    headlineLabel: "page load time after plugin cleanup",
    summary:
      "A local services franchise had 41 active plugins and a 6-second load time; a full rebuild and consolidation cut load time by more than two-thirds.",
    timeframe: "6 weeks",
    challenge:
      "BrightPath's franchise locations shared one WordPress install with 41 active plugins, several of them redundant or abandoned. Load times averaged 6 seconds and two locations had been briefly flagged for malware in the past year.",
    approach: [
      "Audited every plugin, removing 26 that were redundant, unused, or a security risk.",
      "Rebuilt key templates on a lightweight custom theme instead of the previous heavy page builder.",
      "Hardened login security and set up an offsite backup schedule tested for actual restore, not just storage.",
      "Configured Rank Math properly across all franchise location pages, which had been left on defaults.",
    ],
    results: [
      { value: "-68%", label: "Page load time" },
      { value: "26", label: "Redundant plugins removed" },
      { value: "0", label: "Security incidents since rebuild" },
    ],
    testimonialQuote:
      "Our site had gotten unmanageable and slow. The rebuild is faster, safer, and finally something we understand.",
    testimonialName: "Marcus Reyes",
    testimonialRole: "Franchise Operations Lead, BrightPath",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getTestimonialAvatar(testimonialName: string): string {
  return clientPhotos[testimonialName];
}
