"use client";

import { useIsIndia } from "@/hooks/use-selected-country";
import { siteConfig, whatsappLink } from "@/lib/site-config";

export function FooterBlurb() {
  const isIndia = useIsIndia();

  return (
    <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
      {isIndia ? (
        <>
          Paid media, social, and product development for Indian brands, run from our base in Noida. We also work with
          teams across {siteConfig.countriesServed}+ countries.
        </>
      ) : (
        <>
          Paid media, social, and product development for companies growing across {siteConfig.countriesServed}+
          countries. {siteConfig.timezoneCoverage}.
        </>
      )}
    </p>
  );
}

/** Location row for everyone; India visitors also get WhatsApp and support hours. */
export function FooterIndiaContact() {
  const isIndia = useIsIndia();
  if (!isIndia) return <li className="text-muted-foreground/80">{siteConfig.address.line1}</li>;

  return (
    <>
      <li>
        <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
          WhatsApp us
        </a>
      </li>
      <li className="text-muted-foreground/80">{siteConfig.india.supportHours}</li>
      <li className="text-muted-foreground/80">
        {siteConfig.address.locality}, {siteConfig.address.region}, India
      </li>
    </>
  );
}
