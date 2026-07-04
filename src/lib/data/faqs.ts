export interface Faq {
  question: string;
  answer: string;
}

export const homeFaqs: Faq[] = [
  {
    question: "How do you price your services?",
    answer:
      "Paid media and social management run on a flat monthly retainer, scoped to your account complexity or ad spend tier, not a percentage that penalizes you for growing. Development work (apps, websites, Webflow, WordPress) is quoted as a fixed project price after a scoping call. You'll always see the number before you commit.",
  },
  {
    question: "Do we need to sign a long-term contract?",
    answer:
      "No. Retainer engagements run month to month after an initial 90-day period, which is roughly how long it takes paid media or content systems to show a clear trend. Development projects are scoped with fixed milestones, not open-ended contracts.",
  },
  {
    question: "How do we communicate if we're in a different timezone?",
    answer:
      "We cover US, UK, EU, UAE, and APAC business hours across our team, and every client gets a dedicated account manager working in or near your timezone. Day-to-day communication runs through Slack, WhatsApp, or email, with a standing weekly video call.",
  },
  {
    question: "What does reporting actually look like?",
    answer:
      "A live dashboard you can check anytime, plus a written weekly or monthly summary (depending on the service) walking through what changed, why, and what we're doing next. No screenshots of a single metric with no context.",
  },
  {
    question: "Is there a minimum budget to work with you?",
    answer:
      "For paid media, we recommend at least $3,000/month in ad spend so campaigns get enough data to leave the learning phase. Retainers for social media management start around $1,200/month. Development projects vary by scope — we'll give you a straight answer after a scoping call, even if that answer is that we're not the right fit yet.",
  },
  {
    question: "How fast will we see results?",
    answer:
      "It depends on the service. Paid media typically needs 2-3 weeks of structured testing before we scale spend, with a clearer trend by day 45-60. Development projects are scoped with a fixed timeline up front. Anyone promising overnight results on paid media is skipping the testing that makes results last.",
  },
];
