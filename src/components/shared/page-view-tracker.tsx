"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

import { getClientLeadMetadata } from "@/lib/lead-metadata";
import { trackPageview } from "@/lib/pageviews";
import { useSelectedCountry } from "@/hooks/use-selected-country";

export function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const country = useSelectedCountry();
  const lastTracked = useRef<string | null>(null);

  useEffect(() => {
    if (!pathname || pathname.startsWith("/admin")) return;

    const key = `${pathname}?${searchParams.toString()}`;
    if (lastTracked.current === key) return;
    lastTracked.current = key;

    trackPageview(getClientLeadMetadata(), country?.name ?? "").catch(() => {
      // Pageview tracking should never disrupt the visitor experience.
    });
  }, [pathname, searchParams, country]);

  return null;
}
