import { ArrowUpRight01Icon, Call02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

export function CTA() {
  return (
    <section className="cv-auto relative flex flex-col items-center gap-6 border-border/60 border-t py-24 text-center md:py-32">
      <span className="reveal-on-scroll inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-medium text-[11.5px] text-muted-foreground tracking-tight">
        <span className="relative flex size-1.5">
          <span
            aria-hidden="true"
            className="absolute inset-0 animate-ping-ring rounded-full bg-pink-500"
          />
          <span className="relative size-1.5 animate-status-pulse rounded-full bg-pink-500" />
        </span>
        Ready when you are
      </span>

      <h2 className="reveal-up-lg max-w-2xl font-normal text-[40px] text-foreground leading-[1.05] tracking-[-0.03em] sm:text-[48px] md:text-[56px]">
        Give your server a <em className="font-medium italic">tiny phone.</em>
      </h2>

      <p className="reveal-on-scroll-2 max-w-xl text-[16px] text-muted-foreground leading-[1.6] sm:text-[17px]">
        Free to add, no setup, runs in the background. Type{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[14px] text-foreground">
          s.call
        </code>{" "}
        and you&apos;re in a queue. When another server does the same —
        you&apos;re live.
      </p>

      <div className="reveal-scale mt-2 flex w-full flex-col items-stretch justify-center gap-2.5 sm:w-auto sm:flex-row sm:items-center">
        <Link
          className="group inline-flex items-center justify-center gap-2 rounded-md bg-pink-500 px-5 py-3 font-semibold text-[14.5px] text-white tracking-tight transition-[background-color,transform,box-shadow] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-pink-600 hover:shadow-[0_10px_32px_-8px_oklch(0.7_0.16_20_/_0.55)] active:scale-[0.97]"
          href="/invite"
        >
          <HugeiconsIcon
            className="size-4 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:rotate-[8deg]"
            icon={Call02Icon}
            strokeWidth={2.2}
          />
          Add to Discord
        </Link>
        <Link
          className="group inline-flex items-center justify-center gap-1.5 rounded-md border border-border bg-card px-5 py-3 font-semibold text-[14.5px] text-foreground tracking-tight transition-[background-color,transform] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-secondary active:scale-[0.97]"
          href="/commands"
        >
          Browse commands
          <HugeiconsIcon
            className="size-3.5 opacity-70 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            icon={ArrowUpRight01Icon}
            strokeWidth={2.2}
          />
        </Link>
      </div>

      <p className="reveal-on-scroll-3 mt-6 font-mono text-[11px] text-muted-foreground/80 uppercase tracking-[0.16em]">
        No signup · No dashboard · No card needed
      </p>
    </section>
  );
}
