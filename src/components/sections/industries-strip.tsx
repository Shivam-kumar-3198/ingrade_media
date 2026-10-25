"use client";

import { industries } from "@/lib/data/process";
import { indiaIndustries } from "@/lib/data/india";
import { useIsIndia } from "@/hooks/use-selected-country";

export function IndustriesStrip() {
  const isIndia = useIsIndia();
  const list = isIndia ? indiaIndustries : industries;

  return (
    <section className="border-y border-white/5 bg-secondary/10 py-14">
      <div className="container">
        <p className="text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
          {isIndia ? "Industries we work in across India" : "Industries we work in"}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {list.map((industry) => {
            const Icon = industry.icon;
            return (
              <span
                key={industry.name}
                className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-muted-foreground"
              >
                <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                {industry.name}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
