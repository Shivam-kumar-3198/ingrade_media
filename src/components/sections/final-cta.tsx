import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { AvatarCluster } from "@/components/shared/avatar-cluster";
import { siteConfig } from "@/lib/site-config";

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
  return (
    <section className="section-glow relative overflow-hidden border-t border-white/5 py-20 sm:py-28">
      <div className="container relative z-10 flex flex-col items-center text-center">
        <div className="flex items-center gap-3">
          <AvatarCluster />
          <span className="text-sm text-muted-foreground">
            Trusted by clients growing across {siteConfig.countriesServed}+ countries
          </span>
        </div>
        <h2 className="mt-6 max-w-2xl text-balance text-3xl font-semibold sm:text-4xl">{title}</h2>
        <p className="mt-4 max-w-xl text-balance text-muted-foreground">{description}</p>
        <Button asChild size="lg" className="mt-8">
          <Link href={primaryHref}>
            {primaryLabel}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
