import {
  ArrowRight02Icon,
  Call02Icon,
  CheckmarkBadge02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

import { GradientText } from "@/components/ui/gradient-text";

export function CTA() {
  return (
    <section className="reveal-on-scroll cv-auto relative flex flex-col items-center gap-7 overflow-hidden py-32 text-center">
      {/* contained ambient — centered & soft, no hard edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[36rem] w-[60rem] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center, oklch(0.7 0.27 350 / 0.18) 0%, transparent 60%)",
        }}
      />

      {/* top separator */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 left-1/2 -z-10 h-px w-full max-w-3xl -translate-x-1/2 bg-gradient-to-r from-transparent via-pink-500/40 to-transparent"
      />

      <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-1.5 font-medium text-[12px] text-pink-200 tracking-tight ring-soft">
        <HugeiconsIcon className="size-3.5" icon={Call02Icon} strokeWidth={2} />
        ready when you are
      </div>

      <h2 className="max-w-3xl text-balance font-bold text-[36px] text-foreground leading-[110%] tracking-tight md:text-[52px]">
        give your server a <GradientText>tiny phone.</GradientText>
      </h2>

      <p className="max-w-xl text-pretty font-medium text-[17px] text-muted-foreground leading-[175%] tracking-tight">
        free to add, no setup, runs in the background. type{" "}
        <code className="rounded bg-pink-500/12 px-1.5 py-0.5 font-mono text-[14px] text-pink-200">
          s.call
        </code>{" "}
        and you&apos;re in a queue. when another server does the same —
        you&apos;re live.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
        <Link
          className="shimmer-sweep inline-flex items-center gap-2.5 rounded-full bg-pink-500 px-7 py-3.5 font-semibold text-[16px] text-white tracking-tight transition-transform duration-300 hover:scale-[1.03] active:scale-[0.97]"
          href="/invite"
        >
          <HugeiconsIcon
            className="size-4"
            icon={Call02Icon}
            strokeWidth={2.2}
          />
          invite snibcall
        </Link>
        <Link
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 font-semibold text-[16px] text-foreground tracking-tight transition-colors hover:border-pink-500/30 active:scale-[0.97]"
          href="/commands"
        >
          browse commands
          <HugeiconsIcon
            className="size-4"
            icon={ArrowRight02Icon}
            strokeWidth={2.2}
          />
        </Link>
      </div>

      {/* tiny "what you type" demo strip */}
      <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-border bg-card-tinted px-4 py-2 ring-pink-soft">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-pink-500/12 px-2 py-0.5 font-mono font-semibold text-[10px] text-pink-200 lowercase tracking-wider">
          <HugeiconsIcon
            className="size-3"
            icon={CheckmarkBadge02Icon}
            strokeWidth={2}
          />
          step 1
        </span>
        <span className="font-mono text-[13px] text-muted-foreground">
          <span className="text-pink-300">{">"}</span>{" "}
          <span className="font-semibold text-pink-200">s.call</span>{" "}
          <span className="text-muted-foreground/70">in any channel</span>
        </span>
        <span className="size-1.5 animate-status-pulse rounded-full bg-pink-400" />
      </div>

      <p className="font-mono text-[11px] text-muted-foreground/70 lowercase tracking-[0.16em]">
        no signup · no dashboard · no card needed
      </p>
    </section>
  );
}
