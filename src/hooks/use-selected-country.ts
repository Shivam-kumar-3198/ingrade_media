"use client";

import { useCallback, useEffect, useState } from "react";

import { COUNTRY_COOKIE_NAME, getCountryByCode, type Country } from "@/lib/data/countries";

const CHANGE_EVENT = "ing-country-change";

function readCountryCookie(): Country | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${COUNTRY_COOKIE_NAME}=([^;]*)`));
  return getCountryByCode(match ? decodeURIComponent(match[1]) : undefined);
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
    setCountry(readCountryCookie());
    const handleChange = () => setCountry(readCountryCookie());
    window.addEventListener(CHANGE_EVENT, handleChange);
    return () => window.removeEventListener(CHANGE_EVENT, handleChange);
  }, []);

  return country;
}

export function useSetSelectedCountry() {
  return useCallback((code: string | null) => {
    if (!code) {
      document.cookie = `${COUNTRY_COOKIE_NAME}=; path=/; max-age=0; samesite=lax`;
    } else {
      document.cookie = `${COUNTRY_COOKIE_NAME}=${code}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;
    }
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }, []);
}
