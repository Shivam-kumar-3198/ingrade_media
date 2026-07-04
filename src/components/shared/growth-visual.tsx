"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

import { cn } from "@/lib/utils";

const defaultBars = [34, 48, 42, 60, 55, 76, 94];

interface GrowthMetric {
  value: string;
  label: string;
}

interface GrowthVisualProps {
  eyebrow?: string;
  heading?: string;
  trendBadge?: string;
  bars?: number[];
  metrics?: GrowthMetric[];
}

export function GrowthVisual({
  eyebrow = "Ad spend performance",
  heading = "Last 7 weeks",
  trendBadge = "+38%",
  bars = defaultBars,
  metrics = [
    { value: "4.2x", label: "Average ROAS" },
    { value: "-31%", label: "Cost per lead" },
  ],
}: GrowthVisualProps) {
  return (
    <div
      className="relative w-full max-w-md rounded-2xl border border-white/10 bg-card/80 p-6 shadow-glow-sm backdrop-blur"
      role="img"
      aria-label={`Chart illustrating ${eyebrow.toLowerCase()} (${heading.toLowerCase()}), with ${metrics
        .map((m) => `${m.value} ${m.label.toLowerCase()}`)
        .join(" and ")}`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-muted-foreground">{eyebrow}</p>
          <p className="mt-1 font-display text-lg font-semibold">{heading}</p>
        </div>
        <span className="flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          <TrendingUp className="h-3.5 w-3.5" aria-hidden="true" /> {trendBadge}
        </span>
      </div>

      <div className="mt-6 flex h-32 items-end gap-2">
        {bars.map((height, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${height}%` }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
            className={cn("flex-1 rounded-t-md", i === bars.length - 1 ? "bg-primary" : "bg-white/10")}
          />
        ))}
      </div>

      <div
        className={cn(
          "mt-6 grid gap-3 border-t border-white/10 pt-4",
          metrics.length > 1 ? "grid-cols-2" : "grid-cols-1"
        )}
      >
        {metrics.map((metric) => (
          <div key={metric.label}>
            <p className="font-display text-xl font-semibold text-primary">{metric.value}</p>
            <p className="text-xs text-muted-foreground">{metric.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
