import type { Metadata } from "next";

import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms and conditions governing use of the Ingrade Media website and the digital marketing, advertising, and development services we provide to clients.",
  alternates: { canonical: "/terms" },
};

const sections = [
  ["definitions", "Definitions"],
  ["acceptance", "Acceptance of terms"],
  ["services", "Services and scope of work"],
  ["engagement", "Engagement, term, and termination"],
  ["fees", "Fees, invoicing, and payment"],
  ["ad-spend", "Ad spend and third-party costs"],
  ["client-responsibilities", "Client responsibilities"],
  ["accounts", "Access to accounts and platforms"],
  ["ip", "Intellectual property"],
  ["portfolio", "Portfolio and case study rights"],
  ["results", "No guarantee of results"],
  ["third-party", "Third-party platforms and policies"],
  ["compliance", "Compliance and content standards"],
  ["confidentiality", "Confidentiality"],
  ["data", "Data protection and privacy"],
  ["non-solicitation", "Non-solicitation"],
  ["warranties", "Warranties and disclaimers"],
  ["liability", "Limitation of liability"],
  ["indemnity", "Indemnification"],
  ["force-majeure", "Force majeure"],
  ["website-use", "Use of this website"],
  ["disputes", "Governing law and dispute resolution"],
  ["general", "General provisions"],
  ["contact", "Contact and legal notices"],
] as const;

