import { siteConfig } from "@/lib/site-config";

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function organizationJsonLd(siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Ingrade Media",
    url: siteUrl,
    logo: `${siteUrl}/icon-512.png`,
    sameAs: [
      "https://www.linkedin.com/company/ingrade-media",
      "https://www.instagram.com/ingrademedia",
      "https://www.x.com/ingrademedia",
      "https://www.youtube.com/@ingrademedia",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "hello@ingrademedia.com",
      availableLanguage: ["English"],
    },
  };
}

export function localBusinessJsonLd(siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Ingrade Media",
    url: siteUrl,
    image: `${siteUrl}/images/og/default.svg`,
    priceRange: "$$",
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.line1,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country,
    },
    areaServed: [{ "@type": "Country", name: "India" }, "Worldwide"],
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function serviceJsonLd(params: {
  siteUrl: string;
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: params.name,
    name: params.name,
    description: params.description,
    url: params.url,
    provider: {
      "@type": "Organization",
      name: "Ingrade Media",
      url: params.siteUrl,
    },
    areaServed: "Worldwide",
  };
}

export function itemListJsonLd(params: {
  name: string;
  items: { name: string; url: string; description?: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: params.name,
    itemListElement: params.items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: item.name,
        url: item.url,
        ...(item.description ? { description: item.description } : {}),
      },
    })),
  };
}

export function articleJsonLd(params: {
  siteUrl: string;
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: params.title,
    description: params.description,
    url: params.url,
    datePublished: params.datePublished,
    dateModified: params.dateModified || params.datePublished,
    author: {
      "@type": "Person",
      name: params.authorName,
    },
    publisher: {
      "@type": "Organization",
      name: "Ingrade Media",
      url: params.siteUrl,
    },
  };
}
