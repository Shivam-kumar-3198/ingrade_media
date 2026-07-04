import type { Metadata } from "next";

import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern use of the Ingrade Media website and engagement of our services.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <article className="py-20 sm:py-28">
      <div className="container max-w-3xl">
        <h1 className="text-3xl font-semibold sm:text-4xl">Terms of Service</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: TODO — insert date of legal review.</p>

        <div className="prose prose-invert mt-10 max-w-none prose-headings:font-display prose-a:text-primary prose-p:text-foreground/85 prose-li:text-foreground/85">
          <p>
            {/* TODO: Have these terms reviewed and finalized by a qualified attorney before launch, including a
            services-specific Master Services Agreement for paid engagements. */}
            These Terms of Service govern your use of {siteConfig.url} and, where applicable, the services provided
            by {siteConfig.legalName} (&ldquo;we&rdquo;, &ldquo;us&rdquo;). By using this site or engaging our services, you agree to these
            terms.
          </p>

          <h2>Services</h2>
          <p>
            Specific service scope, deliverables, timelines, and fees are defined in a separate proposal or statement
            of work agreed with each client before work begins. These terms apply in addition to, not instead of,
            that agreement.
          </p>

          <h2>Engagement structure</h2>
          <ul>
            <li>Retainer-based services (paid media management, social media management) run month to month following an initial minimum term described in your proposal.</li>
            <li>Project-based services (app development, website development, Webflow, WordPress) are billed against agreed milestones defined in the statement of work.</li>
            <li>Either party may end a retainer engagement with 30 days&apos; written notice unless otherwise agreed in writing.</li>
          </ul>

          <h2>Payment</h2>
          <p>
            All fees are quoted in US dollars unless otherwise agreed in writing. Invoices are due per the terms
            stated in your proposal. {/* TODO: insert specific late-payment terms after legal/finance review. */}
          </p>

          <h2>Ad spend and third-party costs</h2>
          <p>
            Advertising spend on platforms such as Meta and Google, software subscriptions, and other third-party
            costs are separate from our management fees and are billed or authorized directly, as agreed per
            engagement.
          </p>

          <h2>Intellectual property</h2>
          <p>
            Upon full payment, deliverables created specifically for a client under a project-based engagement
            (code, designs, and content produced for that project) transfer to the client. We retain rights to our
            internal tools, frameworks, and pre-existing materials used to deliver the work.
          </p>

          <h2>No guarantee of results</h2>
          <p>
            We work to the standards described in our proposals and case studies, but marketing and development
            outcomes depend on factors outside our control, including market conditions, platform policy changes,
            and client-side product or pricing decisions. We do not guarantee specific results.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            {/* TODO: finalize liability cap and indemnification language with counsel. */}
            To the extent permitted by law, our liability arising from any engagement is limited to the fees paid
            for the specific service giving rise to the claim in the preceding three months.
          </p>

          <h2>Governing law</h2>
          <p>
            {/* TODO: confirm governing law/jurisdiction with counsel given the international client base. */}
            These terms are governed by the laws of the State of New York, United States, without regard to conflict
            of law principles.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms can be sent to <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          </p>
        </div>
      </div>
    </article>
  );
}
