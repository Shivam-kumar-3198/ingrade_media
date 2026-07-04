import { Star } from "lucide-react";

import { AvatarCluster } from "./avatar-cluster";

export function RatingCard() {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-card/80 p-4 shadow-glow-sm backdrop-blur">
      <AvatarCluster />
      <div>
        <div className="flex items-center gap-1 text-primary">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-current" />
          ))}
        </div>
        <p className="mt-0.5 text-sm font-medium">
          4.9<span className="text-muted-foreground"> average client rating</span>
        </p>
      </div>
    </div>
  );
}
