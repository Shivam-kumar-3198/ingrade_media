import { defineRouting } from "next-intl/routing";

// Only "en" ships today. Add more locale codes here (and a matching
// src/messages/<locale>.json) when a translation is actually ready — no
// other routing or page changes are needed to add one.
export const routing = defineRouting({
  locales: ["en"],
  defaultLocale: "en",
  localePrefix: "as-needed",
});

export type AppLocale = (typeof routing.locales)[number];
