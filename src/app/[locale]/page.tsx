import type { Metadata } from "next";

import { Hero } from "@/components/sections/hero";
import { LogoStrip } from "@/components/sections/logo-strip";
import { StatsCounter } from "@/components/sections/stats-counter";
import { ServicesGrid } from "@/components/sections/services-grid";
import { IndustriesStrip } from "@/components/sections/industries-strip";
import { HowWeWork } from "@/components/sections/how-we-work";
import { ResultsGrid } from "@/components/sections/results-grid";
import { WhyUs } from "@/components/sections/why-us";
import { Testimonials } from "@/components/sections/testimonials";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCta } from "@/components/sections/final-cta";
import { homeStats } from "@/lib/data/stats";
import { homeFaqs } from "@/lib/data/faqs";

export const metadata: Metadata = {
  title: "Meta Ads, Google Ads, Web & App Development Agency",
  description:
    "Ingrade Media runs paid media, social, and product development for companies in 27+ countries. $12M+ in ad spend managed, 4.2x average client ROAS.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <StatsCounter stats={homeStats} />
      <ServicesGrid />
      <IndustriesStrip />
      <HowWeWork />
      <ResultsGrid />
      <WhyUs />
      <Testimonials />
      <FaqSection faqs={homeFaqs} idPrefix="home-faq" />
      <FinalCta />
    </>
  );
}
