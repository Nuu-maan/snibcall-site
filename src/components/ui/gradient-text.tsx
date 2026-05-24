import type * as React from "react";

import { cn } from "@/lib/utils";

type GradientTextProps = React.ComponentProps<"span"> & {
  variant?: "brand" | "soft";
};

export function GradientText({
  className,
  variant = "brand",
  ...props
}: GradientTextProps) {
  return (
    <span
      className={cn(
        variant === "brand" ? "text-gradient-brand" : "text-gradient-soft",
        className
      )}
      {...props}
    />
  );
}
