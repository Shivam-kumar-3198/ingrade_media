import { MessageSquareText, BarChart3, BookOpenText, type LucideIcon } from "lucide-react";

export interface TeamMember {
  name: string;
  role: string;
  location: string;
  bio: string;
}

export const team: TeamMember[] = [
  {
    name: "Priya Nandakumar",
    role: "Co-Founder & CEO",
    location: "New York, US",
    bio: "Started Ingrade Media in 2018 after running paid acquisition in-house for two e-commerce brands and getting tired of watching agencies hide behind vague reports.",
  },
  {
    name: "Tomas Vidal",
    role: "Co-Founder & Head of Paid Media",
    location: "Lisbon, Portugal",
    bio: "Oversees every Meta and Google Ads account from a media-buying background at two performance agencies. Still reviews every account personally before month-end reporting goes out.",
  },
  {
    name: "Ade Okafor",
    role: "Head of Engineering",
    location: "London, UK",
    bio: "Leads the development team across app, Webflow, WordPress, and custom-coded projects. Previously built product at two Series B startups before joining full-time in 2020.",
  },
  {
    name: "Hana Suzuki",
    role: "Head of Client Strategy",
    location: "Singapore",
    bio: "Runs the APAC and Australia account portfolio and built the reporting framework every account manager now uses across the agency.",
  },
];

export interface Value {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const values: Value[] = [
  {
    title: "Say the honest thing, even when it costs the sale",
    description:
      "If your product doesn't convert yet, we'll say so before taking your ad budget. Short-term revenue from a bad-fit client costs more in refunds and reputation than it's worth.",
    icon: MessageSquareText,
  },
  {
    title: "Numbers over adjectives",
    description:
      "Every recommendation we make is tied to a specific number from your account or site, not a general best practice pulled from a blog post.",
    icon: BarChart3,
  },
  {
    title: "You should understand your own account",
    description:
      "We explain what we're doing and why in plain language. If you can't explain your own strategy back to your team, we haven't done our job.",
    icon: BookOpenText,
  },
];
