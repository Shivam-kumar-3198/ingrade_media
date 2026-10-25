import type { Metadata } from "next";

import { Hero } from "@/components/sections/hero";
import { LogoStrip } from "@/components/sections/logo-strip";
import { IndiaTrustBar } from "@/components/sections/india-trust-bar";
import { StatsCounter } from "@/components/sections/stats-counter";
import { ServicesGrid } from "@/components/sections/services-grid";
import { IndustriesStrip } from "@/components/sections/industries-strip";
import { HowWeWork } from "@/components/sections/how-we-work";
import { ResultsGrid } from "@/components/sections/results-grid";
import { WhyUs } from "@/components/sections/why-us";
import { Testimonials } from "@/components/sections/testimonials";
import { InstagramFeed } from "@/components/sections/instagram-feed";
import { LocalizedFaqSection } from "@/components/sections/localized-faq-section";
import { FinalCta } from "@/components/sections/final-cta";
import { homeStats } from "@/lib/data/stats";
import { homeFaqs } from "@/lib/data/faqs";
import { indiaHomeFaqs, indiaStats } from "@/lib/data/india";

export const metadata: Metadata = {
  title: "Meta Ads, Google Ads, Web & App Development Agency in India and Worldwide",
  description:
    "Ingrade Media is a Noida-based agency running paid media, social, and product development for brands in India and 27+ countries. $12M+ in ad spend managed, 4.2x average client ROAS.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <IndiaTrustBar />
      <StatsCounter stats={homeStats} indiaStats={indiaStats} />
      <ServicesGrid />
      <IndustriesStrip />
      <HowWeWork />
      <ResultsGrid />
      <WhyUs />
      <Testimonials />
      <InstagramFeed />
      <LocalizedFaqSection faqs={homeFaqs} indiaFaqs={indiaHomeFaqs} idPrefix="home-faq" />
      <FinalCta />
    </>
  );
}
