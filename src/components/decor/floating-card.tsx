import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";

import { cn } from "@/lib/utils";

interface FloatingCardProps {
  className?: string;
  icon: IconSvgElement;
  label: string;
  rotation?: "none" | "-left" | "-right" | "left" | "right";
}

const rotationMap = {
  none: "",
  "-left": "md:-rotate-6",
  "-right": "md:rotate-6",
  left: "md:-rotate-3",
  right: "md:rotate-3",
};

export function FloatingCard({
  icon,
  label,
  rotation = "none",
  className,
}: FloatingCardProps) {
  return (
    <div
      className={cn(
        "glow-pink-sm inline-flex items-center gap-3 rounded-2xl border border-pink-500/15 bg-card-tinted px-5 py-4 ring-pink-soft transition-colors duration-300 hover:border-pink-500/30",
        rotationMap[rotation],
        className
      )}
    >
      <div className="flex size-9 items-center justify-center rounded-lg border border-pink-500/20 bg-pink-500/10 text-pink-200">
        <HugeiconsIcon className="size-4" icon={icon} strokeWidth={1.8} />
      </div>
      <span className="font-medium font-mono text-foreground text-sm tracking-tight">
        {label}
      </span>
    </div>
  );
}
