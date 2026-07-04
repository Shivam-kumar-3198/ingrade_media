"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { caseStudies } from "@/lib/data/case-studies";
import { getServiceBySlug } from "@/lib/data/services";
import { getIndustryIcon } from "@/lib/data/process";
import { useSelectedCountry } from "@/hooks/use-selected-country";

export function CaseStudiesGrid() {
  const country = useSelectedCountry();
  const ordered = country
    ? [...caseStudies].sort((a, b) => Number(b.country === country.name) - Number(a.country === country.name))
    : caseStudies;

  return (
    <div className="container grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {ordered.map((study) => {
        const primaryService = getServiceBySlug(study.services[0]);
        const Icon = getIndustryIcon(study.industry);
        return (
          <Link key={study.slug} href={`/case-studies/${study.slug}`} className="group">
            <Card className="flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="flex flex-wrap justify-end gap-2">
                  <Badge variant="secondary">{study.industry}</Badge>
                  {primaryService ? <Badge variant="outline">{primaryService.shortName}</Badge> : null}
                </div>
              </div>
              <p className="mt-5 font-display text-4xl font-semibold text-primary">{study.headlineResult}</p>
              <p className="text-sm text-muted-foreground">{study.headlineLabel}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/80">{study.summary}</p>
              <div className="mt-5 flex items-center justify-between text-sm">
                <span className="text-muted-foreground">
                  {study.countryFlag} {study.country}
                </span>
                <span className="inline-flex items-center gap-1 font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Read more <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
