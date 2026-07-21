# Ingrade Media — Marketing Site

Next.js 14 (App Router) + TypeScript marketing site for Ingrade Media: 7 service pages, case studies,
an MDX blog, a validated contact form, and a full SEO/schema layer. Dark theme with a lime accent,
built to the5.co-style visual language.

## Tech stack

- Next.js 14 (App Router), TypeScript, static generation (SSG) for marketing pages, ISR for the blog
- Tailwind CSS + shadcn/ui-style components (Radix primitives under `src/components/ui`)
- Framer Motion for subtle, `prefers-reduced-motion`-aware animation (`MotionConfig reducedMotion="user"` in the root layout)
- MDX blog (`next-mdx-remote/rsc` + `gray-matter`) reading from `content/blog/*.mdx`, structured so a headless CMS (e.g. Sanity) can replace `src/lib/blog.ts` later without touching the pages
- `react-hook-form` + `zod` contact form with a honeypot field, posting to `src/app/api/contact/route.ts`
- `next-sitemap` for `sitemap.xml` / `robots.txt` (generated at build time, not committed)
- JSON-LD: Organization + ProfessionalService (home), Service (service pages), FAQPage (every FAQ accordion), Article (blog posts), BreadcrumbList (every non-home page)
- `next-intl` locale routing (`src/i18n/`, `src/middleware.ts`) — only English ships today, but every route lives under `src/app/[locale]/` so adding a locale is a config change, not a restructure (see "Internationalization" below)

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

### Other scripts

```bash
npm run build      # next build, then next-sitemap generates sitemap.xml + robots.txt into /public
npm run start       # serve the production build
npm run lint        # ESLint (next/core-web-vitals)
npm run typecheck   # tsc --noEmit
```

## Environment variables

Copy `.env.example` to `.env.local` and fill in what you have:

| Variable | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Yes | Canonical site URL used for metadata, JSON-LD, and sitemap generation |
| `CONTACT_FORM_ENDPOINT` | No (until you wire real delivery) | Where `/api/contact` should forward submissions |
| `RESEND_API_KEY` | No | If you send contact form notifications via Resend |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | No | Google Analytics 4 |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | No | Search Console ownership meta tag |

The contact form currently validates and logs submissions server-side (`src/app/api/contact/route.ts`) but
does **not** send email or hit a CRM yet — see the TODO list below.

## Project structure

```
src/
  middleware.ts                 next-intl locale middleware (matches every non-API, non-static path)
  i18n/
    routing.ts                  Locale list + default locale + prefix strategy
    request.ts                  Loads src/messages/<locale>.json for the active request
  messages/en.json               Message catalog (minimal today — see "Internationalization" below)
  app/                          Routes (App Router)
    globals.css
    api/contact/route.ts         Contact form submission handler (intentionally outside [locale] — not a page)
    [locale]/
      layout.tsx                 Root layout (fonts, JSON-LD, NextIntlClientProvider, Navbar/Footer)
      page.tsx                    Homepage
      not-found.tsx
      services/page.tsx           Services overview
      services/[slug]/page.tsx    Service page template (generateStaticParams covers all 7 services)
      case-studies/page.tsx
      case-studies/[slug]/page.tsx
      about/page.tsx
      blog/page.tsx
      blog/[slug]/page.tsx         MDX post template (ISR, revalidate = 3600)
      contact/page.tsx
      privacy-policy/page.tsx
      terms/page.tsx
  components/
    ui/                        shadcn/ui-style primitives (button, card, accordion, select, sheet, ...)
    layout/                    Navbar, Footer
    sections/                  Hero, StatsCounter, ServicesGrid, HowWeWork, Testimonials, FaqSection, FinalCta, ...
    shared/                    SectionHeading, RatingCard, AvatarCluster
    forms/contact-form.tsx
    seo/json-ld.tsx             JSON-LD builders (Organization, Service, FAQPage, Article, BreadcrumbList)
  lib/
    data/                       Typed content: services, case-studies, testimonials, faqs, stats, nav, team, process
    validations/contact.ts       zod schema shared by the client form and the API route
    blog.ts                     MDX reader (gray-matter + reading-time)
    site-config.ts               Company name, contact info, social links — edit this first
    stock-photos.ts              Every real (stock) photo URL used on the site, in one place — see "Photography" below
content/blog/*.mdx             3 seed posts
public/images/                 OG card art, logo, favicon (SVG) — people/office photos are stock, referenced from stock-photos.ts, not stored here
```

