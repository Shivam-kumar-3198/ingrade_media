import type { Metadata } from "next";

import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Ingrade Media collects, uses, and protects information submitted through this website.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <article className="py-20 sm:py-28">
      <div className="container max-w-3xl">
        <h1 className="text-3xl font-semibold sm:text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: TODO — insert date of legal review.</p>

        <div className="prose prose-invert mt-10 max-w-none prose-headings:font-display prose-a:text-primary prose-p:text-foreground/85 prose-li:text-foreground/85">
          <p>
            {/* TODO: Have this policy reviewed by a qualified attorney before launch, especially for GDPR/UK GDPR and
            CCPA applicability given the international client base described on this site. */}
            This Privacy Policy explains what information {siteConfig.legalName} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) collects through{" "}
            {siteConfig.url}, how we use it, and the choices you have. It applies to visitors and clients located
            anywhere we serve clients, including the United States, United Kingdom, European Union, United Arab
            Emirates, and Asia-Pacific.
          </p>

          <h2>Information we collect</h2>
          <ul>
            <li>Contact details you submit through our contact form: name, email, company, website, country, budget range, and message.</li>
            <li>Usage data collected automatically, such as pages visited, device type, and referral source, via analytics tools (see &ldquo;Analytics&rdquo; below).</li>
            <li>Communications you send us directly by email, WhatsApp, or Slack.</li>
          </ul>

          <h2>How we use information</h2>
          <ul>
            <li>To respond to inquiries submitted through the contact form.</li>
            <li>To provide, operate, and improve our services for existing clients.</li>
            <li>To send occasional updates about our services, which you can opt out of at any time.</li>
            <li>To understand site usage and improve page performance and content.</li>
          </ul>

          <h2>Analytics</h2>
          <p>
            {/* TODO: confirm final analytics stack and update this section accordingly */}
            We use Google Analytics (GA4) to understand aggregate site usage. Google Analytics uses cookies; you can
            control cookie behavior through your browser settings or a cookie consent tool if one is enabled on this
            site.
          </p>

          <h2>Data sharing</h2>
          <p>
            We do not sell personal information. We may share information with service providers who help us operate
            this site or deliver services (for example, email delivery or CRM tools), bound by confidentiality
            obligations.
          </p>

          <h2>International data transfers</h2>
          <p>
            Because we serve clients across multiple regions, information may be processed in countries other than
            where you are located. {/* TODO: add specific transfer mechanism details (SCCs, etc.) after legal review. */}
          </p>

          <h2>Your rights</h2>
          <p>
            Depending on your location, you may have rights to access, correct, delete, or port your personal
            information, or to object to certain processing. To exercise any of these rights, contact us at{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy can be sent to <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>{" "}
            or {siteConfig.address.line1}, {siteConfig.address.city}, {siteConfig.address.region}{" "}
            {siteConfig.address.postalCode}, {siteConfig.address.country}.
          </p>
        </div>
      </div>
    </article>
  );
}
