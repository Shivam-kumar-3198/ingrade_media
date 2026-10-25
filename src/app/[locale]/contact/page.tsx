import type { Metadata } from "next";
import Image from "next/image";
import { Mail, Phone, MessageCircle, Clock } from "lucide-react";

import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/forms/contact-form";
import { RatingCard } from "@/components/shared/rating-card";
import { JsonLd, breadcrumbJsonLd } from "@/components/seo/json-ld";
import { IndiaContactCard } from "@/components/sections/india-contact-card";
import { siteConfig, telLink } from "@/lib/site-config";
import { scenePhotos } from "@/lib/stock-photos";

export const metadata: Metadata = {
  title: "Contact Ingrade Media",
  description:
    "Tell us what you're trying to fix or grow. We reply within one business day with next steps, not a generic sales script.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: siteConfig.url },
          { name: "Contact", url: `${siteConfig.url}/contact` },
        ])}
      />

      <section className="section-glow border-b border-white/5 py-20 sm:py-24">
        <div className="container">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <span className="text-sm font-medium uppercase tracking-wider text-primary">Contact</span>
              <h1 className="mt-3 text-balance text-4xl font-semibold sm:text-5xl">
                Get a free growth plan for your account
              </h1>
              <p className="mt-4 text-balance leading-relaxed text-muted-foreground">
                Tell us what you&apos;re running today. We&apos;ll reply within one business day with specific
                next steps — no obligation to sign anything.
              </p>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10">
              <Image
                src={scenePhotos.strategyMeeting}
                alt="Two people reviewing marketing performance charts on a laptop during a strategy discussion"
                fill
                sizes="(min-width: 1024px) 480px, 90vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Card className="p-6 sm:p-8">
            <ContactForm />
          </Card>

          <div className="space-y-6">
            <div className="flex justify-center lg:justify-start">
              <RatingCard />
            </div>

            <IndiaContactCard />

            <Card className="p-6">
              <h2 className="font-display text-lg font-semibold">Prefer to talk it through first?</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {/* TODO: replace with a real Calendly / Cal.com booking link before launch */}
                Book a 20-minute call directly on our calendar — no form required.
              </p>
              <a
                href="#book-a-call"
                className="mt-4 inline-flex items-center justify-center rounded-full bg-secondary px-5 py-2.5 text-sm font-medium text-secondary-foreground hover:bg-secondary/80"
              >
                Book a call (TODO: add Calendly link)
              </a>
            </Card>

            <Card className="space-y-4 p-6">
              <h2 className="font-display text-lg font-semibold">How to reach us directly</h2>
              <div className="flex items-start gap-3 text-sm">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href={`mailto:${siteConfig.email}`} className="text-muted-foreground hover:text-foreground">
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {/* TODO: replace with real phone number before launch */}
                <a href={telLink()} className="text-muted-foreground hover:text-foreground">
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-muted-foreground">
                  {siteConfig.channels.join(", ")}
                </span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-muted-foreground">{siteConfig.timezoneCoverage}</span>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
