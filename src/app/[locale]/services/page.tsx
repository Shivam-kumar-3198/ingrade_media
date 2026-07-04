import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/section-heading";
import { GrowthVisual } from "@/components/shared/growth-visual";
import { FinalCta } from "@/components/sections/final-cta";
import { JsonLd, breadcrumbJsonLd } from "@/components/seo/json-ld";
import { getServiceSummaries } from "@/lib/data/services";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Services — Meta Ads, Google Ads, Web & App Development",
  description:
    "Seven services run by one team: Meta Ads, Google Ads, mobile app development, website development, social media management, Webflow, and WordPress.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  const services = getServiceSummaries();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: siteConfig.url },
          { name: "Services", url: `${siteConfig.url}/services` },
        ])}
      />
      <section className="section-glow border-b border-white/5 py-20 sm:py-28">
        <div className="container">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <SectionHeading
              eyebrow="Services"
              title="Pick one service or hand us the whole marketing function"
              description="Most clients start with one channel and add more once they see how we report on it. Nothing here requires bundling everything at once."
            />
            <div className="flex justify-center lg:justify-end">
              <GrowthVisual />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link key={service.slug} href={`/services/${service.slug}`} className="group">
                <Card className="flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h2 className="mt-5 font-display text-lg font-semibold">{service.name}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{service.benefit}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="border-t border-white/5 py-16">
        <div className="container flex flex-col items-center gap-4 text-center">
          <h2 className="font-display text-2xl font-semibold">Not sure which service fits?</h2>
          <p className="max-w-lg text-muted-foreground">
            Tell us what you&apos;re trying to fix and we&apos;ll recommend a starting point, even if that means one service, not seven.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Get a free growth plan</Link>
          </Button>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
