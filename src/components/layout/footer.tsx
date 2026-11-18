import Link from "next/link";
import { Linkedin, Instagram, Youtube, Twitter } from "lucide-react";

import { FooterBlurb, FooterIndiaContact } from "@/components/layout/footer-localized";
import { siteConfig } from "@/lib/site-config";
import { footerServiceLinks, footerCompanyLinks, footerLegalLinks } from "@/lib/data/nav";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background">
      <div className="container grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Link href="/" className="font-display text-lg font-semibold tracking-tight">
            Ingrade<span className="text-primary">Media</span>
          </Link>
          <FooterBlurb />
          <div className="mt-6 flex gap-4">
            <a href={siteConfig.social.linkedin} aria-label="Ingrade Media on LinkedIn" className="text-muted-foreground hover:text-primary">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href={siteConfig.social.instagram} aria-label="Ingrade Media on Instagram" className="text-muted-foreground hover:text-primary">
              <Instagram className="h-5 w-5" />
            </a>
            <a href={siteConfig.social.x} aria-label="Ingrade Media on X" className="text-muted-foreground hover:text-primary">
              <Twitter className="h-5 w-5" />
            </a>
            <a href={siteConfig.social.youtube} aria-label="Ingrade Media on YouTube" className="text-muted-foreground hover:text-primary">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold">Services</h3>
          <ul className="mt-4 space-y-3">
            {footerServiceLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold">Company</h3>
          <ul className="mt-4 space-y-3">
            {footerCompanyLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-foreground">
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`} className="hover:text-foreground">
                {siteConfig.phone}
              </a>
            </li>
            <FooterIndiaContact />
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        {/* Extra bottom padding keeps these links clear of the floating WhatsApp button (fixed, bottom-right). */}
        <div className="container flex flex-col items-center gap-4 pb-24 pt-6 text-sm text-muted-foreground sm:pb-20 md:flex-row md:gap-8">
          <p className="text-xs">© {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.</p>
          <nav aria-label="Legal" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {footerLegalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="font-medium text-foreground/80 underline-offset-4 hover:text-primary hover:underline">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
