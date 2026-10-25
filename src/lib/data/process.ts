import {
  ShoppingCart,
  Cloud,
  HeartPulse,
  Building2,
  GraduationCap,
  Wrench,
  SearchCheck,
  Compass,
  Rocket,
  LineChart,
  LayoutDashboard,
  ShieldCheck,
  Clock,
  Landmark,
  Car,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const howWeWork: ProcessStep[] = [
  {
    step: "01",
    title: "Audit",
    description:
      "We review your last 90 days of data, whether that's ad accounts, analytics, or your current site, before recommending anything. You get an honest read on what's actually broken.",
    icon: SearchCheck,
  },
  {
    step: "02",
    title: "Strategy",
    description:
      "A written plan scoped to your budget and timeline, covering what we'll test first and why. No generic 30-slide deck recycled from another client.",
    icon: Compass,
  },
  {
    step: "03",
    title: "Launch",
    description:
      "We move fast on execution but keep budgets or scope contained until early data tells us something is working. Structured testing beats guessing.",
    icon: Rocket,
  },
  {
    step: "04",
    title: "Scale & report",
    description:
      "Budget and effort shift toward what's proven. You get a live dashboard and a standing call, not a screenshot once a month.",
    icon: LineChart,
  },
];

export interface Differentiator {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const differentiators: Differentiator[] = [
  {
    title: "Weekly reporting with real dashboards",
    description:
      "You get a live link to your numbers, updated continuously, plus a written breakdown of what changed and why. Not a PDF you have to chase down.",
    icon: LayoutDashboard,
  },
  {
    title: "No long-term lock-in contracts",
    description:
      "Retainers run month to month after an initial 90-day period. If the work isn't earning its keep, you're not stuck in a 12-month agreement.",
    icon: ShieldCheck,
  },
  {
    title: "A dedicated account manager in your timezone",
    description:
      "One person who knows your account, reachable during your business hours across US, UK, EU, UAE, or APAC time zones, not a rotating support queue.",
    icon: Clock,
  },
];

export interface Industry {
  name: string;
  icon: LucideIcon;
}

export const industries: Industry[] = [
  { name: "E-commerce", icon: ShoppingCart },
  { name: "SaaS", icon: Cloud },
  { name: "Healthcare", icon: HeartPulse },
  { name: "Real Estate", icon: Building2 },
  { name: "Education", icon: GraduationCap },
  { name: "Local Services", icon: Wrench },
];

// Case studies label industries more specifically than the homepage strip does.
const industryIconAliases: Record<string, LucideIcon> = {
  "Online Education": GraduationCap,
  EdTech: GraduationCap,
  Fintech: Landmark,
  Automotive: Car,
  Nonprofit: HeartHandshake,
};

export function getIndustryIcon(industryName: string): LucideIcon {
  return (
    industries.find((industry) => industry.name === industryName)?.icon ??
    industryIconAliases[industryName] ??
    Building2
  );
}
