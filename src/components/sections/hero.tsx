import {
  ArrowUpRight01Icon,
  Call02Icon,
  HashtagIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import Link from "next/link";

import { buttonStyles } from "@/components/ui/button";

interface RelayMessage {
  author: string;
  authorColor: string;
  text: string;
  viaPair?: boolean;
}

const relayLog: RelayMessage[] = [
  {
    author: "maya",
    authorColor: "oklch(0.74 0.16 30)",
    text: "yo who's down to call?",
  },
  {
    author: "kai",
    authorColor: "oklch(0.72 0.14 240)",
    text: "joining now — this place is cute",
    viaPair: true,
  },
  {
    author: "jordan",
    authorColor: "oklch(0.72 0.16 145)",
    text: "wait it's actually using my avatar??",
  },
  {
    author: "river",
    authorColor: "oklch(0.68 0.12 350)",
    text: "yep — webhook magic",
    viaPair: true,
  },
];

export function Hero() {
  return (
    <section className="relative flex flex-col gap-16 pt-20 pb-16 sm:gap-20 md:pt-28 md:pb-24">
      <div className="grid items-center gap-12 md:grid-cols-[1fr_1.2fr] md:gap-16">
        <div className="parallax-y-down relative order-first flex justify-center md:justify-start">
          <div className="relative">
            {/* Soft pink halo behind the mascot's phone — sells "active call".
                Positioned over the upper-left quadrant where the phone is held. */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-[34%] left-[32%] size-32 -translate-x-1/2 -translate-y-1/2 animate-call-ring-breathe rounded-full bg-[radial-gradient(circle,oklch(0.7_0.16_20_/_0.45)_0%,transparent_70%)] blur-xl sm:size-36 md:size-44"
            />
            {/* Three concentric radio waves on staggered delays — the
                signal cadence of a phone speaker. */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-[34%] left-[32%] -translate-x-1/2 -translate-y-1/2"
            >
              <span className="absolute inset-0 size-10 animate-call-wave-out rounded-full border border-pink-400/60 sm:size-12 md:size-14" />
              <span className="absolute inset-0 size-10 animate-call-wave-out rounded-full border border-pink-400/60 [animation-delay:900ms] sm:size-12 md:size-14" />
              <span className="absolute inset-0 size-10 animate-call-wave-out rounded-full border border-pink-400/60 [animation-delay:1800ms] sm:size-12 md:size-14" />
            </div>

            <Image
              alt="snibcall mascot — a strawberry-hooded cat holding a pink phone"
              className="relative h-auto w-48 animate-mascot-on-call select-none [animation-delay:600ms] [transform-origin:50%_80%] sm:w-56 md:w-[280px] lg:w-[300px]"
              height={907}
              priority
              src="/bot.png"
              width={755}
            />
          </div>
        </div>

        <div className="flex flex-col items-start gap-6 text-left">
          <span className="inline-flex animate-[fade-up_500ms_cubic-bezier(0.23,1,0.32,1)_both] items-center gap-2 rounded-full border border-border bg-card px-2.5 py-1 font-medium text-[11.5px] text-muted-foreground tracking-tight">
            <span className="relative flex size-1.5">
              <span
                aria-hidden="true"
                className="absolute inset-0 animate-ping-ring rounded-full bg-pink-500"
              />
              <span className="relative size-1.5 rounded-full bg-pink-500" />
            </span>
            v1 — Public beta
          </span>

          <h1 className="font-normal text-[44px] text-foreground leading-[1] tracking-[-0.03em] sm:text-[56px] lg:text-[68px] xl:text-[72px]">
            <span className="inline-block animate-[fade-up_700ms_cubic-bezier(0.23,1,0.32,1)_80ms_both]">
              A
            </span>{" "}
            <span className="inline-block animate-[fade-up_700ms_cubic-bezier(0.23,1,0.32,1)_140ms_both]">
              tiny
            </span>{" "}
            <span className="inline-block animate-[fade-up_700ms_cubic-bezier(0.23,1,0.32,1)_200ms_both]">
              phone
            </span>
            <br />
            <span className="inline-block animate-[fade-up_700ms_cubic-bezier(0.23,1,0.32,1)_260ms_both]">
              for
            </span>{" "}
            <span className="inline-block animate-[fade-up_700ms_cubic-bezier(0.23,1,0.32,1)_320ms_both]">
              your
            </span>{" "}
            <span className="inline-block animate-[fade-up_700ms_cubic-bezier(0.23,1,0.32,1)_380ms_both]">
              <em className="font-medium italic">server.</em>
            </span>
          </h1>

          <p className="max-w-md animate-[fade-up_600ms_cubic-bezier(0.23,1,0.32,1)_140ms_both] text-[16px] text-muted-foreground leading-[1.6] sm:text-[17px]">
            Connect two Discord servers and chat across them. Two channels run{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[14px] text-foreground">
              s.call
            </code>
            , they pair up, and every message relays both ways — wearing the
            original sender&apos;s name and avatar.
          </p>

          <div className="mt-2 flex w-full animate-[fade-up_600ms_cubic-bezier(0.23,1,0.32,1)_220ms_both] flex-col items-stretch gap-2.5 sm:w-auto sm:flex-row sm:items-center">
            <Link
              className={buttonStyles({ variant: "primary", size: "lg" })}
              href="/invite"
            >
              <HugeiconsIcon
                className="size-4 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover/btn:rotate-[8deg]"
                icon={Call02Icon}
                strokeWidth={2.2}
              />
              Add to Discord
            </Link>
            <Link
              className={buttonStyles({ variant: "secondary", size: "lg" })}
              href="/commands"
            >
              Browse commands
              <HugeiconsIcon
                className="size-3.5 opacity-70 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                icon={ArrowUpRight01Icon}
                strokeWidth={2.2}
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="reveal-on-scroll w-full">
        <div className="parallax-y-up-sm overflow-hidden rounded-xl border border-border bg-card">
          <div className="flex items-center justify-between border-border/80 border-b px-4 py-3">
            <div className="flex items-center gap-2 font-semibold text-[13.5px] text-foreground tracking-tight">
              <HugeiconsIcon
                className="size-4 text-muted-foreground"
                icon={HashtagIcon}
                strokeWidth={2}
              />
              general
            </div>
            <div className="inline-flex items-center gap-2 font-medium font-mono text-[11px] text-muted-foreground tracking-tight">
              <span className="relative flex size-1.5">
                <span
                  aria-hidden="true"
                  className="absolute inset-0 animate-ping-ring rounded-full bg-pink-500"
                />
                <span className="relative size-1.5 animate-status-pulse rounded-full bg-pink-500" />
              </span>
              paired with beta-cafe
            </div>
          </div>

          <ul className="flex flex-col divide-y divide-border/40">
            {relayLog.map((msg, idx) => (
              <li
                className={`flex items-start gap-3 px-4 py-3 transition-colors duration-200 hover:bg-secondary/40 ${
                  [
                    "reveal-on-scroll",
                    "reveal-on-scroll-1",
                    "reveal-on-scroll-2",
                    "reveal-on-scroll-3",
                  ][idx]
                }`}
                key={msg.author}
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 size-9 shrink-0 rounded-full ring-1 ring-border"
                  style={{ background: msg.authorColor }}
                />
                <div className="flex min-w-0 flex-col">
                  <div className="flex items-baseline gap-2">
                    <span
                      className="font-semibold text-[14px] tracking-tight"
                      style={{ color: msg.authorColor }}
                    >
                      {msg.author}
                    </span>
                    {msg.viaPair ? (
                      <span className="inline-flex items-center rounded border border-border bg-muted px-1.5 py-0.5 font-medium font-mono text-[9.5px] text-muted-foreground tracking-tight">
                        via snibcall
                      </span>
                    ) : null}
                    <span className="font-mono text-[10.5px] text-muted-foreground/70">
                      today
                    </span>
                  </div>
                  <p className="text-[14px] text-foreground/90 leading-[1.5]">
                    {msg.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <p className="reveal-on-scroll-2 mt-4 max-w-xl text-[13.5px] text-muted-foreground leading-[1.6]">
          Messages in the paired channel relay through a webhook — carrying the
          original author&apos;s name and avatar to the other side.
        </p>
      </div>
    </section>
  );
}
