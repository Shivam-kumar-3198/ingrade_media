"use client";

import { Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { useIsIndia } from "@/hooks/use-selected-country";
import { siteConfig, telLink } from "@/lib/site-config";

/** The fastest ways to reach the team, for India visitors. Most would rather message than fill in a form. */
export function IndiaContactCard() {
  const isIndia = useIsIndia();
  if (!isIndia) return null;

  return (
    <Card className="p-6">
      <h2 className="font-display text-lg font-semibold">Talk to us right now</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Message or call us {siteConfig.india.supportHours}. No form needed.
      </p>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
        <WhatsAppButton label="Chat on WhatsApp" />
        <Button asChild variant="secondary">
          <a href={telLink()}>
            <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
            Call {siteConfig.phone}
          </a>
        </Button>
      </div>
    </Card>
  );
}
