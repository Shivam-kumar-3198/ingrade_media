"use client";

import { Fragment, useEffect, useMemo, useState } from "react";
import { ChevronDown, ChevronUp, Loader2, Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { subscribeToLeads, updateLeadStatus, LEAD_STATUSES, type Lead, type LeadStatus } from "@/lib/leads";
import { cn } from "@/lib/utils";

const STATUS_STYLES: Record<LeadStatus, string> = {
  new: "bg-primary/10 text-primary border-primary/30",
  contacted: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  won: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  lost: "bg-white/5 text-muted-foreground border-white/10",
};

export function LeadsPanel() {
  const [leads, setLeads] = useState<Lead[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = subscribeToLeads(setLeads, () =>
      setError("Couldn't load leads. Make sure Firestore is enabled and the security rules are deployed.")
    );
    return unsubscribe;
  }, []);

  const filtered = useMemo(() => {
    if (!leads) return [];
    const q = search.trim().toLowerCase();
    if (!q) return leads;
    return leads.filter((lead) =>
      [lead.name, lead.email, lead.phone, lead.company, lead.message].some((field) => field?.toLowerCase().includes(q))
    );
  }, [leads, search]);

  const handleStatusChange = async (id: string, status: LeadStatus) => {
    try {
      await updateLeadStatus(id, status);
    } catch {
      setError("Couldn't update lead status.");
    }
  };

  if (error) {
    return <p className="rounded-xl border border-destructive/30 bg-destructive/5 p-6 text-sm text-destructive">{error}</p>;
  }

  if (!leads) {
    return (
      <div className="flex items-center justify-center py-24">
        <Loader2 className="h-6 w-6 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-sm text-muted-foreground">{leads.length} total leads</p>
        <div className="relative w-full max-w-xs">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search name, email, company…"
            className="pl-9"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-8 text-center text-sm text-muted-foreground">No leads yet.</p>
      ) : (
        <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="border-b border-border bg-secondary/40 text-xs uppercase tracking-wide text-muted-foreground">
              <tr>
                <th className="px-4 py-3 font-medium">Name</th>
                <th className="px-4 py-3 font-medium">Company</th>
                <th className="px-4 py-3 font-medium">Budget</th>
                <th className="px-4 py-3 font-medium">Country</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Received</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody>
              {filtered.map((lead) => {
                const isOpen = expanded === lead.id;
                return (
                  <Fragment key={lead.id}>
                    <tr
                      className="cursor-pointer border-b border-border/60 last:border-0 hover:bg-white/[0.02]"
                      onClick={() => setExpanded(isOpen ? null : lead.id)}
                    >
                      <td className="px-4 py-3">
                        <p className="font-medium">{lead.name}</p>
                        <p className="text-xs text-muted-foreground">{lead.email || lead.phone || "—"}</p>
                      </td>
                      <td className="px-4 py-3">{lead.company || "—"}</td>
                      <td className="px-4 py-3 text-muted-foreground">{lead.budget || "—"}</td>
                      <td className="px-4 py-3 text-muted-foreground">{lead.country || "—"}</td>
                      <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                        <select
                          value={lead.status}
                          onChange={(e) => handleStatusChange(lead.id, e.target.value as LeadStatus)}
                          className={cn(
                            "rounded-full border bg-transparent px-2.5 py-1 text-xs font-medium capitalize",
                            STATUS_STYLES[lead.status] ?? STATUS_STYLES.new
                          )}
                        >
                          {LEAD_STATUSES.map((s) => (
                            <option key={s} value={s} className="bg-background text-foreground">
                              {s}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 text-muted-foreground">
                        {lead.createdAt ? lead.createdAt.toDate().toLocaleString() : "—"}
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">
                        {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </td>
                    </tr>
                    {isOpen ? (
                      <tr className="border-b border-border/60 bg-secondary/20 last:border-0">
                        <td colSpan={7} className="px-4 py-4">
                          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            <Detail label="Phone" value={lead.phone || "—"} />
                            <Detail label="Source" value={lead.source || "contact-form"} />
                            <Detail label="Website" value={lead.website || "—"} />
                            <Detail label="Services" value={lead.services?.join(", ") || "—"} />
                            <Detail label="Message" value={lead.message || "—"} className="sm:col-span-2 lg:col-span-3" />
                            <Detail label="Page" value={lead.page || "—"} />
                            <Detail label="Referrer" value={lead.referrer || "Direct"} />
                            <Detail label="UTM source" value={lead.utmSource || "—"} />
                            <Detail label="UTM medium" value={lead.utmMedium || "—"} />
                            <Detail label="UTM campaign" value={lead.utmCampaign || "—"} />
                            <Detail label="UTM term / content" value={[lead.utmTerm, lead.utmContent].filter(Boolean).join(" / ") || "—"} />
                            <Detail label="Device" value={lead.userAgent || "—"} className="sm:col-span-2 lg:col-span-3" />
                            <Detail label="Language" value={lead.language || "—"} />
                            <Detail label="Timezone" value={lead.timezone || "—"} />
                            <Detail label="Screen" value={lead.screen || "—"} />
                            <Detail label="IP address" value={lead.ip || "—"} />
                            <Detail label="Geo (server-detected)" value={[lead.geoCity, lead.geoCountry].filter(Boolean).join(", ") || "—"} />
                          </div>
                        </td>
                      </tr>
                    ) : null}
                  </Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function Detail({ label, value, className }: { label: string; value: string; className?: string }) {
  return (
    <div className={className}>
      <p className="text-xs uppercase tracking-wide text-muted-foreground">{label}</p>
      <p className="mt-1 break-words text-sm">{value}</p>
    </div>
  );
}
