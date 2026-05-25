import { ArrowRight02Icon, Call02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

export function CTA() {
  return (
    <section className="cv-auto relative flex flex-col items-center gap-6 border-border/60 border-t py-24 text-center md:py-32">
      <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-medium text-[11.5px] text-muted-foreground tracking-tight">
        <span className="size-1.5 rounded-full bg-pink-500" />
        Ready when you are
      </span>

      <h2 className="max-w-2xl font-normal text-[40px] text-foreground leading-[1.05] tracking-[-0.03em] sm:text-[48px] md:text-[56px]">
        Give your server a <em className="font-medium italic">tiny phone.</em>
      </h2>

      <p className="max-w-xl text-[16px] text-muted-foreground leading-[1.6] sm:text-[17px]">
        Free to add, no setup, runs in the background. Type{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[14px] text-foreground">
          s.call
        </code>{" "}
        and you&apos;re in a queue. When another server does the same —
        you&apos;re live.
      </p>

      <div className="mt-2 flex w-full flex-col items-stretch justify-center gap-2.5 sm:w-auto sm:flex-row sm:items-center">
        <Link
          className="inline-flex items-center justify-center gap-2 rounded-md bg-pink-500 px-5 py-3 font-semibold text-[14.5px] text-white tracking-tight transition-colors hover:bg-pink-600"
          href="/invite"
        >
          <HugeiconsIcon
            className="size-4"
            icon={Call02Icon}
            strokeWidth={2.2}
          />
          Add to Discord
        </Link>
        <Link
          className="inline-flex items-center justify-center gap-1.5 rounded-md border border-border bg-card px-5 py-3 font-semibold text-[14.5px] text-foreground tracking-tight transition-colors hover:bg-secondary"
          href="/commands"
        >
          Browse commands
          <HugeiconsIcon
            className="size-3.5 opacity-70"
            icon={ArrowRight02Icon}
            strokeWidth={2.2}
          />
        </Link>
      </div>

      <p className="mt-6 font-mono text-[11px] text-muted-foreground/80 uppercase tracking-[0.16em]">
        No signup · No dashboard · No card needed
      </p>
    </section>
  );
}
