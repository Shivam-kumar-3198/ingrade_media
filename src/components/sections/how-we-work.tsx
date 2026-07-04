import Image from "next/image";

import { SectionHeading } from "@/components/shared/section-heading";
import { howWeWork } from "@/lib/data/process";
import { scenePhotos } from "@/lib/stock-photos";

export function HowWeWork() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="How we work"
          title="No black box. You see the plan before we touch a budget."
          description="Most agency distrust comes from not knowing what's actually happening in your account. Here's the process for every engagement."
        />

        <div className="relative mt-10 aspect-[21/9] w-full overflow-hidden rounded-2xl border border-white/10">
          <Image
            src={scenePhotos.teamWorkingTable}
            alt="A team working together around a table on laptops during a strategy session"
            fill
            sizes="(min-width: 1024px) 1080px, 90vw"
            className="object-cover"
          />
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {howWeWork.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.step} className="relative">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-display text-3xl font-semibold text-primary/30">{step.step}</span>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