export default function TermsPage() {
  const { email, phone, domain } = siteConfig;
  const phoneRaw = phone.replace(/[^\d+]/g, "");
  const lastUpdated = siteConfig.legalLastUpdated;

  return (
    <article className="py-20 sm:py-28">
      <div className="container max-w-3xl">
        <h1 className="text-3xl font-semibold sm:text-4xl">Terms of Service</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: {lastUpdated}</p>

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
          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of {domain} and{" "}
            {siteConfig.url} (together, the &ldquo;Website&rdquo;) and the digital marketing, advertising, creative, and
            development services provided by {siteConfig.legalName} (&ldquo;Ingrade Media&rdquo;, &ldquo;we&rdquo;,
            &ldquo;us&rdquo;, or &ldquo;our&rdquo;) to our clients (&ldquo;Client&rdquo;, &ldquo;you&rdquo;). Please
            read them carefully. By using the Website, submitting an enquiry, paying an invoice, or approving a
            proposal, you agree to be bound by these Terms.
          </p>

          <h2 id="definitions">1. Definitions</h2>
          <ul>
            <li><strong>Services</strong> means the work we agree to perform for you, such as paid media management, SEO, social media management, content, creative, website and app development, analytics, and reporting.</li>
            <li><strong>Proposal / SOW</strong> means the written proposal, quotation, statement of work, order form, or email confirmation that describes the scope, deliverables, timelines, and fees for an engagement.</li>
            <li><strong>Deliverables</strong> means the work product we create specifically for you under a Proposal / SOW.</li>
            <li><strong>Ad Spend</strong> means the amounts paid to advertising platforms (for example Meta, Google, LinkedIn, TikTok, X) to run your campaigns.</li>
            <li><strong>Third-Party Platforms</strong> means external services used to deliver the Services, including advertising networks, analytics tools, hosting, CMS, and software providers.</li>
            <li><strong>Client Materials</strong> means all content, data, logos, trademarks, product information, credentials, and access you provide to us.</li>
          </ul>

          <h2 id="acceptance">2. Acceptance of terms</h2>
          <p>
            You confirm that you are at least 18 years old and have authority to bind yourself or the business you
            represent. These Terms apply together with the applicable Proposal / SOW. If there is a conflict, the
            Proposal / SOW prevails for that engagement only to the extent it expressly states that it overrides these
            Terms. We may update these Terms from time to time; the version published on the Website with the
            &ldquo;Last updated&rdquo; date applies to new engagements immediately and to existing engagements from the
            next renewal or 30 days after notice, whichever is earlier.
          </p>

          <h2 id="services">3. Services and scope of work</h2>
          <ul>
            <li>The scope, deliverables, timelines, reporting cadence, and fees are set out in the Proposal / SOW. Work outside that scope is treated as additional work and is quoted and approved in writing before it begins.</li>
            <li>Timelines are estimates and depend on prompt feedback, approvals, access, and Client Materials. Delays caused by you or by third parties may move delivery dates without liability on our part.</li>
            <li>For creative, website, and development work, the number of revision rounds included is stated in the Proposal / SOW. Additional revisions or changes in direction after approval are chargeable.</li>
            <li>We may use employees, freelancers, and subcontractors to deliver the Services and remain responsible for their work under these Terms.</li>
            <li>Strategy, recommendations, and reports reflect our professional judgment at the time they are made and are not legal, tax, financial, or investment advice.</li>
          </ul>

          <h2 id="engagement">4. Engagement, term, and termination</h2>
          <ul>
            <li><strong>Retainer services</strong> (such as paid media, SEO, and social media management) begin on the start date in the Proposal / SOW, run for any minimum term stated there, and then continue month to month.</li>
            <li><strong>Project services</strong> (such as website, Webflow, WordPress, and app development) are billed against the milestones in the Proposal / SOW.</li>
            <li>After any minimum term, either party may end a retainer by giving at least 30 days&apos; written notice (email is sufficient). Notice given during a minimum term takes effect at the end of that term.</li>
            <li>Either party may terminate immediately by written notice if the other commits a material breach that is not remedied within 10 days of notice, or becomes insolvent.</li>
            <li>We may suspend Services immediately if an invoice is overdue, if access or ad accounts are restricted, or if continuing would breach law or platform policy.</li>
            <li>On termination, you must pay for all Services performed and expenses incurred up to the termination date, including work in progress, and all committed third-party costs. Fees already paid for a month of retainer service already started are non-refundable.</li>
            <li>Sections that by their nature should survive termination (including payment, intellectual property, confidentiality, liability, indemnity, and dispute resolution) continue to apply.</li>
          </ul>

          <h2 id="fees">5. Fees, invoicing, and payment</h2>
          <ul>
            <li>Fees are stated in the Proposal / SOW. Unless agreed otherwise in writing, fees are quoted in US dollars for international clients and in Indian rupees (INR) for clients in India.</li>
            <li>Retainer fees are invoiced in advance for each billing period. Project fees are invoiced as set out in the Proposal / SOW, typically with an advance payment before work begins and the balance against milestones or on delivery.</li>
            <li>Invoices are payable within the period stated on the invoice, or within 7 days of the invoice date if none is stated. Time is of the essence for payment.</li>
            <li>Fees are exclusive of taxes. For clients in India, GST (currently {siteConfig.india.gstRate}) and any other applicable taxes are added as required by law. International clients are responsible for any withholding, VAT, sales, or similar taxes, and bank or payment-gateway charges, so that we receive the full invoiced amount.</li>
            <li>Overdue amounts may attract interest at 1.5% per month (or the maximum permitted by law, if lower) from the due date until paid. We may suspend Services, withhold Deliverables, and withhold transfer of intellectual property until all overdue amounts are paid in full.</li>
            <li>You are responsible for the reasonable costs of collecting overdue amounts, including legal fees.</li>
            <li>Advance payments, setup fees, and project deposits are non-refundable once work has begun, unless the Proposal / SOW states otherwise. Where a refund is due under law, it is limited to fees for Services not yet performed.</li>
            <li>We may revise retainer fees on 30 days&apos; written notice. Continued use of the Services after the notice period means you accept the revised fees.</li>
            <li>Disputes about an invoice must be raised in writing within 7 days of the invoice date, stating the reasons. Undisputed amounts remain payable on time.</li>
            <li>Payments may be made by bank transfer, UPI, or other methods we communicate in writing. We will only ask you to pay to accounts or details shared through our official contact channels listed in these Terms. Please verify any change in payment details with us directly before paying.</li>
          </ul>

          <h2 id="ad-spend">6. Ad spend and third-party costs</h2>
          <ul>
            <li>Ad Spend, software and tool subscriptions, stock assets, fonts, plugins, domains, hosting, and other third-party costs are separate from our fees. They are paid directly by you to the provider, or reimbursed to us at cost, as agreed in the Proposal / SOW.</li>
            <li>Where we run campaigns on ad accounts that you own, you are responsible for keeping a valid payment method active and for all platform charges.</li>
            <li>We will manage budgets within the limits you approve. You authorize us to allocate spend across campaigns, audiences, and placements within the approved budget. Increases above the approved budget require your written approval.</li>
            <li>We are not responsible for ad platform charges that result from your decisions, platform errors, invalid-traffic adjustments, or billing disputes between you and a platform.</li>
          </ul>

          <h2 id="client-responsibilities">7. Client responsibilities</h2>
          <p>To enable us to deliver the Services, you agree to:</p>
          <ul>
            <li>provide accurate and complete Client Materials, access, and information on time, and designate a person authorized to give approvals and feedback;</li>
            <li>give feedback and approvals promptly (within 3 business days unless agreed otherwise);</li>
            <li>ensure you have all rights, licences, and consents needed for the Client Materials, products, services, claims, and offers we promote on your behalf;</li>
            <li>maintain the products, pricing, delivery, customer support, refund practices, and sales processes that your marketing depends on; we do not control conversion, fulfilment, or lead follow-up on your side;</li>
            <li>install tracking, pixels, tags, and analytics access we reasonably request, and not remove or modify them without informing us.</li>
          </ul>

          <h2 id="accounts">8. Access to accounts and platforms</h2>
          <ul>
            <li>You should own and retain administrator-level control of your advertising accounts, analytics properties, domains, hosting, social media pages, and similar assets. We will request delegated or partner access to manage them.</li>
            <li>You must keep credentials secure and share access only through secure methods. You are responsible for any consequences arising from credentials you share.</li>
            <li>If we create accounts on your behalf, they will be set up in your business name or transferred to you on request, subject to payment of all fees due.</li>
            <li>We will use access solely to perform the Services and will not intentionally breach any Third-Party Platform rules.</li>
          </ul>

          <h2 id="ip">9. Intellectual property</h2>
          <ul>
            <li><strong>Client Materials.</strong> You retain all rights in the Client Materials. You grant us a non-exclusive, worldwide licence to use them to deliver the Services.</li>
            <li><strong>Deliverables.</strong> On receipt of full payment, ownership of the final Deliverables created specifically for you (such as approved designs, copy, code, and website builds) transfers to you, except for the items below. Until full payment, you hold only a limited licence to review the Deliverables, and we may withhold them.</li>
            <li><strong>Our materials.</strong> We retain ownership of our pre-existing and independently developed tools, templates, frameworks, processes, code libraries, methods, know-how, and general knowledge, and of anything not created specifically for you. To the extent they are included in a Deliverable, we grant you a non-exclusive, perpetual, non-transferable licence to use them as part of that Deliverable.</li>
            <li><strong>Third-party and open-source components.</strong> These remain subject to their own licences, which apply to your use.</li>
            <li><strong>Unused concepts.</strong> Drafts, concepts, and ideas not selected or paid for remain our property.</li>
          </ul>

          <h2 id="portfolio">10. Portfolio and case study rights</h2>
          <p>
            Unless you tell us in writing that you do not agree, we may display your name, logo, and the Deliverables in
            our portfolio, website, and promotional materials, and may describe the nature of the work. We will not
            publish confidential financial figures or non-public business data without your approval.
          </p>

          <h2 id="results">11. No guarantee of results</h2>
          <p>
            Digital marketing and development outcomes depend on many factors outside our control, including market
            conditions, competition, seasonality, platform algorithms, pricing, product quality, sales execution, and
            your own decisions. Any figures, forecasts, benchmarks, and case studies are estimates or past results and
            are not a promise of future performance. We do not guarantee rankings, traffic, impressions, leads, sales,
            return on ad spend, follower growth, or any specific financial or business result.
          </p>

          <h2 id="third-party">12. Third-party platforms and policies</h2>
          <ul>
            <li>The Services depend on Third-Party Platforms whose features, pricing, algorithms, and policies can change without notice. We are not responsible for their availability, errors, outages, or decisions.</li>
            <li>Ad accounts, pages, listings, or content may be rejected, restricted, or suspended by a platform, including for reasons unrelated to our work. We will help you resolve such issues where reasonably possible but cannot guarantee reinstatement or approval, and we are not liable for losses from such actions.</li>
            <li>You must comply with the terms and policies of each platform used for your campaigns.</li>
          </ul>

          <h2 id="compliance">13. Compliance and content standards</h2>
          <ul>
            <li>You are responsible for the legality, accuracy, and substantiation of your products, offers, pricing, claims, testimonials, and any content you supply or approve, including compliance with advertising, consumer-protection, data-protection, and industry-specific laws and regulations.</li>
            <li>We may refuse or stop work that we reasonably believe is unlawful, misleading, infringing, harmful, discriminatory, or in breach of platform policy, without liability.</li>
            <li>You must provide any licences, permissions, or disclosures needed to advertise regulated products or services (for example health, finance, or alcohol).</li>
            <li>Both parties will comply with applicable anti-bribery, anti-corruption, sanctions, and export-control laws.</li>
          </ul>

          <h2 id="confidentiality">14. Confidentiality</h2>
          <p>
            Each party will keep the other&apos;s non-public business, technical, financial, and customer information
            confidential, use it only for the purposes of the engagement, and disclose it only to personnel and advisers
            who need to know and are bound by similar obligations. These duties do not apply to information that is
            public through no fault of the recipient, already known to or independently developed by the recipient, or
            required to be disclosed by law or a competent authority (with notice where permitted). They continue for
            three years after the engagement ends, and for as long as the information remains a trade secret.
          </p>

          <h2 id="data">15. Data protection and privacy</h2>
          <ul>
            <li>Our handling of personal information collected through the Website is described in our <a href="/privacy-policy">Privacy Policy</a>.</li>
            <li>Where we process personal data of your customers or leads on your behalf (for example through tracking, CRM, or ad audiences), you are the controller or data fiduciary and we act as your processor or service provider. You are responsible for having a lawful basis, notices, and consents, including cookie and tracking consents and the use of customer lists for advertising.</li>
            <li>We will apply reasonable technical and organisational measures to protect that data, will process it only on your documented instructions, and will inform you without undue delay if we become aware of a breach affecting it. Where required by law, we will enter into a data processing agreement on request.</li>
          </ul>

          <h2 id="non-solicitation">16. Non-solicitation</h2>
          <p>
            During the engagement and for 12 months afterwards, you will not directly or indirectly solicit for
            employment or engage any of our employees or contractors who worked on your account, without our prior
            written consent, other than through general advertisements not targeted at them. If you do, you agree to
            pay a fee equal to six months of that person&apos;s compensation with us, as a genuine pre-estimate of our
            recruitment and training loss.
          </p>

          <h2 id="warranties">17. Warranties and disclaimers</h2>
          <ul>
            <li>We warrant that we will perform the Services with reasonable skill and care and in accordance with the Proposal / SOW.</li>
            <li>To the fullest extent permitted by law, all other warranties, conditions, and representations, whether express or implied, including fitness for a particular purpose, merchantability, non-infringement, uninterrupted or error-free operation, and any outcome from third-party platforms, are excluded.</li>
            <li>For website and app builds, we will correct reproducible defects in functionality that depart from the agreed specification if you report them in writing within 30 days of delivery. Later changes, hosting issues, third-party updates, and changes made by others are not covered unless covered by a maintenance plan.</li>
            <li>The Website and its content are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;.</li>
          </ul>

          <h2 id="liability">18. Limitation of liability</h2>
          <ul>
            <li>To the fullest extent permitted by law, neither party is liable for indirect, incidental, special, consequential, or punitive loss, or for loss of profit, revenue, business, goodwill, data, or anticipated savings, arising from or connected to the Services or these Terms.</li>
            <li>Our total aggregate liability for all claims arising from an engagement, whether in contract, tort (including negligence), or otherwise, is limited to the fees you paid us for the specific Services giving rise to the claim in the three months before the event first giving rise to the claim. This does not include Ad Spend or third-party costs, for which we have no liability except where caused by our proven gross negligence or wilful misconduct.</li>
            <li>Nothing in these Terms excludes or limits liability that cannot be excluded or limited by law, including liability for fraud or wilful misconduct.</li>
            <li>Any claim must be notified to us in writing within 90 days of the date you became aware of the circumstances.</li>
          </ul>

          <h2 id="indemnity">19. Indemnification</h2>
          <p>
            You will defend, indemnify, and hold harmless Ingrade Media, its owners, employees, and contractors from
            and against claims, losses, damages, penalties, and expenses (including reasonable legal fees) arising out of:
            (a) the Client Materials or any content, product, or offer you supply or approve, including claims of
            infringement, defamation, false advertising, or non-compliance with law; (b) your breach of these Terms or
            of any Third-Party Platform policy; or (c) your use of the Deliverables other than as permitted.
          </p>

          <h2 id="force-majeure">20. Force majeure</h2>
          <p>
            Neither party is liable for delay or failure to perform (other than payment obligations) caused by events
            beyond its reasonable control, including natural disasters, epidemic, war, terrorism, civil unrest,
            government action, power or internet failures, cyber-attacks, and failures or changes by Third-Party
            Platforms. The affected party will give prompt notice and use reasonable efforts to resume performance.
          </p>

          <h2 id="website-use">21. Use of this website</h2>
          <ul>
            <li>You may use the Website for lawful purposes only. You must not attempt to gain unauthorized access, interfere with its operation, scrape it in violation of our rules, introduce malware, or submit false, misleading, or unlawful information through our forms.</li>
            <li>All Website content, branding, text, graphics, and code are owned by or licensed to us and may not be copied or reused without permission, except for personal, non-commercial reference.</li>
            <li>Information on the Website is general in nature and does not constitute a binding offer. Case studies, ratings, and statistics are illustrative.</li>
            <li>The Website may link to third-party sites that we do not control and are not responsible for.</li>
            <li>Submitting an enquiry does not create a client relationship; this arises only when a Proposal / SOW is accepted. By providing your phone number or email, you agree that we may contact you about your enquiry, including via call, SMS, email, or WhatsApp. You may opt out at any time.</li>
          </ul>

          <h2 id="disputes">22. Governing law and dispute resolution</h2>
          <ul>
            <li>These Terms and any dispute arising from them are governed by the laws of India, without regard to conflict-of-law principles.</li>
            <li>The parties will first try to resolve any dispute in good faith by written notice and discussion for at least 30 days.</li>
            <li>If unresolved, the dispute will be referred to and finally resolved by arbitration under the Arbitration and Conciliation Act, 1996 (as amended), before a sole arbitrator appointed by mutual consent (or, failing agreement, as provided by law). The seat and venue of arbitration is Noida, Uttar Pradesh, and the language is English.</li>
            <li>Subject to the above, the courts at Noida (Gautam Buddh Nagar), Uttar Pradesh, India have exclusive jurisdiction, including for interim relief and enforcement. Nothing prevents either party from seeking urgent injunctive relief to protect confidential information or intellectual property, or from recovering unpaid fees.</li>
          </ul>

          <h2 id="general">23. General provisions</h2>
          <ul>
            <li><strong>Entire agreement.</strong> These Terms and the Proposal / SOW are the entire agreement on their subject matter and replace prior discussions and understandings.</li>
            <li><strong>Independent contractors.</strong> The parties are independent contractors. Nothing creates a partnership, joint venture, agency, or employment relationship.</li>
            <li><strong>Assignment.</strong> You may not assign or transfer your rights or obligations without our written consent. We may assign these Terms to an affiliate or a successor to our business.</li>
            <li><strong>Severability.</strong> If a provision is found invalid or unenforceable, the rest remains in effect, and the provision will be modified to the minimum extent needed to make it enforceable.</li>
            <li><strong>Waiver.</strong> Failure or delay in exercising a right is not a waiver of that right.</li>
            <li><strong>Notices.</strong> Notices must be in writing and sent by email to the addresses in the Proposal / SOW or below, and are treated as received on the next business day after sending, unless a bounce-back is received.</li>
            <li><strong>Electronic acceptance.</strong> Approval by email, messaging app, signature tool, online payment, or continued use of the Services is a valid and binding acceptance.</li>
            <li><strong>Third-party rights.</strong> No one other than the parties may enforce these Terms.</li>
            <li><strong>Language.</strong> The English version of these Terms prevails over any translation.</li>
          </ul>

          <h2 id="contact">24. Contact and legal notices</h2>
          <p>
            For questions about these Terms, billing, contracts, or legal notices, please contact {siteConfig.legalName}:
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
