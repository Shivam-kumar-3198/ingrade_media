"use client";

import { Globe } from "lucide-react";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { countries, GLOBAL_COUNTRY_VALUE as GLOBAL_VALUE } from "@/lib/data/countries";
import { useSelectedCountry, useSetSelectedCountry } from "@/hooks/use-selected-country";

export function CountrySelector({ className }: { className?: string }) {
  const selected = useSelectedCountry();
  const setCountry = useSetSelectedCountry();

  return (
    <Select
      value={selected?.code ?? GLOBAL_VALUE}
      onValueChange={(next) => setCountry(next === GLOBAL_VALUE ? null : next)}
    >
      <SelectTrigger
        className={className ?? "h-9 w-auto gap-2 border-none bg-transparent px-2 text-sm"}
        aria-label="Select your country to personalize this site"
      >
        <Globe className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
        <SelectValue placeholder="Global">{selected ? `${selected.flag} ${selected.name}` : "Global"}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value={GLOBAL_VALUE}>🌐 Global</SelectItem>
        {countries.map((country) => (
          <SelectItem key={country.code} value={country.code}>
            {country.flag} {country.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
