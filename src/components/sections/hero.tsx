import {
  ArrowRight02Icon,
  Call02Icon,
  HashtagIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import Link from "next/link";

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
        <div className="relative order-first flex justify-center md:justify-start">
          <Image
            alt="snibcall mascot — a strawberry-hooded cat holding a pink phone"
            className="h-auto w-48 select-none sm:w-56 md:w-[280px] lg:w-[300px]"
            height={907}
            priority
            src="/bot.png"
            width={755}
          />
        </div>

        <div className="flex flex-col items-start gap-6 text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-2.5 py-1 font-medium text-[11.5px] text-muted-foreground tracking-tight">
            <span className="size-1.5 rounded-full bg-pink-500" />
            v1 — Public beta
          </span>

          <h1 className="font-normal text-[48px] text-foreground leading-[1] tracking-[-0.03em] sm:text-[60px] md:text-[72px]">
            A tiny phone
            <br />
            for your <em className="font-medium italic">server.</em>
          </h1>

          <p className="max-w-md text-[16px] text-muted-foreground leading-[1.6] sm:text-[17px]">
            Connect two Discord servers and chat across them. Two channels run{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[14px] text-foreground">
              s.call
            </code>
            , they pair up, and every message relays both ways — wearing the
            original sender&apos;s name and avatar.
          </p>

          <div className="mt-2 flex w-full flex-col items-stretch gap-2.5 sm:w-auto sm:flex-row sm:items-center">
            <Link
              className="inline-flex items-center justify-center gap-2 rounded-md bg-pink-500 px-4 py-2.5 font-semibold text-[14px] text-white tracking-tight transition-colors hover:bg-pink-600"
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
              className="inline-flex items-center justify-center gap-1.5 rounded-md border border-border bg-card px-4 py-2.5 font-semibold text-[14px] text-foreground tracking-tight transition-colors hover:bg-secondary"
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
        </div>
      </div>

      <div className="w-full">
        <div className="overflow-hidden rounded-xl border border-border bg-card">
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
              <span className="size-1.5 rounded-full bg-pink-500" />
              paired with beta-cafe
            </div>
          </div>

          <ul className="flex flex-col divide-y divide-border/40">
            {relayLog.map((msg) => (
              <li
                className="flex items-start gap-3 px-4 py-3 transition-colors hover:bg-secondary/40"
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

        <p className="mt-4 max-w-xl text-[13.5px] text-muted-foreground leading-[1.6]">
          Messages in the paired channel relay through a webhook — carrying the
          original author&apos;s name and avatar to the other side.
        </p>
      </div>
    </section>
  );
}
