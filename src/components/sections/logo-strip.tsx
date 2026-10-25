"use client";

import { clientLogos } from "@/lib/data/logos";
import { indiaClients } from "@/lib/data/india";
import { siteConfig } from "@/lib/site-config";
import { useIsIndia } from "@/hooks/use-selected-country";

export function LogoStrip() {
  const isIndia = useIsIndia();
  // India visitors see the real India engagements instead of the global placeholder names.
  const names = isIndia ? indiaClients.map((client) => client.client) : clientLogos.map((logo) => logo.name);

  return (
    <section className="border-b border-white/5 py-12">
      <div className="container">
        <p className="text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
          {isIndia ? "Brands we're growing across India" : `Trusted by teams in ${siteConfig.countriesServed}+ countries`}
        </p>
        <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-3 lg:grid-cols-4">
          {names.map((name) => (
            <div
              key={name}
              className="flex items-center justify-center text-center font-display text-lg font-semibold text-muted-foreground/50 grayscale transition-colors hover:text-muted-foreground"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