Why the 7 service routes are a single `[slug]` template instead of 7 files: all seven pages share
one structure (hero → pain points → deliverables → process → proof → pricing → FAQ → related
links), so the copy lives in `src/lib/data/services.ts` and the layout lives in one file. `next build`
still emits static HTML at the exact `/services/meta-ads`, `/services/google-ads`, etc. paths via
`generateStaticParams`.

## Deploying to Vercel

1. Push this repo to GitHub/GitLab/Bitbucket.
2. Import it in Vercel as a Next.js project — no build settings need to change (`next build` is the
   default and already runs `next-sitemap` via the `build` script).
3. Add the environment variables from the table above in Vercel's Project Settings → Environment
   Variables. At minimum, set `NEXT_PUBLIC_SITE_URL` to your real production domain — the sitemap,
   canonical URLs, and JSON-LD all read from it.
4. Deploy. Every marketing page is statically generated; blog pages use ISR (`revalidate = 3600`) so
   editing an MDX file and redeploying refreshes them within an hour, or immediately on the next build.

## Internationalization

Every route lives under `src/app/[locale]/`, routed by `src/middleware.ts` via `next-intl`.
`src/i18n/routing.ts` currently declares a single locale (`en`, also the default) with
`localePrefix: "as-needed"` — meaning English pages are served at `/`, `/services`, etc. with **no**
`/en` prefix (confirmed: `/en` 307-redirects to `/`, and the generated sitemap has no locale prefix
either). Adding a second locale is additive, not a restructure:

1. Add the locale code to `locales` in `src/i18n/routing.ts`.
2. Add `src/messages/<locale>.json`.
3. Translate the copy that currently lives as plain English strings in `src/lib/data/*.ts` and the
   components under `src/components/` — none of that copy has been extracted into message keys yet,
   since doing so before a second locale actually exists would just be speculative work. Extract it
   into `useTranslations()` calls (or per-locale data files) at that point.

Note this is a separate concern from country personalization below: `next-intl` here handles
*language* (currently just English); the country feature handles *which country's proof points get
shown first*, in the same language, and works independently of it.

## Country personalization

The site adapts a few pieces of copy to the visitor's country — without ever sacrificing static
generation. A country selector (globe icon, next to the nav CTAs) lets a visitor pick their country;
first-time visitors on Vercel also get it auto-detected via IP geolocation. Once a country is known,
the site:

