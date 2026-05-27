"use client";

import dynamic from "next/dynamic";
import { useCallback, useState } from "react";

import { cn } from "@/lib/utils";

// Heavy three.js + drei chunk: only fetched on the client, after first
// paint, so the rest of the page renders without waiting on ~500KB of
// renderer code or the 1.5MB GLB.
const MascotScene = dynamic(
  () => import("./mascot-3d-scene").then((mod) => mod.MascotScene),
  { ssr: false }
);

interface Mascot3DProps {
  alt: string;
  className?: string;
}

export function Mascot3D({ alt, className }: Mascot3DProps) {
  const [ready, setReady] = useState(false);
  const handleReady = useCallback(() => setReady(true), []);

  return (
    <div
      aria-label={alt}
      className={cn("relative aspect-[755/907]", className)}
      role="img"
    >
      <div
        className={cn(
          "absolute inset-0 transition-opacity duration-500",
          ready ? "opacity-100" : "opacity-0"
        )}
      >
        <MascotScene onReady={handleReady} />
      </div>
    </div>
  );
}
