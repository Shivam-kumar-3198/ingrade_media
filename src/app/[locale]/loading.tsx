import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="container flex min-h-[60vh] flex-col items-center justify-center gap-3 py-20 text-center">
      <Loader2 className="h-8 w-8 animate-spin text-primary" aria-hidden="true" />
      <p className="text-sm text-muted-foreground">Loading…</p>
    </div>
  );
}
