import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/section-heading";
import { GrowthVisual } from "@/components/shared/growth-visual";
import { generateTrendingBars } from "@/lib/growth-bars";
import { LocalizedFaqSection } from "@/components/sections/localized-faq-section";
import { ServicePricing } from "@/components/sections/service-pricing";
import { FinalCta } from "@/components/sections/final-cta";
import { localizeServiceFaqs } from "@/lib/data/india";
import { JsonLd, breadcrumbJsonLd, serviceJsonLd } from "@/components/seo/json-ld";
import { services, getServiceBySlug, getServiceSummaries } from "@/lib/data/services";
import { getCaseStudyBySlug } from "@/lib/data/case-studies";
import { siteConfig } from "@/lib/site-config";

interface ServicePageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};

  return {
    title: service.metaTitle.replace(" | Ingrade Media", ""),
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${siteConfig.url}/services/${service.slug}`,
      images: [{ url: `/images/og/${service.slug}.svg`, width: 1200, height: 630, alt: service.name }],
    },
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const relatedServices = getServiceSummaries().filter((s) => service.relatedServices.includes(s.slug));
  const relatedCaseStudy = getCaseStudyBySlug(service.relatedCaseStudy);
  const Icon = service.icon;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: siteConfig.url },
          { name: "Services", url: `${siteConfig.url}/services` },
          { name: service.name, url: `${siteConfig.url}/services/${service.slug}` },
        ])}
      />
      <JsonLd
        data={serviceJsonLd({
          siteUrl: siteConfig.url,
          name: service.name,
          description: service.metaDescription,
          url: `${siteConfig.url}/services/${service.slug}`,
        })}
      />

      {/* Hero */}
      <section className="section-glow border-b border-white/5 py-20 sm:py-28">
        <div className="container">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <h1 className="mt-6 text-balance text-4xl font-semibold leading-tight sm:text-5xl">
                {service.heroHeadline}
              </h1>
              <p className="mt-5 text-balance text-lg leading-relaxed text-muted-foreground">
                {service.heroSubheadline}
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Get a free growth plan
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="ghost" size="lg">
                  <Link href={`/case-studies/${service.relatedCaseStudy}`}>See a related result</Link>
                </Button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <GrowthVisual
                eyebrow={service.shortName}
                heading="Client trend over time"
                trendBadge="Real client result"
                bars={generateTrendingBars(service.slug)}
                metrics={[{ value: service.proof.stat, label: service.proof.statLabel }]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Signs you need this */}
      <section className="py-20 sm:py-28">
        <div className="container">
          <SectionHeading
            eyebrow="Signs you need this"
            title="If any of this sounds familiar, it's worth a conversation"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {service.painPoints.map((pain) => (
              <Card key={pain.title} className="p-6">
                <h3 className="font-display text-base font-semibold">{pain.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pain.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="border-t border-white/5 bg-secondary/10 py-20 sm:py-28">
        <div className="container">
          <SectionHeading eyebrow="What's included" title="What you actually get every month" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.deliverables.map((item) => (
              <div key={item.title} className="flex gap-3 rounded-2xl border border-white/10 bg-card/50 p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 sm:py-28">
        <div className="container">
          <SectionHeading eyebrow="Process" title={`How we run ${service.shortName.toLowerCase()}`} />
          <div className="mt-12 space-y-6">
            {service.process.map((step, index) => (
              <div key={step.title} className="flex gap-5 border-b border-white/5 pb-6 last:border-none">
                <span className="font-display text-2xl font-semibold text-primary/40">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="border-y border-white/5 bg-secondary/10 py-20 sm:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-card/60 p-8 text-center sm:p-12">
            <p className="font-display text-5xl font-semibold text-primary sm:text-6xl">{service.proof.stat}</p>
            <p className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">{service.proof.statLabel}</p>
            <p className="mt-6 text-balance text-lg leading-relaxed text-foreground/90">{service.proof.summary}</p>
            <p className="mt-4 text-sm text-muted-foreground">— {service.proof.client}</p>
            <Link
              href={`/case-studies/${service.relatedCaseStudy}`}
              className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary"
            >
              Read the full case study <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing philosophy */}
      <section className="py-20 sm:py-28">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-medium uppercase tracking-wider text-primary">Pricing</span>
            <h2 className="mt-3 text-balance text-3xl font-semibold sm:text-4xl">{service.pricingModel.title}</h2>
            <ServicePricing
              slug={service.slug}
              description={service.pricingModel.description}
              startingPoint={service.pricingModel.startingPoint}
            />
          </div>
        </div>
      </section>

      <LocalizedFaqSection
        faqs={service.faqs}
        indiaFaqs={localizeServiceFaqs(service.slug, service.faqs)}
        idPrefix={`${service.slug}-faq`}
        eyebrow="FAQ"
        title={`${service.shortName} questions, answered directly`}
      />

      {/* Related services + case study */}
      <section className="border-t border-white/5 py-16">
        <div className="container">
          <h2 className="font-display text-xl font-semibold">Related services</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {relatedServices.map((related) => (
              <Link key={related.slug} href={`/services/${related.slug}`} className="group">
                <Card className="flex items-center justify-between p-5 transition-colors hover:border-primary/40">
                  <div>
                    <p className="font-medium">{related.name}</p>
                    <p className="text-sm text-muted-foreground">{related.benefit}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
                </Card>
              </Link>
            ))}
          </div>
          {relatedCaseStudy ? (
            <div className="mt-6">
              <Link href={`/case-studies/${relatedCaseStudy.slug}`} className="group">
                <Card className="flex items-center justify-between p-5 transition-colors hover:border-primary/40">
                  <div>
                    <p className="font-medium">
                      Case study: {relatedCaseStudy.client} — {relatedCaseStudy.headlineResult} {relatedCaseStudy.headlineLabel}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {relatedCaseStudy.industry} · {relatedCaseStudy.countryFlag} {relatedCaseStudy.country}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
                </Card>
              </Link>
            </div>
          ) : null}
        </div>
      </section>

      <FinalCta
        title={`Get a free audit of your ${service.shortName.toLowerCase()}`}
        primaryLabel="Get my free audit"
      />
    </>
  );
}
