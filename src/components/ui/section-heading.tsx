import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import type * as React from "react";

import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  align?: "center" | "left";
  className?: string;
  icon: IconSvgElement;
  subtitle?: React.ReactNode;
  title: React.ReactNode;
}

export function SectionHeading({
  icon,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "items-center text-center" : "items-start",
        className
      )}
    >
      <div className="flex size-12 items-center justify-center rounded-2xl border bg-secondary text-pink-300 ring-soft">
        <HugeiconsIcon className="size-6" icon={icon} strokeWidth={1.6} />
      </div>
      <h2 className="max-w-3xl text-balance font-bold text-[30px] text-foreground leading-[110%] tracking-tight md:text-[35px]">
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-lg text-balance font-medium text-[18px] text-muted-foreground leading-[175%] tracking-tight">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
