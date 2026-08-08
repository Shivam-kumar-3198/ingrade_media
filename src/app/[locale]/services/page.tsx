import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/section-heading";
import { GrowthVisual } from "@/components/shared/growth-visual";
import { FinalCta } from "@/components/sections/final-cta";
import { JsonLd, breadcrumbJsonLd, itemListJsonLd } from "@/components/seo/json-ld";
import { services } from "@/lib/data/services";
import { serviceCardPhotos } from "@/lib/stock-photos";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const panelVariants = [
  "bg-gradient-to-br from-primary/15 via-primary/5 to-transparent",
  "bg-gradient-to-tr from-primary/10 via-transparent to-primary/10",
  "bg-gradient-to-b from-primary/15 via-primary/5 to-transparent",
];

export const metadata: Metadata = {
  title: "Services — Meta Ads, Google Ads, Web & App Development",
  description:
    "Seven services run by one team: Meta Ads, Google Ads, mobile app development, website development, social media management, Webflow, and WordPress.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: siteConfig.url },
          { name: "Services", url: `${siteConfig.url}/services` },
        ])}
      />
      <JsonLd
        data={itemListJsonLd({
          name: "Ingrade Media services",
          items: services.map((service) => ({
            name: service.name,
            url: `${siteConfig.url}/services/${service.slug}`,
            description: service.metaDescription,
          })),
        })}
      />
      <section className="section-glow border-b border-white/5 py-20 sm:py-28">
        <div className="container">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <SectionHeading
              as="h1"
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
        <div className="container">
          <ul role="list" className="grid list-none gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const highlights = service.deliverables.slice(0, 3);
              return (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group block h-full"
                    aria-label={`${service.name} — ${service.benefit}. ${service.proof.stat} ${service.proof.statLabel}. Learn more`}
                  >
                    <Card className="flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow-sm">
                      <div
                        className={cn(
                          "relative h-40 overflow-hidden border-b border-white/5",
                          panelVariants[index % panelVariants.length]
                        )}
                      >
                        <Image
                          src={serviceCardPhotos[service.slug]}
                          alt=""
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card/85 via-card/10 to-card/30" />
                        <div className="absolute inset-x-0 top-0 p-4">
                          <div className="flex justify-end">
                            <div className="rounded-xl border border-white/10 bg-card/90 px-3 py-1.5 text-right backdrop-blur">
                              <p className="font-display text-xl font-semibold leading-none text-primary">
                                {service.proof.stat}
                              </p>
                              <p className="mt-1 max-w-[8rem] text-[10px] leading-tight text-muted-foreground">
                                {service.proof.statLabel}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-1 flex-col p-6">
                        <h2 className="font-display text-lg font-semibold">{service.name}</h2>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.benefit}</p>

                        <ul className="mt-4 flex flex-1 flex-wrap items-start gap-1.5">
                          {highlights.map((item) => (
                            <li
                              key={item.title}
                              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-muted-foreground"
                            >
                              {item.title}
                            </li>
                          ))}
                        </ul>

                        <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary">
                          Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </Card>
                  </Link>
                </li>
              );
            })}
          </ul>
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
