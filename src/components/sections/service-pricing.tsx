"use client";

import { indiaPricing, indiaPricingNote } from "@/lib/data/india";
import type { ServiceSlug } from "@/lib/data/services";
import { useIsIndia } from "@/hooks/use-selected-country";

interface ServicePricingProps {
  slug: ServiceSlug;
  // Plain strings only: the full service object holds an icon component, which
  // can't be passed from a server component to a client component.
  description: string;
  startingPoint: string;
}

/** Pricing copy for a service page: USD for everyone, rupees (ex-GST) for India visitors. */
export function ServicePricing({ slug, description, startingPoint }: ServicePricingProps) {
  const isIndia = useIsIndia();
  const india = indiaPricing[slug];

  return (
    <>
      <p className="mt-4 text-balance leading-relaxed text-muted-foreground">
        {isIndia && india.description ? india.description : description}
      </p>
      <p className="mt-6 font-display text-lg font-semibold text-foreground">
        {isIndia ? india.startingPoint : startingPoint}
      </p>
      <p className="mt-2 text-sm text-muted-foreground">{isIndia ? indiaPricingNote : "All pricing in USD."}</p>
    </>
  );
}
