"use client";

import { Clock, FileText, IndianRupee, MessageCircle } from "lucide-react";

import { useIsIndia } from "@/hooks/use-selected-country";
import { indiaTrustPoints } from "@/lib/data/india";

const icons = [IndianRupee, FileText, MessageCircle, Clock];

/** Practical reassurances Indian buyers look for before they enquire. India visitors only. */
export function IndiaTrustBar() {
  const isIndia = useIsIndia();
  if (!isIndia) return null;

  return (
    <section className="border-b border-white/5 bg-secondary/10 py-10" aria-label="How we work with Indian brands">
      <div className="container grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {indiaTrustPoints.map((point, index) => {
          const Icon = icons[index];
          return (
            <div key={point.title} className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-display text-sm font-semibold">{point.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{point.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
