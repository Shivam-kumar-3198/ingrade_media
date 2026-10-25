"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { AvatarCluster } from "@/components/shared/avatar-cluster";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { siteConfig } from "@/lib/site-config";
import { useIsIndia } from "@/hooks/use-selected-country";

interface FinalCtaProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
}

export function FinalCta({
  title = "Get a free audit of your current marketing",
  description = "Send us what you're running today. We'll tell you what's working, what's leaking budget, and where we'd start — no obligation to sign anything.",
  primaryLabel = "Get my free audit",
  primaryHref = "/contact",
}: FinalCtaProps) {
  const isIndia = useIsIndia();

  return (
    <section className="section-glow relative overflow-hidden border-t border-white/5 py-20 sm:py-28">
      <div className="container relative z-10 flex flex-col items-center text-center">
        <div className="flex items-center gap-3">
          <AvatarCluster />
          <span className="text-sm text-muted-foreground">
            {isIndia
              ? "Trusted by brands across India and clients in 27+ countries"
              : `Trusted by clients growing across ${siteConfig.countriesServed}+ countries`}
          </span>
        </div>
        <h2 className="mt-6 max-w-2xl text-balance text-3xl font-semibold sm:text-4xl">{title}</h2>
        <p className="mt-4 max-w-xl text-balance text-muted-foreground">{description}</p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href={primaryHref}>
              {primaryLabel}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          {isIndia ? <WhatsAppButton size="lg" label="Or chat on WhatsApp" /> : null}
        </div>
      </div>
    </section>
  );
}
