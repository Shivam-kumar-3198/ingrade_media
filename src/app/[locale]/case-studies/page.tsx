import type { Metadata } from "next";

import { SectionHeading } from "@/components/shared/section-heading";
import { CaseStudiesGrid } from "@/components/sections/case-studies-grid";
import { FinalCta } from "@/components/sections/final-cta";
import { JsonLd, breadcrumbJsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Case Studies — Real Client Results",
  description:
    "Client results across e-commerce, SaaS, healthcare, real estate, education, and local services, with named clients and specific numbers.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: siteConfig.url },
          { name: "Case Studies", url: `${siteConfig.url}/case-studies` },
        ])}
      />
      <section className="section-glow border-b border-white/5 py-20 sm:py-28">
        <div className="container">
          <SectionHeading
            eyebrow="Case studies"
            title="Named clients, specific numbers, no anonymized 'Client A'"
            description="Every result below links to a full breakdown of what we changed and why it worked."
          />
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <CaseStudiesGrid />
      </section>

      <FinalCta />
    </>
  );
}