- Adds a "Now serving {country}" badge and rewords the hero subheadline to name that country
- Reorders the homepage testimonials and results so a matching-country one shows first (and updates
  the testimonials heading to name the country, when there's a match)
- Reorders the case studies index the same way
- Pre-fills the country field on the contact form

**How it works:** `src/middleware.ts` reads Vercel's `x-vercel-ip-country` header and, if it matches a
supported country and no preference is set yet, stores it in a plain (non-httpOnly) `ing_country`
cookie. The `useSelectedCountry()` hook (`src/hooks/use-selected-country.ts`) reads that cookie
**client-side, after mount** — deliberately not via `next/headers` in a server component, since doing
that would force every personalized page into per-request dynamic rendering and break SSG for the
whole marketing site. The tradeoff: personalized content appears a moment after hydration rather than
in the initial HTML (confirmed in testing — server-rendered HTML is always the generic version;
`next build` still marks every page as static). This is the same tradeoff most currency/locale
switchers make.

Supported countries live in `src/lib/data/countries.ts`. Geo-detection only fires on Vercel (the
header is empty everywhere else, including local dev) — elsewhere, personalization only activates via
the manual selector.

## Photography

Client (testimonial/case-study) photos and a handful of office/work section banners are real,
royalty-free Unsplash photos — not illustrations or generated images. **None of these people are
actually Ingrade Media clients.** They're stand-ins so the site has real photography instead of
placeholder boxes; swap them for your own before launch.

The team is handled differently on purpose: `src/lib/data/team.ts` has no photos at all. The About
page renders `InitialsAvatar` (a plain initials-on-color-block, no face) for each team member instead
of a stock photo, since presenting a stock photo of a stranger as if it were a named founder/employee
is a step further than using one for an anonymous-ish client quote. Add real team photos when you have
them — the simplest path is giving `TeamMember` an `avatar` field again and rendering it in
`src/app/[locale]/about/page.tsx` where `InitialsAvatar` is used now.

Every client/scene photo URL lives in one file: `src/lib/stock-photos.ts`. It's organized into:
- `clientPhotos` — keyed by the names in `src/lib/data/testimonials.ts` and `src/lib/data/case-studies.ts`
- `heroClusterPhotos` — the 5 generic faces in the homepage hero's avatar cluster (no name attached)
- `scenePhotos` — office/work photos used as section imagery (results, how-we-work, contact)

To replace a photo, edit the corresponding entry in that one file — every page that uses it updates
automatically. `next.config.mjs` allows `images.unsplash.com` as a remote image source; if you swap
to your own hosted photos, you can remove that entry once nothing references an Unsplash URL anymore.

## Known limitation: OG image generation

`next/og` (`ImageResponse`) has a Windows-specific bug (`TypeError: Invalid URL` inside
`@vercel/og`) that breaks `next build` when developing on Windows. Rather than ship a build that
only works on Linux/macOS, OG images are pre-rendered static SVGs in `public/images/og/`
(one per service, case study, and blog post, generated from the same copy used on the page). If you
want dynamic, pixel-generated OG cards instead, revisit `next/og` once building on macOS/Linux/CI,
or replace the SVGs with designed JPG/PNG exports — see the TODO list below.

## TODO before launch

Everything below is a placeholder and needs a real value before this goes live.

**Brand basics**
- [ ] Confirm the company name/domain (currently "Ingrade Media" / `ingrademedia.com` placeholders in `src/lib/site-config.ts`)
- [ ] Replace the SVG wordmark logo (`public/images/logo.svg`) and favicon (`public/favicon.svg`) with real brand assets
- [ ] Replace `src/lib/site-config.ts` phone number (`+91 8588808538`), email, and office address with real ones
- [ ] Replace social links in `src/lib/site-config.ts` with real profile URLs

**Trust content (client-facing, highest priority — fake data here is a credibility risk)**
- [ ] Replace all 8 client names in `src/lib/data/logos.ts` with real clients (and get logo usage permission) or remove the section if you don't have permission yet
- [ ] Replace testimonials in `src/lib/data/testimonials.ts` with real client quotes, or clearly label them as illustrative
- [ ] Replace all 7 case studies in `src/lib/data/case-studies.ts` with real client results, or get explicit sign-off to publish the placeholder numbers as-is
- [ ] Replace the stats in `src/lib/data/stats.ts` ($12.4M+ ad spend, 240+ clients, 27 countries, 4.2x ROAS) with your real numbers
- [ ] Replace the "4.9★ average client rating" in `src/components/shared/rating-card.tsx` with a real, sourced rating
- [ ] Replace "Google Partner" / "Meta Business Partner" badges in the hero (`src/components/sections/hero.tsx`) if you don't currently hold that certification status
- [ ] Replace team bios in `src/lib/data/team.ts` with real people
- [ ] Replace every photo in `src/lib/stock-photos.ts` (team headshots, client/testimonial photos, hero avatar cluster, section banner scenes) with real ones — see "Photography" above. These are currently real stock photos of people with no connection to Ingrade Media, used as placeholders
- [ ] The bar-chart "dashboard" visual (`src/components/shared/growth-visual.tsx`, shown in the homepage hero and every service page hero) is illustrative — the bar heights are generated, not pulled from real account data. The one real number on each card (e.g. "2.1x Average ROAS") comes from `src/lib/data/services.ts`, so fix the data there, not the chart. Consider swapping it for a real dashboard screenshot per service once you have one to show

**Forms & integrations**
- [ ] Wire `src/app/api/contact/route.ts` to actually send email or push to a CRM (Resend, HubSpot, etc.) — right now it validates and only logs to the server console
- [ ] Add a real booking link on `/contact` (the "Book a call" button is a placeholder anchor — see the TODO comment in `src/app/contact/page.tsx`)
- [ ] Add `NEXT_PUBLIC_GA_MEASUREMENT_ID` (or your analytics tool of choice) once you have a property
- [ ] Add `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` once you've added the site in Search Console

**Legal**
- [ ] Have `src/app/privacy-policy/page.tsx` and `src/app/terms/page.tsx` reviewed by a qualified attorney — both have inline TODO comments flagging sections that need real legal input (GDPR/CCPA applicability, liability caps, governing law, dated "last updated")

**Nice-to-haves, not blockers**
- [ ] Swap the pre-rendered SVG OG images for designed JPG/PNG exports (see "Known limitation" above)
- [ ] Add real client logos as SVGs instead of the text-based placeholder in `LogoStrip`
- [ ] Add more locales — routing is already scaffolded (`src/i18n/`, `src/app/[locale]/`), just add a locale code and a message file when a translation actually exists (see "Internationalization" above)
- [ ] Add more countries to `src/lib/data/countries.ts` as you sign clients in new markets — the personalization in "Country personalization" above only prioritizes a country's testimonial/case study once one exists for it, so pair new countries with a matching testimonial or case study
