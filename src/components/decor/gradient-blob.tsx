import type * as React from "react";

import { cn } from "@/lib/utils";

type GradientBlobProps = React.ComponentProps<"div"> & {
  color?: "pink" | "purple" | "soft";
  size?: "sm" | "md" | "lg" | "xl";
};

const colorMap = {
  pink: "oklch(0.7 0.27 350 / 0.35)",
  purple: "oklch(0.55 0.18 280 / 0.3)",
  soft: "oklch(0.82 0.16 350 / 0.18)",
};

const sizeMap = {
  sm: "size-[20rem]",
  md: "size-[32rem]",
  lg: "size-[48rem]",
  xl: "size-[64rem]",
};

export function GradientBlob({
  className,
  color = "pink",
  size = "md",
  ...props
}: GradientBlobProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute rounded-full blur-[120px]",
        sizeMap[size],
        className
      )}
      style={{
        background: `radial-gradient(circle, ${colorMap[color]} 0%, transparent 70%)`,
      }}
      {...props}
    />
  );
}
