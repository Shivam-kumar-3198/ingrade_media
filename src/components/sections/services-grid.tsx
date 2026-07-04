import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/section-heading";
import { getServiceSummaries } from "@/lib/data/services";

export function ServicesGrid() {
  const services = getServiceSummaries();

  return (
    <section className="py-20 sm:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="What we do"
          title="Seven services. One team that already talks to each other."
          description="No handoffs between disconnected vendors. The same team that builds your site sees the ad data driving traffic to it."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link key={service.slug} href={`/services/${service.slug}`} className="group">
                <Card className="h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">{service.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.benefit}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
