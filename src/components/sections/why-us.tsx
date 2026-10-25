"use client";

import { SectionHeading } from "@/components/shared/section-heading";
import { differentiators } from "@/lib/data/process";
import { indiaDifferentiators } from "@/lib/data/india";
import { useIsIndia } from "@/hooks/use-selected-country";

export function WhyUs() {
  const isIndia = useIsIndia();
  // Same three icons in the same order; only the copy changes for India.
  const items = differentiators.map((item, index) => (isIndia ? { ...item, ...indiaDifferentiators[index] } : item));

  return (
    <section className="py-20 sm:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Why teams switch to us"
          title={
            isIndia ? "The three things Indian founders ask about first" : "The three things every global client asks about first"
          }
          description="These are the exact concerns clients raise on a first call. Here's how we handle each one."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-card/50 p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
