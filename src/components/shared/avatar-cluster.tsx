import Image from "next/image";

import { heroClusterPhotos } from "@/lib/stock-photos";

export function AvatarCluster() {
  return (
    <div className="flex -space-x-3" aria-hidden="true">
      {heroClusterPhotos.map((src, i) => (
        <span
          key={src}
          className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-background bg-secondary"
        >
          <Image src={src} alt={`Client photo ${i + 1}`} fill sizes="36px" className="object-cover" />
        </span>
      ))}
    </div>
  );
}
