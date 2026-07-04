import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeading } from "@/components/shared/section-heading";
import { JsonLd, faqJsonLd } from "@/components/seo/json-ld";
import type { Faq } from "@/lib/data/faqs";

interface FaqSectionProps {
  faqs: Faq[];
  title?: string;
  description?: string;
  eyebrow?: string;
  idPrefix?: string;
}

export function FaqSection({
  faqs,
  title = "Questions we get asked before someone signs on",
  description,
  eyebrow = "FAQ",
  idPrefix = "faq",
}: FaqSectionProps) {
  return (
    <section className="py-20 sm:py-28">
      <div className="container max-w-3xl">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />

        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`${idPrefix}-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <JsonLd data={faqJsonLd(faqs)} />
    </section>
  );
}
