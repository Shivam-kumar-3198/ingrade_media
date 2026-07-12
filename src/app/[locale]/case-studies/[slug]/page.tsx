import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, TrendingUp } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GrowthVisual } from "@/components/shared/growth-visual";
import { FinalCta } from "@/components/sections/final-cta";
import { JsonLd, breadcrumbJsonLd } from "@/components/seo/json-ld";
import { caseStudies, getCaseStudyBySlug, getTestimonialAvatar } from "@/lib/data/case-studies";
import { getServiceBySlug } from "@/lib/data/services";
import { getIndustryIcon } from "@/lib/data/process";
import { generateTrendingBars } from "@/lib/growth-bars";
import { siteConfig } from "@/lib/site-config";

interface CaseStudyPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export function generateMetadata({ params }: CaseStudyPageProps): Metadata {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) return {};

  const title = `${study.client}: ${study.headlineResult} ${study.headlineLabel}`;
  return {
    title,
    description: study.summary,
    alternates: { canonical: `/case-studies/${study.slug}` },
    openGraph: {
      title,
      description: study.summary,
      url: `${siteConfig.url}/case-studies/${study.slug}`,
      images: [{ url: `/images/og/${study.slug}.svg`, width: 1200, height: 630, alt: title }],
    },
  };
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) notFound();

  const relatedServices = study.services
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  const Icon = getIndustryIcon(study.industry);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: siteConfig.url },
          { name: "Case Studies", url: `${siteConfig.url}/case-studies` },
          { name: study.client, url: `${siteConfig.url}/case-studies/${study.slug}` },
        ])}
      />

      <section className="section-glow border-b border-white/5 py-20 sm:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Icon className="h-7 w-7" aria-hidden="true" />
            </span>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              <Badge variant="secondary">{study.industry}</Badge>
              <Badge variant="outline">
                {study.countryFlag} {study.country}
              </Badge>
              {relatedServices.map((service) => (
                <Badge key={service.slug} variant="outline">
                  {service.shortName}
                </Badge>
              ))}
            </div>
            <p className="mt-8 flex items-center justify-center gap-3 font-display text-6xl font-semibold text-primary sm:text-7xl">
              <TrendingUp className="h-10 w-10 sm:h-12 sm:w-12" aria-hidden="true" />
              {study.headlineResult}
            </p>
            <p className="mt-2 text-lg text-muted-foreground">{study.headlineLabel}</p>
            <h1 className="mt-6 text-balance font-display text-2xl font-semibold sm:text-3xl">{study.client}</h1>
            <p className="mt-4 text-balance leading-relaxed text-muted-foreground">{study.summary}</p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-display text-xl font-semibold">The challenge</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{study.challenge}</p>

            <h2 className="mt-10 font-display text-xl font-semibold">What we did</h2>
            <ul className="mt-4 space-y-4">
              {study.approach.map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <span className="leading-relaxed text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>

            {study.testimonialQuote && study.testimonialName ? (
              <blockquote className="mt-10 rounded-2xl border border-white/10 bg-card/50 p-6">
                <p className="text-lg leading-relaxed text-foreground/90">&ldquo;{study.testimonialQuote}&rdquo;</p>
                <footer className="mt-5 flex items-center gap-3">
                  <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-secondary">
                    <Image
                      src={getTestimonialAvatar(study.testimonialName)}
                      alt={`Photo of ${study.testimonialName}`}
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </span>
                  <span className="text-sm text-muted-foreground">
                    <span className="block font-medium text-foreground">{study.testimonialName}</span>
                    {study.testimonialRole}
                  </span>
                </footer>
              </blockquote>
            ) : null}
          </div>

          <div>
            <GrowthVisual
              eyebrow={study.client}
              heading={`Over ${study.timeframe}`}
              trendBadge="Case study"
              bars={generateTrendingBars(study.slug)}
              metrics={study.results.slice(0, 2).map((result) => ({ value: result.value, label: result.label }))}
            />

            <h2 className="mt-8 font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Results ({study.timeframe})
            </h2>
            <div className="mt-4 space-y-4">
              {study.results.map((result) => (
                <Card key={result.label} className="p-5">
                  <p className="font-display text-3xl font-semibold text-primary">{result.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{result.label}</p>
                </Card>
              ))}
            </div>

            <div className="mt-8 space-y-3">
              {relatedServices.map((service) => (
                <Link key={service.slug} href={`/services/${service.slug}`} className="group block">
                  <Card className="flex items-center justify-between p-4 transition-colors hover:border-primary/40">
                    <span className="text-sm font-medium">{service.name}</span>
                    <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
                  </Card>
                </Link>
              ))}
            </div>

            <Button asChild size="lg" className="mt-8 w-full">
              <Link href="/contact">Get a free growth plan</Link>
            </Button>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
