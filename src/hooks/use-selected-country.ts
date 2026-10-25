"use client";

import { useCallback, useEffect, useState } from "react";

import { COUNTRY_COOKIE_NAME, GLOBAL_COUNTRY_VALUE, getCountryByCode, type Country } from "@/lib/data/countries";

const CHANGE_EVENT = "ing-country-change";

// IANA names for Indian Standard Time. "Asia/Calcutta" is the legacy alias
// that some browsers and OS images still report.
const INDIA_TIMEZONES = new Set(["Asia/Kolkata", "Asia/Calcutta"]);

function readCookieValue(): string | null {
  const match = document.cookie.match(new RegExp(`(?:^|; )${COUNTRY_COOKIE_NAME}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function detectFromTimezone(): Country | null {
  try {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return INDIA_TIMEZONES.has(timezone) ? getCountryByCode("IN") : null;
  } catch {
    return null;
  }
}

function readCountry(): Country | null {
  if (typeof document === "undefined") return null;
  const cookie = readCookieValue();
  // An explicit "Global" choice must stick, so it is stored as a real cookie
  // value rather than by clearing the cookie (which would re-trigger detection).
  if (cookie === GLOBAL_COUNTRY_VALUE) return null;
  if (cookie) return getCountryByCode(cookie);
  // No cookie yet: the edge geo header only exists on Vercel, so fall back to
  // the browser timezone. This keeps India visitors on the India experience in
  // local dev, on other hosts, and when the geo header is missing.
  return detectFromTimezone();
}

/**
 * Client-side only, by design: reading the country cookie in a server
 * component (via next/headers) would force every page that personalizes
 * content into per-request dynamic rendering, which breaks static
 * generation for the whole marketing site. Reading it after mount keeps
 * every page statically generated; real visitors just see the swap happen
 * within a frame of hydration, which is the standard tradeoff for this kind
 * of client-side personalization (similar to currency/locale switchers).
 */
export function useSelectedCountry(): Country | null {
  const [country, setCountry] = useState<Country | null>(null);

  useEffect(() => {
    setCountry(readCountry());
    const handleChange = () => setCountry(readCountry());
    window.addEventListener(CHANGE_EVENT, handleChange);
    return () => window.removeEventListener(CHANGE_EVENT, handleChange);
  }, []);

  return country;
}

/** True when the visitor is (or has chosen to browse as) an India visitor. */
export function useIsIndia(): boolean {
  return useSelectedCountry()?.code === "IN";
}

export function useSetSelectedCountry() {
  return useCallback((code: string | null) => {
    const value = code ?? GLOBAL_COUNTRY_VALUE;
    document.cookie = `${COUNTRY_COOKIE_NAME}=${value}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }, []);
}
