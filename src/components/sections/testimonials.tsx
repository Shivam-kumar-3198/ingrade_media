"use client";

import Image from "next/image";
import { Star } from "lucide-react";

import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/section-heading";
import { testimonials } from "@/lib/data/testimonials";
import { useSelectedCountry } from "@/hooks/use-selected-country";

export function Testimonials() {
  const country = useSelectedCountry();
  const hasLocalMatch = country ? testimonials.some((t) => t.country === country.name) : false;
  const ordered = hasLocalMatch
    ? [...testimonials].sort((a, b) => Number(b.country === country!.name) - Number(a.country === country!.name))
    : testimonials;

  return (
    <section className="py-20 sm:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Client results"
          title={
            hasLocalMatch ? `What clients in ${country!.name} say once the numbers come in` : "What clients say once the numbers come in"
          }
          align="center"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ordered.map((testimonial) => (
            <Card key={testimonial.name} className="flex h-full flex-col p-6">
              <div className="flex items-center gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className="relative h-10 w-10 overflow-hidden rounded-full bg-secondary">
                  <Image
                    src={testimonial.avatar}
                    alt={`Photo of ${testimonial.name}`}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </span>
                <div>
                  <p className="text-sm font-medium">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}, {testimonial.company} · {testimonial.countryFlag} {testimonial.country}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
