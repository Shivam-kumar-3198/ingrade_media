"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { CountrySelector } from "@/components/shared/country-selector";
import { primaryNav } from "@/lib/data/nav";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/5 bg-background/70 backdrop-blur-lg">
      <div className="container flex h-18 items-center justify-between py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logos/logo-mark-icon.png"
            alt="Ingrade Media"
            width={90}
            height={28}
            className="h-9 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {primaryNav.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                  active && "text-foreground"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <CountrySelector />
          <Button asChild variant="ghost" size="sm">
            <Link href="/case-studies">See our work</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/contact">Get a free growth plan</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="flex flex-col">
            <nav className="mt-10 flex flex-col gap-6" aria-label="Mobile">
              {primaryNav.map((link) => (
                <SheetClose asChild key={link.href}>
                  <Link href={link.href} className="font-display text-2xl font-medium">
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-3 pt-8">
              <CountrySelector className="h-11 w-full justify-start gap-2 rounded-full border border-white/10 bg-secondary/20 px-4 text-sm" />
              <SheetClose asChild>
                <Button asChild variant="secondary">
                  <Link href="/case-studies">See our work</Link>
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button asChild>
                  <Link href="/contact">Get a free growth plan</Link>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
