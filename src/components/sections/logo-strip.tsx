import { clientLogos } from "@/lib/data/logos";
import { siteConfig } from "@/lib/site-config";

export function LogoStrip() {
  return (
    <section className="border-b border-white/5 py-12">
      <div className="container">
        <p className="text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Trusted by teams in {siteConfig.countriesServed}+ countries
        </p>
        <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4 lg:grid-cols-8">
          {clientLogos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center font-display text-lg font-semibold text-muted-foreground/50 grayscale transition-colors hover:text-muted-foreground"
            >
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
