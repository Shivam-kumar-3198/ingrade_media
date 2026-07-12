"use client";

import { useEffect, useMemo, useState } from "react";
import { Loader2 } from "lucide-react";

import { subscribeToRecentPageviews, getTotalPageviewCount, type Pageview } from "@/lib/pageviews";

export function PageviewsPanel() {
  const [views, setViews] = useState<Pageview[] | null>(null);
  const [totalCount, setTotalCount] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = subscribeToRecentPageviews(setViews, () => setError("Couldn't load site visits."));
    getTotalPageviewCount()
      .then(setTotalCount)
      .catch(() => {});
    return unsubscribe;
  }, []);

  const topPages = useMemo(() => {
    if (!views) return [];
    const counts = new Map<string, number>();
    views.forEach((v) => counts.set(v.page || "/", (counts.get(v.page || "/") ?? 0) + 1));
    return [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 8);
  }, [views]);

  if (error) {
    return <p className="rounded-xl border border-destructive/30 bg-destructive/5 p-6 text-sm text-destructive">{error}</p>;
  }

  if (!views) {
    return (
      <div className="flex items-center justify-center py-24">
        <Loader2 className="h-6 w-6 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="grid gap-4 sm:grid-cols-3">
        <StatTile label="Total visits (all time)" value={totalCount ?? "—"} />
        <StatTile label="Visits loaded" value={views.length} />
        <StatTile label="Unique pages (recent)" value={topPages.length} />
      </div>

      <div>
        <h3 className="font-display text-sm font-semibold">Top pages (last {views.length} visits)</h3>
        <div className="mt-3 space-y-2">
          {topPages.map(([page, count]) => (
            <div
              key={page}
              className="flex items-center justify-between rounded-lg border border-border bg-secondary/20 px-4 py-2 text-sm"
            >
              <span className="truncate">{page}</span>
              <span className="text-muted-foreground">{count}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-display text-sm font-semibold">Recent visits</h3>
        <div className="mt-3 overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="border-b border-border bg-secondary/40 text-xs uppercase tracking-wide text-muted-foreground">
              <tr>
                <th className="px-4 py-3 font-medium">Page</th>
                <th className="px-4 py-3 font-medium">Referrer</th>
                <th className="px-4 py-3 font-medium">Country</th>
                <th className="px-4 py-3 font-medium">UTM source</th>
                <th className="px-4 py-3 font-medium">Time</th>
              </tr>
            </thead>
            <tbody>
              {views.slice(0, 50).map((v) => (
                <tr key={v.id} className="border-b border-border/60 last:border-0">
                  <td className="px-4 py-3">{v.page || "/"}</td>
                  <td className="px-4 py-3 text-muted-foreground">{v.referrer || "Direct"}</td>
                  <td className="px-4 py-3 text-muted-foreground">{v.country || "—"}</td>
                  <td className="px-4 py-3 text-muted-foreground">{v.utmSource || "—"}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-muted-foreground">
                    {v.createdAt ? v.createdAt.toDate().toLocaleString() : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function StatTile({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <p className="text-xs uppercase tracking-wide text-muted-foreground">{label}</p>
      <p className="mt-2 font-display text-2xl font-semibold">{value}</p>
    </div>
  );
}
