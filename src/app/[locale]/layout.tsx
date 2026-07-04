import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Inter, Sora } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { MotionConfig } from "framer-motion";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { JsonLd, organizationJsonLd, localBusinessJsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";
import { routing } from "@/i18n/routing";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Ingrade Media | Paid Media, Social, and Web Development for Global Teams",
    template: "%s | Ingrade Media",
  },
  description:
    "Meta Ads, Google Ads, app development, website development, social media management, Webflow, and WordPress — run by one team across 27+ countries.",
  keywords: [
    "digital marketing agency",
    "Meta Ads management",
    "Google Ads management",
    "Webflow development agency",
    "WordPress development agency",
    "app development agency",
  ],
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Ingrade Media | Paid Media, Social, and Web Development for Global Teams",
    description:
      "Meta Ads, Google Ads, app development, website development, social media management, Webflow, and WordPress — run by one team across 27+ countries.",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Ingrade Media" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ingrade Media | Paid Media, Social, and Web Development for Global Teams",
    description:
      "Meta Ads, Google Ads, app development, website development, social media management, Webflow, and WordPress — run by one team across 27+ countries.",
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: "/favicon.svg",
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } }
    : {}),
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function RootLayout({ children, params: { locale } }: RootLayoutProps) {
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${sora.variable}`}>
      <body className="min-h-screen bg-background font-sans text-foreground">
        <JsonLd data={organizationJsonLd(siteConfig.url)} />
        <JsonLd data={localBusinessJsonLd(siteConfig.url)} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <NextIntlClientProvider messages={messages}>
          <MotionConfig reducedMotion="user">
            <Navbar />
            <main id="main-content">{children}</main>
            <Footer />
          </MotionConfig>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
