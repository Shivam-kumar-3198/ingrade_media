"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, PlayCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RatingCard } from "@/components/shared/rating-card";
import { GrowthVisual } from "@/components/shared/growth-visual";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { siteConfig } from "@/lib/site-config";
import { useSelectedCountry } from "@/hooks/use-selected-country";

export function Hero() {
  const country = useSelectedCountry();
  const isIndia = country?.code === "IN";

  return (
    <section className="section-glow relative overflow-hidden bg-grid pb-20 pt-20 sm:pb-28 sm:pt-28">
      <div className="container relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <div className="mb-6 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
              <Badge variant="outline">Google Partner</Badge>
              <Badge variant="outline">Meta Business Partner</Badge>
              {isIndia ? (
                <Badge>
                  <MapPin className="mr-1.5 h-3 w-3" aria-hidden="true" />
                  Based in Noida, serving brands across India
                </Badge>
              ) : country ? (
                <Badge>
                  {country.flag} Now serving {country.name}
                </Badge>
              ) : null}
            </div>

            <h1 className="text-balance text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-6xl">
              More customers from your ad spend.
              <br />
              <span className="text-primary">Not more reports.</span>
            </h1>

            <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-muted-foreground">
              {isIndia ? (
                <>
                  We run Meta Ads, Google Ads, social, and web development for Indian brands, from D2C and EdTech to
                  real estate and fintech. Weekly numbers you can actually read, billed in ₹ with GST invoices.
                </>
              ) : country ? (
                <>
                  We run Meta Ads, Google Ads, social, and web development for companies across{" "}
                  {country.flag} {country.name} and {siteConfig.countriesServed}+ other countries, with
                  weekly numbers you can actually read.
                </>
              ) : (
                <>
                  We run Meta Ads, Google Ads, social, and web development for companies in{" "}
                  {siteConfig.countriesServed}+ countries, with weekly numbers you can actually read.
                </>
              )}
            </p>

            <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">
                  Get a free growth plan
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              {isIndia ? (
                <WhatsAppButton size="lg" />
              ) : (
                <Button asChild variant="ghost" size="lg">
                  <Link href="/case-studies">
                    <PlayCircle className="mr-2 h-4 w-4" />
                    See our work
                  </Link>
                </Button>
              )}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12"
            >
              <RatingCard />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex justify-center lg:justify-end"
          >
            <GrowthVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
