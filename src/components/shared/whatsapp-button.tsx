"use client";

import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useIsIndia } from "@/hooks/use-selected-country";
import { whatsappLink } from "@/lib/site-config";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  label?: string;
  message?: string;
  size?: "default" | "sm" | "lg";
  className?: string;
}

/** Inline "Chat on WhatsApp" button. Always renders; callers decide where it belongs. */
export function WhatsAppButton({ label = "Chat on WhatsApp", message, size = "default", className }: WhatsAppButtonProps) {
  return (
    <Button
      asChild
      variant="outline"
      size={size}
      className={cn("border-[#25D366]/50 text-foreground hover:border-[#25D366] hover:bg-[#25D366]/10", className)}
    >
      <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer">
        <MessageCircle className="mr-2 h-4 w-4 text-[#25D366]" aria-hidden="true" />
        {label}
      </a>
    </Button>
  );
}

/** Floating action button, shown to India visitors on every public page. */
export function FloatingWhatsApp() {
  const isIndia = useIsIndia();
  if (!isIndia) return null;

  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Ingrade Media on WhatsApp"
      className="fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40 transition-transform hover:scale-105 focus-visible:outline-offset-4 sm:h-auto sm:w-auto sm:gap-2 sm:px-5 sm:py-3"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
      <span className="hidden text-sm font-semibold sm:inline">Chat on WhatsApp</span>
    </a>
  );
}
