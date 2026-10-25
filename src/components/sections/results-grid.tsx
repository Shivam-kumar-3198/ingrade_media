"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/section-heading";
import { caseStudies } from "@/lib/data/case-studies";
import { indiaClients } from "@/lib/data/india";
import { getIndustryIcon } from "@/lib/data/process";
import { getServiceBySlug } from "@/lib/data/services";
import { scenePhotos } from "@/lib/stock-photos";
import { useSelectedCountry } from "@/hooks/use-selected-country";

const featuredSlugs = ["northline-saas", "carehive-scheduling", "keyspace-real-estate"];

export function ResultsGrid() {
  const country = useSelectedCountry();
  const isIndia = country?.code === "IN";
  let featured = caseStudies.filter((study) => featuredSlugs.includes(study.slug));

  if (country && !isIndia) {
    const localMatch = caseStudies.find((study) => study.country === country.name);
    if (localMatch) {
      featured = [localMatch, ...featured.filter((study) => study.slug !== localMatch.slug)].slice(0, 3);
    }
  }

  return (
    <section className="py-20 sm:py-28">
      <div className="container">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {isIndia ? (
            <SectionHeading
              eyebrow="Work in India"
              title="Brands we're growing right now"
              description="Live engagements across EdTech, fintech, real estate, automotive, and nonprofits. We publish a write-up once results are confirmed, and we're happy to share numbers to date on a call."
            />
          ) : (
            <SectionHeading
              eyebrow="Results"
              title="A few numbers from the last year of client work"
              description="Every result below is tied to a named client and a specific timeframe. Full breakdowns are one click away."
            />
          )}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10">
            <Image
              src={scenePhotos.resultsCelebration}
              alt="Two colleagues celebrating a win at their desk after a strong month of results"
              fill
              sizes="(min-width: 1024px) 480px, 90vw"
              className="object-cover"
            />
          </div>
        </div>

        {isIndia ? (
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {indiaClients.map((study) => {
              const Icon = getIndustryIcon(study.industry);
              return (
                <Link key={study.slug} href={`/case-studies/${study.slug}`} className="group">
                  <Card className="flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                    <div className="flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <Badge variant="secondary">{study.industry}</Badge>
                    </div>
                    <h3 className="mt-4 font-display text-xl font-semibold">{study.client}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground/80">{study.summary}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {study.services.map((slug) => (
                        <Badge key={slug} variant="outline">
                          {getServiceBySlug(slug)?.shortName ?? slug}
                        </Badge>
                      ))}
                    </div>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                      See what we&apos;re doing <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  </Card>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {featured.map((study) => {
              const Icon = getIndustryIcon(study.industry);
              return (
                <Link key={study.slug} href={`/case-studies/${study.slug}`} className="group">
                  <Card className="h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                    <div className="flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {study.industry} · {study.countryFlag} {study.country}
                      </span>
                    </div>
                    <p className="mt-4 font-display text-4xl font-semibold text-primary">{study.headlineResult}</p>
                    <p className="text-sm text-muted-foreground">{study.headlineLabel}</p>
                    <p className="mt-4 text-sm leading-relaxed text-foreground/80">{study.summary}</p>
                    <span className="mt-4 inline-block text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                      Read the case study →
                    </span>
                  </Card>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
