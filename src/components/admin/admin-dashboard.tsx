"use client";

import { useState } from "react";
import type { User } from "firebase/auth";
import { LogOut } from "lucide-react";

import { Button } from "@/components/ui/button";
import { LeadsPanel } from "@/components/admin/leads-panel";
import { PageviewsPanel } from "@/components/admin/pageviews-panel";
import { cn } from "@/lib/utils";

type Tab = "leads" | "visits";

export function AdminDashboard({ user, onSignOut }: { user: User; onSignOut: () => void }) {
  const [tab, setTab] = useState<Tab>("leads");

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 border-b border-white/5 bg-background/80 backdrop-blur-lg">
        <div className="container flex h-16 items-center justify-between">
          <p className="font-display text-lg font-semibold">
            Ingrade<span className="text-primary">Media</span> <span className="text-muted-foreground">Admin</span>
          </p>
          <div className="flex items-center gap-4">
            <span className="hidden text-sm text-muted-foreground sm:inline">{user.email}</span>
            <Button variant="outline" size="sm" onClick={onSignOut}>
              <LogOut className="mr-2 h-4 w-4" />
              Sign out
            </Button>
          </div>
        </div>
      </header>

      <div className="container py-8">
        <div className="flex gap-2 border-b border-white/5">
          <button
            type="button"
            onClick={() => setTab("leads")}
            className={cn(
              "border-b-2 px-4 py-3 text-sm font-medium transition-colors",
              tab === "leads" ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"
            )}
          >
            Leads
          </button>
          <button
            type="button"
            onClick={() => setTab("visits")}
            className={cn(
              "border-b-2 px-4 py-3 text-sm font-medium transition-colors",
              tab === "visits" ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"
            )}
          >
            Site visits
          </button>
        </div>

        <div className="mt-6">{tab === "leads" ? <LeadsPanel /> : <PageviewsPanel />}</div>
      </div>
    </div>
  );
}
