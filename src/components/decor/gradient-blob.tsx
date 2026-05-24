import type * as React from "react";

import { cn } from "@/lib/utils";

type GradientBlobProps = React.ComponentProps<"div"> & {
  color?: "pink" | "purple" | "soft";
  size?: "sm" | "md" | "lg" | "xl";
};

const colorMap = {
  pink: "oklch(0.7 0.27 350 / 0.28)",
  purple: "oklch(0.55 0.18 280 / 0.24)",
  soft: "oklch(0.82 0.16 350 / 0.16)",
};

const sizeMap = {
  sm: "size-[20rem]",
  md: "size-[28rem]",
  lg: "size-[36rem]",
  xl: "size-[44rem]",
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
        "pointer-events-none absolute rounded-full",
        sizeMap[size],
        className
      )}
      style={{
        background: `radial-gradient(circle, ${colorMap[color]} 0%, transparent 65%)`,
      }}
      {...props}
    />
  );
}
