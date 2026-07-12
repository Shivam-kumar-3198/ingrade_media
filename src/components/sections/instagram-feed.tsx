"use client";

import Link from "next/link";
import Script from "next/script";
import { Instagram } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/section-heading";
import { siteConfig } from "@/lib/site-config";

const ELFSIGHT_WIDGET_ID = process.env.NEXT_PUBLIC_ELFSIGHT_WIDGET_ID;

export function InstagramFeed() {
  return (
    <section className="section-glow relative overflow-hidden border-t border-white/5 py-20 sm:py-28">
      <div className="container relative z-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="On Instagram" title="Recent work, straight from @ingrade_media" />
          <Button asChild variant="outline" className="shrink-0">
            <Link href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer">
              <Instagram className="mr-2 h-4 w-4" />
              Follow us
            </Link>
          </Button>
        </div>

        <div className="relative mt-14">
          <div
            className="pointer-events-none absolute -top-16 left-1/4 h-56 w-56 rounded-full bg-primary/10 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-16 right-1/4 h-56 w-56 rounded-full bg-primary/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative rounded-3xl border border-border bg-card/60 p-3 shadow-glow-sm backdrop-blur-sm sm:p-5">
            {ELFSIGHT_WIDGET_ID ? (
              <>
                <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" async />
                <div
                  className={`elfsight-app-${ELFSIGHT_WIDGET_ID} min-h-[320px] overflow-hidden rounded-2xl`}
                  data-elfsight-app-lazy
                />
              </>
            ) : (
              <Link
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-4 rounded-2xl border border-dashed border-border bg-secondary/40 px-6 py-16 text-center transition-colors hover:bg-secondary/60"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)] shadow-glow-sm transition-transform duration-300 group-hover:scale-105">
                  <Instagram className="h-8 w-8 text-white" />
                </span>
                <div>
                  <p className="text-base font-medium">@ingrade_media</p>
                  <p className="mt-1 max-w-sm text-sm text-muted-foreground">
                    Our live feed is on its way — tap through to see the latest posts on Instagram.
                  </p>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
