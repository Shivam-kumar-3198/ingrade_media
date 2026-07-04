import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <span className="font-display text-sm font-medium uppercase tracking-wider text-primary">404</span>
      <h1 className="mt-3 text-balance text-3xl font-semibold sm:text-4xl">This page doesn&apos;t exist</h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        The page you&apos;re looking for may have moved. Try the homepage, or check out our services.
      </p>
      <div className="mt-8 flex gap-4">
        <Button asChild>
          <Link href="/">Back to homepage</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href="/services">See services</Link>
        </Button>
      </div>
    </section>
  );
}
