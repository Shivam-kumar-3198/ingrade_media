import createIntlMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";

import { routing } from "./i18n/routing";
import { countries, COUNTRY_COOKIE_NAME } from "./lib/data/countries";

const intlMiddleware = createIntlMiddleware(routing);
const supportedCodes = new Set(countries.map((c) => c.code));

function detectCountryCode(request: NextRequest): string | undefined {
  // Vercel sets this geo header at the edge; falls back to NextRequest.geo
  // on older runtimes. Both are undefined in local dev, which is expected —
  // the site just falls back to its existing generic copy.
  const headerCountry = request.headers.get("x-vercel-ip-country");
  const geoCountry = (request as NextRequest & { geo?: { country?: string } }).geo?.country;
  return headerCountry ?? geoCountry ?? undefined;
}

export default function middleware(request: NextRequest) {
  const response = intlMiddleware(request);

  if (!request.cookies.get(COUNTRY_COOKIE_NAME)) {
    const detected = detectCountryCode(request)?.toUpperCase();
    if (detected && supportedCodes.has(detected)) {
      response.cookies.set(COUNTRY_COOKIE_NAME, detected, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
        sameSite: "lax",
      });
    }
  }

  return response;
}

export const config = {
  // Skip API routes, static files, and Next internals — everything else
  // gets resolved to a locale (transparently, since "en" has no prefix).
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
