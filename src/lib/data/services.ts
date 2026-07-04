import type { LucideIcon } from "lucide-react";
import {
  Megaphone,
  Search,
  Smartphone,
  Code2,
  Share2,
  Layers,
  Globe2,
} from "lucide-react";

export type ServiceSlug =
  | "meta-ads"
  | "google-ads"
  | "app-development"
  | "website-development"
  | "social-media-management"
  | "webflow-development"
  | "wordpress-development";

export interface ServiceSummary {
  slug: ServiceSlug;
  name: string;
  shortName: string;
  benefit: string;
  icon: LucideIcon;
  metaTitle: string;
  metaDescription: string;
}

export interface ServicePainPoint {
  title: string;
  description: string;
}

export interface ServiceDeliverable {
  title: string;
  detail: string;
}

export interface ServiceProcessStep {
  title: string;
  description: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceContent extends ServiceSummary {
  heroHeadline: string;
  heroSubheadline: string;
  painPoints: ServicePainPoint[];
  deliverables: ServiceDeliverable[];
  process: ServiceProcessStep[];
  proof: {
    stat: string;
    statLabel: string;
    summary: string;
    client: string;
  };
  pricingModel: {
    title: string;
    description: string;
    startingPoint: string;
  };
  faqs: ServiceFaq[];
  relatedServices: ServiceSlug[];
  relatedCaseStudy: string;
}

export const services: ServiceContent[] = [
  {
    slug: "meta-ads",
    name: "Meta Ads",
    shortName: "Meta Ads",
    benefit: "Turn scrollers into buyers",
    icon: Megaphone,
    metaTitle: "Meta Ads Management (Facebook & Instagram) | Ingrade Media",
    metaDescription:
      "Facebook and Instagram ad campaigns built around your margins. Creative testing, audience structure, and weekly reporting you can read in 5 minutes.",
    heroHeadline: "Facebook and Instagram ads that stop losing money on the third week",
    heroSubheadline:
      "Most Meta accounts perform for 10-14 days, then fatigue sets in and cost-per-result creeps up. We build creative and audience systems designed to keep working past that point.",
    painPoints: [
      {
        title: "Your cost per purchase doubled after a strong first month",
        description:
          "Creative fatigue is the most common cause. If you're running 2-3 ad variations, Meta's algorithm runs out of new signal to optimize toward.",
      },
      {
        title: "You don't know which creative is actually driving sales",
        description:
          "One campaign, five ad sets, no clean attribution. You're guessing which hook, thumbnail, or offer is doing the work.",
      },
      {
        title: "Your agency sends a screenshot of ROAS once a month",
        description:
          "No breakdown by campaign objective, no explanation of what changed, no next step. You're paying for a black box.",
      },
      {
        title: "You've never tested Advantage+ shopping campaigns properly",
        description:
          "Broad targeting with strong creative often outperforms manual audience stacking in 2026 — but it needs a real testing budget to prove out.",
      },
    ],
    deliverables: [
      { title: "Ad creative testing", detail: "14 new ad variations produced and tested per month" },
      { title: "Audience and campaign structure", detail: "Advantage+ and manual campaigns split by funnel stage" },
      { title: "Pixel and Conversions API audit", detail: "Server-side tracking set up so iOS 14.5+ doesn't blind your data" },
      { title: "Creative briefs", detail: "Hooks, angles, and offers briefed to your team or our editors" },
      { title: "Weekly reporting dashboard", detail: "Spend, ROAS, CPA, and creative-level breakdown, live-updated" },
      { title: "Landing page conversion notes", detail: "Feedback on where paid traffic is leaking before checkout" },
    ],
    process: [
      { title: "Account and pixel audit", description: "We review your last 90 days of spend, tracking setup, and creative history before touching a budget." },
      { title: "Offer and angle mapping", description: "We map 4-6 creative angles against your actual margins, not generic 'brand awareness' ideas." },
      { title: "Structured testing sprint", description: "First 3 weeks isolate winning hooks and audiences with a fixed testing budget." },
      { title: "Scale the winners", description: "Budget shifts toward what's proven, with guardrails so scaling doesn't crash performance." },
      { title: "Weekly report and call", description: "You get a dashboard link plus a 20-minute call to walk through what changed and why." },
    ],
    proof: {
      stat: "2.1x",
      statLabel: "ROAS improvement in 60 days",
      summary:
        "A DTC skincare brand came to us spending $40K/month at a 1.6x ROAS. After a creative and Conversions API overhaul, they hit 3.4x within two billing cycles.",
      client: "DTC skincare brand, United States",
    },
    pricingModel: {
      title: "Flat monthly retainer, tied to ad spend tiers",
      description:
        "We charge a management fee based on your monthly ad spend, not a percentage that punishes you for growing. No setup fee for accounts spending $5K/month or more.",
      startingPoint: "Retainers start at $1,500/month for accounts spending under $20K/month in ad spend.",
    },
    faqs: [
      {
        question: "What's the minimum ad spend to work with you on Meta Ads?",
        answer:
          "We recommend at least $3,000/month in ad spend so there's enough data volume to optimize against. Below that, the algorithm doesn't get enough signal to leave the learning phase reliably.",
      },
      {
        question: "How fast will I see results?",
        answer:
          "Expect a testing phase of 2-3 weeks before we scale anything. Most clients see a stable, improved cost-per-result by day 45. Anyone promising results in week one is skipping the testing that makes results last.",
      },
      {
        question: "Do you produce the ad creative yourselves?",
        answer:
          "We write the briefs, hooks, and angles always. For production, we can work with your in-house creative, your existing UGC creators, or our editor network — billed separately based on volume.",
      },
      {
        question: "What happens to my account if we stop working together?",
        answer:
          "You keep the ad account, the pixel setup, the creative library, and full admin access. There's no lock-in and nothing is held hostage on exit.",
      },
      {
        question: "Do you work with Advantage+ shopping campaigns?",
        answer:
          "Yes — for e-commerce accounts with clean product feeds, Advantage+ is usually part of the mix within the first month, run alongside manual campaigns so we can compare performance directly.",
      },
    ],
    relatedServices: ["google-ads", "social-media-management"],
    relatedCaseStudy: "glowtherapy-skincare",
  },
  {
    slug: "google-ads",
    name: "Google Ads",
    shortName: "Google Ads",
    benefit: "Show up when buyers are already searching",
    icon: Search,
    metaTitle: "Google Ads Management (Search, Shopping, YouTube) | Ingrade Media",
    metaDescription:
      "Search, Shopping, Display, and YouTube campaigns built on real keyword intent and conversion data, not guesswork. Monthly reporting included.",
    heroHeadline: "Google Ads accounts that convert intent into pipeline, not just clicks",
    heroSubheadline:
      "Search works best when someone is already looking for what you sell. We structure campaigns around buyer intent and cut the keywords that just burn budget.",
    painPoints: [
      {
        title: "Your cost-per-click keeps climbing and conversions haven't",
        description:
          "Broad match keywords without negative lists are the usual culprit. You're paying for searches that were never going to convert.",
      },
      {
        title: "You can't tell which keywords actually turn into revenue",
        description:
          "Click-based reporting hides the real story. Without offline conversion tracking or CRM integration, you're optimizing toward the wrong number.",
      },
      {
        title: "Your Shopping feed hasn't been touched in months",
        description:
          "Product titles, GTINs, and custom labels drive Shopping performance more than bids do. A stale feed quietly caps your results.",
      },
      {
        title: "Your site converts traffic, but not from ads",
        description:
          "Google Ads works best when your product already converts — if your site leaks traffic, we flag that before we spend a dollar on clicks.",
      },
    ],
    deliverables: [
      { title: "Keyword and intent research", detail: "Search term mining tied to your actual sales data, not volume alone" },
      { title: "Campaign build across formats", detail: "Search, Shopping, Performance Max, Display, and YouTube where relevant" },
      { title: "Negative keyword management", detail: "Ongoing search term review to cut wasted spend, reviewed weekly" },
      { title: "Conversion tracking setup", detail: "GA4, offline conversion imports, and call tracking where needed" },
      { title: "Shopping feed optimization", detail: "Titles, attributes, and custom labels rebuilt for Shopping and PMax" },
      { title: "Monthly performance report", detail: "Cost per acquisition, ROAS, and search term insights explained in plain language" },
    ],
    process: [
      { title: "Account and conversion audit", description: "We check tracking accuracy first — bad data makes every decision after it wrong." },
      { title: "Intent mapping", description: "Keywords grouped by buying stage so budget goes toward people ready to act." },
      { title: "Campaign build and launch", description: "Structured campaigns with a testing budget before we open the spend fully." },
      { title: "Weekly optimization", description: "Bid, budget, and negative keyword adjustments based on real conversion data." },
      { title: "Monthly report and roadmap call", description: "What worked, what we're cutting, and what we're testing next." },
    ],
    proof: {
      stat: "+312%",
      statLabel: "qualified leads in 90 days",
      summary:
        "A B2B SaaS company was spending on broad match with no negative keyword list. After a full rebuild around buyer intent, qualified leads tripled without an increase in budget.",
      client: "B2B SaaS company, United Kingdom",
    },
    pricingModel: {
      title: "Flat monthly retainer, scoped to account complexity",
      description:
        "Pricing is based on the number of campaigns and markets we manage, not a percentage of spend. You always know what you're paying before the month starts.",
      startingPoint: "Retainers start at $1,800/month for single-market accounts.",
    },
    faqs: [
      {
        question: "Is Google Ads a good fit if I haven't run paid search before?",
        answer:
          "Usually yes, if there's existing organic search demand for what you sell. We'll tell you honestly in the audit if search volume doesn't support it — that happens more than agencies like to admit.",
      },
      {
        question: "How much should I budget for ad spend?",
        answer:
          "It depends on your market and average order value, but most clients start testing with $2,500-$5,000/month in spend, separate from our management fee.",
      },
      {
        question: "Do you manage Performance Max campaigns?",
        answer:
          "Yes, alongside standard Search and Shopping campaigns, with a clear view into which channel within PMax is actually driving results — not just a single blended number.",
      },
      {
        question: "Will you also look at my landing pages?",
        answer:
          "Yes. We review load speed, form friction, and message match between ad copy and page copy, and flag anything that's likely capping your conversion rate.",
      },
      {
        question: "How is reporting delivered?",
        answer:
          "A live dashboard plus a monthly written summary and call, covering cost per acquisition by campaign, spend pacing, and what changes we're making next.",
      },
    ],
    relatedServices: ["meta-ads", "website-development"],
    relatedCaseStudy: "northline-saas",
  },
  {
    slug: "app-development",
    name: "Mobile App Development",
    shortName: "App Development",
    benefit: "Ship an app users actually keep",
    icon: Smartphone,
    metaTitle: "iOS & Android App Development | Ingrade Media",
    metaDescription:
      "Native and cross-platform mobile apps for iOS and Android, built with a launch plan and post-launch support, not just a design handoff.",
    heroHeadline: "Mobile apps built to be maintained, not just demoed once",
    heroSubheadline:
      "A lot of apps look great in a pitch deck and fall apart at 1,000 users. We build with your growth plan and app store review process in mind from day one.",
    painPoints: [
      {
        title: "You have a Figma file but no engineering roadmap",
        description:
          "Design without a technical plan usually means scope surprises later. We scope architecture before a single screen gets built.",
      },
      {
        title: "Your last app got rejected from the App Store twice",
        description:
          "Apple's review guidelines shift often and catch teams off guard. We build against current guidelines and handle resubmissions.",
      },
      {
        title: "You're not sure if you need native or cross-platform",
        description:
          "React Native and Flutter save budget for most business apps. Camera-heavy, AR, or performance-critical apps usually need native — we'll tell you which one your product needs.",
      },
      {
        title: "Nobody owns the app after launch",
        description:
          "OS updates break things. Without a support plan, your app quietly degrades until users notice before you do.",
      },
    ],
    deliverables: [
      { title: "Technical scoping and architecture", detail: "Data model, API design, and third-party integrations planned before development starts" },
      { title: "UI build from design or with our design team", detail: "Pixel-accurate implementation with accessibility checks" },
      { title: "iOS and Android builds", detail: "Native (Swift/Kotlin) or cross-platform (React Native/Flutter), scoped to your product" },
      { title: "App Store and Google Play submission", detail: "Store listing, screenshots, and review-guideline compliance handled end to end" },
      { title: "QA across device sizes", detail: "Manual and automated testing across common device and OS combinations" },
      { title: "Post-launch support plan", detail: "OS update compatibility, crash monitoring, and a defined bug-fix SLA" },
    ],
    process: [
      { title: "Discovery and technical scoping", description: "We map every screen, integration, and edge case before writing an estimate." },
      { title: "Architecture and design system", description: "Data model and component library built once, reused across the whole app." },
      { title: "Build in two-week sprints", description: "You see working builds every two weeks, not a single reveal at the end." },
      { title: "QA and store submission", description: "Device testing, then submission with review-guideline compliance checked in advance." },
      { title: "Launch and support", description: "A defined support window for bug fixes and OS compatibility after go-live." },
    ],
    proof: {
      stat: "4.7★",
      statLabel: "App Store rating at 90 days post-launch",
      summary:
        "A real estate marketplace app launched with zero critical bugs in its first review cycle and passed Apple review on the first submission.",
      client: "Real estate marketplace, United Arab Emirates",
    },
    pricingModel: {
      title: "Project-based, scoped after technical discovery",
      description:
        "We quote a fixed project price after a paid discovery phase, so you know the full cost before committing to the build. Ongoing support is a separate monthly retainer.",
      startingPoint: "Typical builds range from $18,000 to $85,000 depending on scope.",
    },
    faqs: [
      {
        question: "Should I build native or cross-platform?",
        answer:
          "For most business, e-commerce, and content apps, React Native or Flutter gets you to market faster at a lower cost with no meaningful difference to users. Camera-heavy, AR, or high-performance apps usually need native — we'll recommend based on your actual requirements.",
      },
      {
        question: "How long does a typical build take?",
        answer:
          "A focused MVP usually takes 10-14 weeks from discovery to store submission. More complex apps with multiple integrations can run 4-6 months.",
      },
      {
        question: "Do you offer ongoing maintenance after launch?",
        answer:
          "Yes, as a monthly retainer covering OS compatibility updates, crash monitoring, and a defined number of bug-fix hours. It's optional, but most clients keep it for at least the first year.",
      },
      {
        question: "Who owns the code once the project is finished?",
        answer:
          "You do, fully. Source code, design files, and store account access transfer to you at project completion.",
      },
      {
        question: "Can you work with our existing backend or API?",
        answer:
          "Yes, we integrate with existing APIs regularly. If your backend needs work to support the app, we'll scope that separately during discovery.",
      },
    ],
    relatedServices: ["website-development", "wordpress-development"],
    relatedCaseStudy: "keyspace-real-estate",
  },
  {
    slug: "website-development",
    name: "Website Development",
    shortName: "Website Development",
    benefit: "A site built to convert, not just look good",
    icon: Code2,
    metaTitle: "Custom Website Development | Ingrade Media",
    metaDescription:
      "Custom-coded websites built for speed and conversion, not templates. Core Web Vitals, tracking, and CMS handoff included.",
    heroHeadline: "Custom-coded websites that load fast and hold up under real traffic",
    heroSubheadline:
      "Template builders cap what you can do once traffic and complexity grow. We custom-code your site so performance and flexibility aren't a tradeoff.",
    painPoints: [
      {
        title: "Your site takes over 4 seconds to load on mobile",
        description:
          "Every extra second of load time costs conversions. Bloated page builders and unoptimized images are the most common causes we find in audits.",
      },
      {
        title: "You're paying developers for changes that should take minutes",
        description:
          "A rigid, non-CMS-driven build means every copy change needs an engineer. We hand off a CMS your team can actually use.",
      },
      {
        title: "Your ad traffic converts worse than it should",
        description:
          "If your paid traffic bounces at a higher rate than organic, the landing experience — not the campaign — is usually the problem.",
      },
      {
        title: "You've outgrown your page builder",
        description:
          "Drag-and-drop tools are great until you need custom logic, complex integrations, or performance your builder can't deliver.",
      },
    ],
    deliverables: [
      { title: "Custom Next.js build", detail: "Server-rendered or statically generated pages, tuned for Core Web Vitals" },
      { title: "CMS integration", detail: "Sanity, Contentful, or a headless CMS of your choice, so your team can edit without a developer" },
      { title: "Analytics and tracking setup", detail: "GA4, conversion events, and server-side tagging where needed" },
      { title: "Design system and component library", detail: "Reusable components so new pages ship without rebuilding from scratch" },
      { title: "Performance optimization", detail: "Image optimization, code splitting, and font loading tuned for sub-2.5s LCP" },
      { title: "Post-launch handoff documentation", detail: "A written guide so your team can maintain and extend the site" },
    ],
    process: [
      { title: "Discovery and sitemap", description: "We map every page, user flow, and integration before design starts." },
      { title: "Design and content structure", description: "Wireframes and content models built together so the CMS matches how you'll actually use it." },
      { title: "Development in sprints", description: "Built in Next.js with review checkpoints every two weeks." },
      { title: "QA and performance testing", description: "Cross-browser testing and Core Web Vitals checks before launch." },
      { title: "Launch and handoff", description: "CMS training for your team plus documentation for future developers." },
    ],
    proof: {
      stat: "1.8s",
      statLabel: "average LCP after rebuild (from 5.4s)",
      summary:
        "A healthcare scheduling platform's old WordPress site was losing mobile visitors to load time. The custom-coded rebuild cut load time by two-thirds and lifted form completions by 41%.",
      client: "Healthcare scheduling platform, Australia",
    },
    pricingModel: {
      title: "Project-based, fixed price after discovery",
      description:
        "We scope the sitemap and integrations first, then quote a fixed price. Ongoing edits after launch can run through your CMS with no developer needed, or through an optional support retainer.",
      startingPoint: "Typical marketing sites range from $8,000 to $35,000 depending on page count and integrations.",
    },
    faqs: [
      {
        question: "Why custom code instead of Webflow or WordPress?",
        answer:
          "Custom code makes sense when you need performance at scale, complex logic, or tight integration with internal systems. For most marketing sites, Webflow or WordPress gets you there faster and cheaper — we'll recommend honestly based on your needs during discovery.",
      },
      {
        question: "Can my team update content without a developer?",
        answer:
          "Yes. We connect a headless CMS so your team can edit copy, images, and even add new pages using existing templates, without touching code.",
      },
      {
        question: "How do you handle SEO during a rebuild?",
        answer:
          "We audit your current rankings, map 301 redirects for every existing URL, and preserve metadata and structured data so a migration doesn't cost you organic traffic.",
      },
      {
        question: "What's your typical project timeline?",
        answer:
          "A standard marketing site with 8-12 pages typically takes 6-9 weeks from discovery to launch. Larger sites with custom integrations take longer, scoped during discovery.",
      },
      {
        question: "Do you offer support after launch?",
        answer:
          "Yes, as an optional monthly retainer for updates beyond what your CMS covers, plus performance monitoring and security patches.",
      },
    ],
    relatedServices: ["webflow-development", "google-ads"],
    relatedCaseStudy: "carehive-scheduling",
  },
  {
    slug: "social-media-management",
    name: "Social Media Management",
    shortName: "Social Media",
    benefit: "Build an audience that actually buys",
    icon: Share2,
    metaTitle: "Social Media Management | Ingrade Media",
    metaDescription:
      "Content strategy, posting, and community management across Instagram, TikTok, and LinkedIn, tied to business outcomes, not vanity metrics.",
    heroHeadline: "Social content that builds pipeline, not just impressions",
    heroSubheadline:
      "Follower counts don't pay invoices. We run social accounts around a content system tied to what actually moves people toward buying.",
    painPoints: [
      {
        title: "Your posting is inconsistent and reactive",
        description:
          "Sporadic posting kills algorithmic reach on every platform. A content calendar isn't optional if you want compounding growth.",
      },
      {
        title: "Your engagement looks fine but nobody's converting",
        description:
          "Likes and comments aren't revenue. Without a clear path from post to inquiry, social becomes a cost center with no attribution.",
      },
      {
        title: "You don't have time to reply to DMs and comments",
        description:
          "Unanswered comments and DMs quietly cost you leads and hurt the trust signal newer followers see on your profile.",
      },
      {
        title: "You're not sure what's actually working",
        description:
          "Without a monthly content-performance review, you keep repeating formats that plateaued months ago.",
      },
    ],
    deliverables: [
      { title: "Monthly content calendar", detail: "16-20 posts/month across Instagram, TikTok, and LinkedIn as relevant to your audience" },
      { title: "Content production", detail: "Short-form video editing, carousel design, and caption writing" },
      { title: "Community management", detail: "Comment and DM responses within your defined business hours" },
      { title: "Influencer and creator outreach", detail: "Sourcing and negotiating with micro-creators where it fits your budget" },
      { title: "Monthly performance report", detail: "Reach, engagement rate, and follower-to-lead tracking where applicable" },
      { title: "Platform strategy review", detail: "Quarterly check on which platforms deserve more or less investment" },
    ],
    process: [
      { title: "Audit and audience research", description: "We review your last 90 days of posts and your competitors' top-performing content." },
      { title: "Content pillars and calendar", description: "3-5 recurring content themes mapped to a monthly posting calendar." },
      { title: "Production and scheduling", description: "Content produced in batches and scheduled for consistent posting." },
      { title: "Community management", description: "Daily monitoring of comments and DMs within agreed response windows." },
      { title: "Monthly report and strategy call", description: "What content performed, what we're changing, and why." },
    ],
    proof: {
      stat: "3.4x",
      statLabel: "increase in profile-to-website clicks",
      summary:
        "A boutique fitness studio chain went from sporadic posting to a structured content system. Profile-to-website clicks more than tripled in the first quarter.",
      client: "Boutique fitness studio chain, Singapore",
    },
    pricingModel: {
      title: "Flat monthly retainer by platform count and content volume",
      description:
        "Pricing depends on how many platforms we manage and how much content we produce monthly. Paid social amplification, if wanted, is scoped and billed separately.",
      startingPoint: "Retainers start at $1,200/month for a single-platform content system.",
    },
    faqs: [
      {
        question: "Which platforms should we focus on?",
        answer:
          "It depends on where your customers actually spend time. B2B companies often see more return from LinkedIn than Instagram; consumer brands are usually the reverse. We'll recommend based on your audience research, not a default list.",
      },
      {
        question: "Do you write the captions and scripts yourselves?",
        answer:
          "Yes, based on your brand voice guide and the content pillars we agree on together. You'll always get a review window before anything posts.",
      },
      {
        question: "Can you work with our existing content or creators?",
        answer:
          "Yes. We frequently work alongside in-house creators or existing UGC relationships, handling strategy, scheduling, and reporting around content you already produce.",
      },
      {
        question: "How do you measure whether this is working?",
        answer:
          "Beyond reach and engagement, we track profile-to-website clicks, DM inquiry volume, and where possible, tie follower growth to actual lead or sales data.",
      },
      {
        question: "Is paid promotion included?",
        answer:
          "Organic content management is the core retainer. If you want paid boosting or influencer partnerships, we scope and quote those separately so pricing stays transparent.",
      },
    ],
    relatedServices: ["meta-ads", "website-development"],
    relatedCaseStudy: "formfit-studios",
  },
  {
    slug: "webflow-development",
    name: "Webflow Website Design & Development",
    shortName: "Webflow Development",
    benefit: "Launch fast, edit forever without a developer",
    icon: Layers,
    metaTitle: "Webflow Website Design & Development | Ingrade Media",
    metaDescription:
      "Custom Webflow sites designed and built for speed, SEO, and content-team editing. No template look, no developer needed for daily updates.",
    heroHeadline: "Webflow sites that don't look like every other Webflow site",
    heroSubheadline:
      "Webflow is fast to launch and easy for your team to edit, if it's built right. We design custom, not from a template gallery, and set up the CMS so your team owns content day one.",
    painPoints: [
      {
        title: "Every Webflow site you've seen looks the same",
        description:
          "Template-based builds share the same layouts and animations. We design from your brand and content, not a marketplace template.",
      },
      {
        title: "Your current site needs a developer for basic edits",
        description:
          "If changing a headline or adding a case study requires a ticket, the CMS wasn't structured for your team's actual workflow.",
      },
      {
        title: "You need to launch in weeks, not months",
        description:
          "Webflow is a strong fit when speed matters and you don't need custom backend logic. We'll tell you if your project needs custom code instead.",
      },
      {
        title: "Your site isn't ranking despite decent content",
        description:
          "Webflow SEO settings are powerful but often left on default. Clean URL structure, schema, and sitemap settings matter as much as content.",
      },
    ],
    deliverables: [
      { title: "Custom visual design", detail: "Designed in Figma first, matched to your brand, not a Webflow template" },
      { title: "CMS collections", detail: "Blog, case studies, team, and any repeatable content structured as editable collections" },
      { title: "Interactions and animation", detail: "Scroll and hover animations tuned for performance, not just visual flair" },
      { title: "On-page SEO setup", detail: "Clean URL structure, metadata fields, schema markup, and sitemap configuration" },
      { title: "Client training session", detail: "A recorded walkthrough so your team can edit confidently from day one" },
      { title: "Launch QA", detail: "Cross-browser and mobile responsiveness testing before go-live" },
    ],
    process: [
      { title: "Discovery and content audit", description: "We review existing content and map what needs a CMS collection versus a static page." },
      { title: "Custom design in Figma", description: "Full-page designs reviewed and approved before any Webflow build starts." },
      { title: "Webflow build", description: "CMS collections, interactions, and responsive breakpoints built to the approved design." },
      { title: "SEO and performance pass", description: "Metadata, schema, image compression, and Lighthouse scoring checked before launch." },
      { title: "Training and handoff", description: "A recorded session covering how to edit pages, add blog posts, and manage the CMS." },
    ],
    proof: {
      stat: "9 days",
      statLabel: "from final design to live site",
      summary:
        "A regional real estate brokerage needed a rebrand launched before a major listing event. Design-to-launch took 9 working days without cutting the CMS setup corners.",
      client: "Regional real estate brokerage, Canada",
    },
    pricingModel: {
      title: "Project-based, fixed price by page and collection count",
      description:
        "Pricing is based on the number of unique page templates and CMS collections, not total page count, since most pages reuse a template.",
      startingPoint: "Typical Webflow builds range from $6,000 to $22,000.",
    },
    faqs: [
      {
        question: "Is Webflow better than WordPress for our business?",
        answer:
          "Webflow tends to load faster out of the box and needs less plugin maintenance. WordPress has a larger plugin ecosystem for complex functionality like memberships or booking systems. We'll recommend based on what your site actually needs to do.",
      },
      {
        question: "Can we edit the site ourselves after launch?",
        answer:
          "Yes — that's the point of a well-structured Webflow build. You'll get a training session and can edit text, images, and add CMS entries like blog posts without touching the design.",
      },
      {
        question: "Do you handle the Webflow hosting and domain setup?",
        answer:
          "We set up Webflow hosting and connect your domain during launch. The Webflow hosting subscription itself is billed directly to you by Webflow, so you always retain control of the account.",
      },
      {
        question: "Can you migrate our existing content from another platform?",
        answer:
          "Yes, including redirect mapping from your old URLs so you don't lose existing search rankings during the switch.",
      },
      {
        question: "What if we outgrow Webflow later?",
        answer:
          "It happens for businesses that need custom logic or heavy backend integration. If that day comes, we can scope a custom-coded rebuild — your content structure carries over cleanly since it's already organized in collections.",
      },
    ],
    relatedServices: ["wordpress-development", "website-development"],
    relatedCaseStudy: "meridian-realty",
  },
  {
    slug: "wordpress-development",
    name: "WordPress Website Design & Development",
    shortName: "WordPress Development",
    benefit: "A WordPress site that doesn't break every update",
    icon: Globe2,
    metaTitle: "WordPress Website Design & Development | Ingrade Media",
    metaDescription:
      "Custom WordPress builds without bloated page builders. Fast load times, clean plugin stacks, and a site your team can manage safely.",
    heroHeadline: "WordPress sites built to survive plugin updates and page-builder bloat",
    heroSubheadline:
      "WordPress runs a huge share of the web because it's flexible — and breaks often because most builds pile on plugins with no plan. We build lean and document everything.",
    painPoints: [
      {
        title: "Every plugin update breaks something",
        description:
          "Stacking 30+ plugins without compatibility testing is the most common cause of WordPress sites going down after routine updates.",
      },
      {
        title: "Your site is slow because of page builder bloat",
        description:
          "Heavy visual builders load unnecessary CSS and JS on every page. We build custom themes or lean on lightweight builders, tuned for speed.",
      },
      {
        title: "You've been hacked or flagged for malware before",
        description:
          "Outdated plugins and weak hosting are the top entry points. We harden security and set up a real backup and update process.",
      },
      {
        title: "Nobody internally understands how the site is built",
        description:
          "Undocumented custom code left by a previous freelancer makes every future change risky. We document the build so it's maintainable.",
      },
    ],
    deliverables: [
      { title: "Custom theme or lean builder setup", detail: "Built for speed, avoiding unnecessary page-builder overhead" },
      { title: "Plugin audit and consolidation", detail: "Removing redundant plugins and documenting what's left and why" },
      { title: "Security hardening", detail: "Login protection, firewall rules, and a real backup schedule" },
      { title: "SEO plugin configuration", detail: "Yoast or Rank Math configured properly, not left on defaults" },
      { title: "Performance optimization", detail: "Caching, image compression, and database cleanup for faster load times" },
      { title: "Editor training and documentation", detail: "A written guide so your team can safely update content and plugins" },
    ],
    process: [
      { title: "Site and plugin audit", description: "We review your current build, hosting, and plugin stack for risk and bloat." },
      { title: "Design and information architecture", description: "Wireframes and content structure agreed before development starts." },
      { title: "Development", description: "Custom theme or lightweight builder setup, built and tested in staging." },
      { title: "Security and performance pass", description: "Hardening, caching, and Core Web Vitals checks before launch." },
      { title: "Launch and handoff", description: "Documentation and training so your team can manage the site confidently." },
    ],
    proof: {
      stat: "-68%",
      statLabel: "page load time after plugin cleanup",
      summary:
        "A local services franchise had 41 active plugins and a 6-second load time. After a full rebuild and consolidation, load time dropped by more than two-thirds.",
      client: "Local services franchise, United States",
    },
    pricingModel: {
      title: "Project-based, fixed price by scope",
      description:
        "Pricing depends on whether it's a rebuild, a redesign, or new development, and how many custom functionality pieces are involved. An optional maintenance retainer covers updates and monitoring after launch.",
      startingPoint: "Typical projects range from $4,500 to $20,000.",
    },
    faqs: [
      {
        question: "Do you use page builders like Elementor or Divi?",
        answer:
          "Only when it genuinely fits the project's speed and budget needs, and we configure it carefully to avoid bloat. For performance-sensitive sites, we often build a lightweight custom theme instead.",
      },
      {
        question: "Can you fix our existing WordPress site instead of rebuilding?",
        answer:
          "Often, yes. If the underlying structure is sound, a plugin audit, security hardening, and performance pass can solve most issues without a full rebuild.",
      },
      {
        question: "How do you handle ongoing WordPress security?",
        answer:
          "Through an optional maintenance retainer covering core and plugin updates, malware scanning, and offsite backups, tested for restore, not just stored.",
      },
      {
        question: "Will my team be able to add blog posts and pages?",
        answer:
          "Yes. We configure the editor and any custom fields so your team can add and update content without needing a developer for routine changes.",
      },
      {
        question: "What hosting do you recommend?",
        answer:
          "Managed WordPress hosting (like WP Engine or Kinsta) for most business sites — it handles server-level caching and security that generic shared hosting doesn't.",
      },
    ],
    relatedServices: ["webflow-development", "app-development"],
    relatedCaseStudy: "brightpath-franchise",
  },
];

export function getServiceBySlug(slug: string): ServiceContent | undefined {
  return services.find((service) => service.slug === slug);
}

export function getServiceSummaries(): ServiceSummary[] {
  return services.map(({ slug, name, shortName, benefit, icon, metaTitle, metaDescription }) => ({
    slug,
    name,
    shortName,
    benefit,
    icon,
    metaTitle,
    metaDescription,
  }));
}
