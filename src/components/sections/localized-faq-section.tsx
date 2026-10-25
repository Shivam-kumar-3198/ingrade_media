"use client";

import { FaqSection } from "@/components/sections/faq-section";
import type { Faq } from "@/lib/data/faqs";
import { useIsIndia } from "@/hooks/use-selected-country";

type FaqSectionProps = React.ComponentProps<typeof FaqSection>;

interface LocalizedFaqSectionProps extends Omit<FaqSectionProps, "faqs"> {
  faqs: Faq[];
  /** Shown instead of `faqs` to India visitors (rupee amounts, IST hours). */
  indiaFaqs: Faq[];
}

export function LocalizedFaqSection({ faqs, indiaFaqs, ...rest }: LocalizedFaqSectionProps) {
  const isIndia = useIsIndia();
  return <FaqSection faqs={isIndia ? indiaFaqs : faqs} {...rest} />;
}
