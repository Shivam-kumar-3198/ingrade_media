import type { Metadata } from "next";

import { SectionHeading } from "@/components/shared/section-heading";
import { InitialsAvatar } from "@/components/shared/initials-avatar";
import { StatsCounter } from "@/components/sections/stats-counter";
import { FinalCta } from "@/components/sections/final-cta";
import { JsonLd, breadcrumbJsonLd } from "@/components/seo/json-ld";
import { team, values } from "@/lib/data/team";
import { homeStats } from "@/lib/data/stats";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Ingrade Media",
  description:
    "Ingrade Media started in 2018 running paid acquisition in-house before becoming an agency. Meet the team behind the accounts and the builds.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: siteConfig.url },
          { name: "About", url: `${siteConfig.url}/about` },
        ])}
      />

      <section className="section-glow border-b border-white/5 py-20 sm:py-28">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-medium uppercase tracking-wider text-primary">About us</span>
            <h1 className="mt-3 text-balance text-4xl font-semibold sm:text-5xl">
              We started as an in-house team that got tired of vague agency reports
            </h1>
            <p className="mt-5 text-balance leading-relaxed text-muted-foreground">
              Ingrade Media was founded in {siteConfig.founded} by two people running paid acquisition and
              product for e-commerce brands. The agency exists because most vendors we hired ourselves
              couldn&apos;t explain their own numbers. We built the reporting we wished we&apos;d had.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Founded {siteConfig.founded} · {siteConfig.countriesServed}+ countries served
            </p>
          </div>
        </div>
      </section>

      <StatsCounter stats={homeStats} />

      <section className="py-20 sm:py-28">
        <div className="container">
          <SectionHeading eyebrow="How we think" title="Three things that shape every account we run" />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="rounded-2xl border border-white/10 bg-card/50 p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-secondary/10 py-20 sm:py-28">
        <div className="container">
          <SectionHeading eyebrow="Team" title="The people who'll actually work on your account" />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <span className="relative mx-auto block h-24 w-24 overflow-hidden rounded-full bg-secondary">
                  <InitialsAvatar name={member.name} className="text-xl" />
                </span>
                <h3 className="mt-4 font-display font-semibold">{member.name}</h3>
                <p className="text-sm text-primary">{member.role}</p>
                <p className="text-xs text-muted-foreground">{member.location}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
