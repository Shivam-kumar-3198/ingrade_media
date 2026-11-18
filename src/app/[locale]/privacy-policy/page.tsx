import type { Metadata } from "next";

import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Ingrade Media collects, uses, shares, and protects personal information submitted through this website and in the course of our services.",
  alternates: { canonical: "/privacy-policy" },
};

const sections = [
  ["introduction", "Introduction and scope"],
  ["collect", "Information we collect"],
  ["use", "How we use information"],
  ["legal-basis", "Legal basis and consent"],
  ["cookies", "Cookies and similar technologies"],
  ["sharing", "Sharing and disclosure"],
  ["transfers", "International data transfers"],
  ["retention", "Data retention"],
  ["security", "Data security"],
  ["rights", "Your rights and choices"],
  ["client-data", "Data we process on behalf of clients"],
  ["children", "Children's privacy"],
  ["third-party-links", "Third-party links"],
  ["changes", "Changes to this policy"],
  ["contact", "Contact us"],
] as const;

export default function PrivacyPolicyPage() {
  const { email, phone, domain } = siteConfig;
  const phoneRaw = phone.replace(/[^\d+]/g, "");

  return (
    <article className="py-20 sm:py-28">
      <div className="container max-w-3xl">
        <h1 className="text-3xl font-semibold sm:text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: {siteConfig.legalLastUpdated}</p>

        <nav aria-label="Table of contents" className="mt-8 rounded-lg border border-border bg-card/40 p-5">
          <p className="text-sm font-medium">Contents</p>
          <ol className="mt-3 grid gap-x-8 gap-y-1.5 text-sm text-muted-foreground sm:grid-cols-2">
            {sections.map(([id, label], i) => (
              <li key={id}>
                <a href={`#${id}`} className="hover:text-foreground">
                  {i + 1}. {label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="prose prose-invert mt-10 max-w-none prose-headings:scroll-mt-24 prose-headings:font-display prose-a:text-primary prose-p:text-foreground/85 prose-li:text-foreground/85">
          <h2 id="introduction">1. Introduction and scope</h2>
          <p>
            This Privacy Policy explains how {siteConfig.legalName} (&ldquo;Ingrade Media&rdquo;, &ldquo;we&rdquo;,
            &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, stores, and shares personal information when you
            visit {domain} (the &ldquo;Website&rdquo;), contact us, or use our digital marketing, advertising, and
            development services. It should be read together with our <a href="/terms">Terms of Service</a>.
          </p>
          <p>
            We handle personal information in line with applicable data protection laws, including the Information
            Technology Act, 2000 and the Digital Personal Data Protection Act, 2023 of India and, where they apply to
            you, the GDPR / UK GDPR and similar laws. By using the Website or submitting your details, you acknowledge
            this policy.
          </p>

          <h2 id="collect">2. Information we collect</h2>
          <ul>
            <li><strong>Information you give us:</strong> name, email address, phone / WhatsApp number, company name, website, country, budget range, services of interest, and any message you submit through our contact form or quick-enquiry form.</li>
            <li><strong>Communications:</strong> messages and files you send us by email, phone, WhatsApp, Slack, or video call, and records of our correspondence.</li>
            <li><strong>Client engagement information:</strong> billing details, GST or tax information, and account access or credentials you share so we can deliver the Services.</li>
            <li><strong>Technical information:</strong> browser type, device type, approximate location derived from your IP address (used to show country-relevant content), pages viewed, and referring pages, collected automatically through standard server logs and similar technologies.</li>
          </ul>
          <p>We do not intentionally collect sensitive personal information, and we ask that you do not submit it through the Website.</p>

          <h2 id="use">3. How we use information</h2>
          <ul>
            <li>To respond to enquiries, prepare proposals, and contact you about the services you asked about, including by call, SMS, email, or WhatsApp.</li>
            <li>To provide, manage, bill, and improve our Services and to communicate with clients.</li>
            <li>To personalise the Website, such as showing country-specific content and pricing information.</li>
            <li>To maintain the security of the Website, prevent spam and fraud, and enforce our Terms.</li>
            <li>To understand how the Website is used and improve its performance and content.</li>
            <li>To comply with legal, accounting, and regulatory obligations.</li>
            <li>To send updates about our services where you have agreed or where permitted by law. You can opt out at any time.</li>
          </ul>

          <h2 id="legal-basis">4. Legal basis and consent</h2>
          <p>
            We process personal information where you have given consent (for example by submitting a form), where it
            is necessary to take steps at your request before entering into a contract or to perform one, where we have
            a legitimate interest in running and securing our business that is not outweighed by your rights, or where
            the law requires it. Where we rely on consent, you may withdraw it at any time by contacting us, without
            affecting processing carried out before withdrawal.
          </p>

          <h2 id="cookies">5. Cookies and similar technologies</h2>
          <p>
            Cookies are small text files stored on your device. We use a limited set of cookies:
          </p>
          <ul>
            <li><strong>Preference cookie:</strong> remembers the country or region you selected (or that we detected) so the Website can show relevant content. It is stored for up to 12 months.</li>
            <li><strong>Analytics and performance tools:</strong> if enabled on the Website, tools such as Google Analytics may use cookies to give us aggregated information about how visitors use the Website.</li>
          </ul>
          <p>
            You can block or delete cookies through your browser settings. Some features of the Website may not work as
            intended if you do.
          </p>

          <h2 id="sharing">6. Sharing and disclosure</h2>
          <p>We do not sell your personal information. We may share it only with:</p>
          <ul>
            <li><strong>Service providers</strong> that help us run the Website and deliver the Services, such as cloud hosting and database providers (for example Google Firebase and Vercel), email and communication tools, analytics, and CRM or project-management software. They may use the information only to provide services to us and are bound by confidentiality and security obligations.</li>
            <li><strong>Advertising and technology platforms</strong> that you ask us to work with as part of a campaign.</li>
            <li><strong>Professional advisers</strong> such as lawyers, accountants, and auditors, where needed.</li>
            <li><strong>Authorities</strong>, where we are required to do so by law, legal process, or to protect our rights, safety, or property.</li>
            <li><strong>A successor entity</strong> in connection with a merger, acquisition, or sale of our business, subject to this policy.</li>
          </ul>

          <h2 id="transfers">7. International data transfers</h2>
          <p>
            We serve clients in several countries, and our service providers may process information on servers located
            outside your country, including outside India. Where we transfer personal information across borders, we
            take reasonable steps to ensure it remains protected, including contractual safeguards with providers and,
            where required, recognised transfer mechanisms.
          </p>

          <h2 id="retention">8. Data retention</h2>
          <p>
            We keep personal information only for as long as needed for the purposes described in this policy. Enquiry
            details are generally kept for up to 24 months after our last interaction unless you become a client. Client
            and billing records are kept for the period required by applicable tax, accounting, and company laws. When
            information is no longer needed, we delete or anonymise it.
          </p>

          <h2 id="security">9. Data security</h2>
          <p>
            We use reasonable technical and organisational measures to protect personal information, including
            encrypted connections (HTTPS), access controls limited to authorised personnel, and authentication on our
            internal systems. No method of transmission or storage is completely secure, so we cannot guarantee absolute
            security. If a breach affecting your personal information occurs, we will notify you and the relevant
            authorities where the law requires.
          </p>

          <h2 id="rights">10. Your rights and choices</h2>
          <p>Depending on where you live, you may have the right to:</p>
          <ul>
            <li>access the personal information we hold about you and obtain a copy;</li>
            <li>request correction of inaccurate or incomplete information;</li>
            <li>request erasure of your information, subject to legal retention requirements;</li>
            <li>withdraw consent, object to or restrict certain processing, and request portability;</li>
            <li>opt out of marketing messages at any time using the unsubscribe link or by contacting us;</li>
            <li>nominate another person to exercise your rights, and raise a grievance with us or with the relevant data protection authority.</li>
          </ul>
          <p>
            To exercise any of these rights, email us at <a href={`mailto:${email}`}>{email}</a>. We may need to verify
            your identity first, and we will respond within a reasonable period and in any case within the time
            required by applicable law.
          </p>

          <h2 id="client-data">11. Data we process on behalf of clients</h2>
          <p>
            When we run campaigns, tracking, CRM, or analytics for a client, we may process personal information about
            that client&apos;s customers or leads. In that case the client decides why and how the data is used, and we
            process it on their instructions as a processor / service provider. Questions about that data should be
            directed to the relevant client. See also section 15 of our <a href="/terms">Terms of Service</a>.
          </p>

          <h2 id="children">12. Children&apos;s privacy</h2>
          <p>
            The Website and our Services are intended for businesses and are not directed to anyone under 18. We do not
            knowingly collect personal information from children. If you believe a child has provided us with
            information, contact us and we will delete it.
          </p>

          <h2 id="third-party-links">13. Third-party links</h2>
          <p>
            The Website may contain links to third-party websites and social media pages. We are not responsible for
            their content or privacy practices, and we encourage you to read their policies.
          </p>

          <h2 id="changes">14. Changes to this policy</h2>
          <p>
            We may update this policy from time to time to reflect changes in our practices or the law. The updated
            version will be posted on this page with a revised &ldquo;Last updated&rdquo; date. Please review it
            periodically.
          </p>

          <h2 id="contact">15. Contact us</h2>
          <p>
            For questions, requests, or complaints about this Privacy Policy or how we handle your personal
            information, contact {siteConfig.legalName}:
          </p>
          <ul>
            <li>
              Email: <a href={`mailto:${email}`}>{email}</a>
            </li>
            <li>
              Phone / WhatsApp: <a href={`tel:${phoneRaw}`}>{phone}</a>
            </li>
            <li>
              Website:{" "}
              <a href={`https://${domain}`} rel="noopener">
                {domain}
              </a>
            </li>
            <li>
              Location: {siteConfig.address.locality}, {siteConfig.address.region}, India
            </li>
            <li>Support hours: {siteConfig.india.supportHours}</li>
          </ul>
        </div>
      </div>
    </article>
  );
}
