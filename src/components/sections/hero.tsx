import {
  ArrowRight02Icon,
  Call02Icon,
  CheckmarkBadge02Icon,
  HashtagIcon,
  UserMultipleIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

import { GradientBlob } from "@/components/decor/gradient-blob";
import { GradientText } from "@/components/ui/gradient-text";

interface ServerCard {
  accent: string;
  channel: string;
  letter: string;
  members: string;
  name: string;
  status: string;
}

const servers: ServerCard[] = [
  {
    letter: "A",
    name: "alpha lounge",
    channel: "general",
    members: "1,204",
    accent: "oklch(0.7 0.27 350)",
    status: "queued",
  },
  {
    letter: "B",
    name: "beta cafe",
    channel: "lounge",
    members: "842",
    accent: "oklch(0.65 0.22 280)",
    status: "connected",
  },
];

interface RelayMessage {
  author: string;
  authorColor: string;
  from: "A" | "B";
  text: string;
}

const relayLog: RelayMessage[] = [
  {
    from: "A",
    author: "maya",
    authorColor: "oklch(0.72 0.2 30)",
    text: "yo who's down to call?",
  },
  {
    from: "B",
    author: "kai",
    authorColor: "oklch(0.7 0.18 240)",
    text: "joining now ✦ this place is cute",
  },
  {
    from: "A",
    author: "jordan",
    authorColor: "oklch(0.7 0.22 145)",
    text: "wait it's actually using my avatar??",
  },
  {
    from: "B",
    author: "river",
    authorColor: "oklch(0.7 0.21 320)",
    text: "yep — webhook magic 🎭",
  },
];

export function Hero() {
  return (
    <section className="relative flex flex-col items-center gap-7 py-20 text-center md:py-28">
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -z-10 h-[42rem] w-full max-w-5xl -translate-x-1/2 bg-grid opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]"
      />
      <GradientBlob
        className="-top-32 left-1/2 -z-10 animate-drift"
        color="pink"
        size="lg"
      />

      <div className="inline-flex animate-pulse-glow items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-1.5 font-medium text-[12px] text-pink-200 tracking-tight ring-soft">
        <HugeiconsIcon
          className="size-3.5"
          icon={CheckmarkBadge02Icon}
          strokeWidth={2}
        />
        v1 · public beta — join the queue
      </div>

      <h1 className="max-w-3xl text-balance font-bold text-[44px] text-foreground leading-[105%] tracking-tight md:text-[64px]">
        <span className="text-pink-300">✦</span> snibcall
      </h1>

      <p className="max-w-lg text-balance font-medium text-[22px] text-muted-foreground italic leading-[150%] tracking-tight md:text-[26px]">
        <GradientText>a tiny phone for your server.</GradientText>
      </p>

      <p className="max-w-xl text-pretty font-medium text-[17px] text-muted-foreground leading-[175%] tracking-tight">
        connect two discord servers and chat across them. two channels run{" "}
        <code className="rounded bg-pink-500/12 px-1.5 py-0.5 font-mono text-[14px] text-pink-200">
          s.call
        </code>
        , they pair up in a queue, and from then on every message relays both
        ways — wearing the original sender&apos;s name and avatar.
      </p>

      <p className="max-w-xl text-pretty font-medium text-[15px] text-muted-foreground/80 leading-[170%] tracking-tight">
        no dashboards. no setup screens. no accounts. you type a command, you
        meet a stranger&apos;s server, you talk. like a payphone — but cuter.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
        <Link
          className="glow-pink-sm shimmer-sweep inline-flex items-center gap-2 rounded-full bg-pink-500 px-6 py-3 font-semibold text-[16px] text-white tracking-tight transition-transform hover:scale-[1.03] active:scale-[0.97]"
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
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 font-semibold text-[16px] text-foreground tracking-tight transition-colors hover:border-pink-500/30 active:scale-[0.97]"
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

      <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-3 font-medium font-mono text-[11px] text-muted-foreground lowercase tracking-[0.14em]">
        <li className="inline-flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-pink-400" />
          free forever
        </li>
        <li className="inline-flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-pink-400" />
          no setup
        </li>
        <li className="inline-flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-pink-400" />
          lives in-discord
        </li>
        <li className="inline-flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-pink-400" />
          built on webhooks
        </li>
      </ul>

      {/* Clean relay diagram — two servers + animated link */}
      <div className="mt-14 w-full max-w-3xl">
        <div className="grid items-stretch gap-3 sm:grid-cols-[1fr_auto_1fr]">
          {servers.map((server, idx) => (
            <article
              className="relative overflow-hidden rounded-2xl border border-border bg-card-tinted p-5 text-left ring-pink-soft"
              key={server.letter}
            >
              <div
                aria-hidden="true"
                className="absolute -top-px right-8 left-8 h-px bg-gradient-to-r from-transparent via-pink-400/40 to-transparent"
              />
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex size-11 shrink-0 items-center justify-center rounded-2xl font-bold text-[18px] text-white ring-soft"
                  style={{
                    background: `linear-gradient(135deg, ${server.accent} 0%, rgb(17 18 18) 100%)`,
                  }}
                >
                  {server.letter}
                </span>
                <div className="flex flex-col">
                  <span className="font-semibold text-[14px] text-foreground tracking-tight">
                    {server.name}
                  </span>
                  <span className="inline-flex items-center gap-1 font-medium font-mono text-[11px] text-muted-foreground tracking-tight">
                    <HugeiconsIcon
                      className="size-3"
                      icon={HashtagIcon}
                      strokeWidth={2}
                    />
                    {server.channel}
                  </span>
                </div>
                <span className="ml-auto inline-flex items-center gap-1 rounded-full border border-pink-500/15 bg-pink-500/8 px-2 py-0.5 font-medium font-mono text-[10px] text-pink-200 tracking-tight">
                  <HugeiconsIcon
                    className="size-2.5"
                    icon={UserMultipleIcon}
                    strokeWidth={2}
                  />
                  {server.members}
                </span>
              </div>
              <div className="mt-3 flex items-center gap-2 rounded-md bg-secondary/60 px-2.5 py-1.5 font-mono text-[11px] text-muted-foreground">
                <span className="text-pink-300">{">"}</span>
                <span className="font-semibold text-pink-200">s.call</span>
                <span className="ml-auto inline-flex items-center gap-1 text-[10px]">
                  <span
                    className={`size-1.5 rounded-full ${idx === 1 ? "bg-pink-400" : "animate-status-pulse bg-pink-400"}`}
                  />
                  {server.status}
                </span>
              </div>
            </article>
          ))}

          {/* center relay pill */}
          <div className="relative order-first flex items-center justify-center py-3 sm:order-none sm:py-0">
            <svg
              aria-hidden="true"
              className="absolute inset-x-0 hidden h-12 w-full text-pink-500/35 sm:block"
              fill="none"
              viewBox="0 0 120 40"
            >
              <title>relay link</title>
              <path
                d="M 4 20 Q 30 4, 60 20 T 116 20"
                stroke="currentColor"
                strokeDasharray="4 5"
                strokeLinecap="round"
                strokeWidth="1.5"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  dur="2.4s"
                  from="0"
                  repeatCount="indefinite"
                  to="-18"
                />
              </path>
            </svg>
            <div className="relative z-10 flex items-center gap-1.5 rounded-full border border-pink-500/30 bg-background px-3 py-1.5 ring-pink-soft">
              <span className="text-pink-300">✦</span>
              <span className="font-medium font-mono text-[11px] text-pink-100 lowercase tracking-wider">
                relay
              </span>
            </div>
          </div>
        </div>

        {/* live relay log */}
        <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-card-tinted ring-pink-soft">
          <div className="flex items-center justify-between border-white/5 border-b px-4 py-2.5">
            <span className="inline-flex items-center gap-2 font-medium font-mono text-[11px] text-muted-foreground lowercase tracking-[0.14em]">
              <span className="size-1.5 animate-status-pulse rounded-full bg-pink-400" />
              live relay · alpha ⇄ beta
            </span>
            <span className="font-mono text-[10px] text-muted-foreground/70">
              webhook
            </span>
          </div>
          <ul className="divide-y divide-white/5">
            {relayLog.map((msg) => (
              <li
                className="flex items-center gap-3 px-4 py-2.5 text-left"
                key={`${msg.from}-${msg.author}`}
              >
                <span
                  className={`inline-flex shrink-0 items-center justify-center rounded-md px-1.5 py-0.5 font-mono font-semibold text-[10px] tracking-wider ${
                    msg.from === "A"
                      ? "bg-pink-500/15 text-pink-200"
                      : "bg-[oklch(0.65_0.22_280_/_0.15)] text-[oklch(0.85_0.18_280)]"
                  }`}
                  title={`from server ${msg.from}`}
                >
                  {msg.from}
                </span>
                <span
                  aria-hidden="true"
                  className="size-6 shrink-0 rounded-full ring-1 ring-white/10"
                  style={{
                    background: `linear-gradient(135deg, ${msg.authorColor}, rgb(17 18 18))`,
                  }}
                />
                <span
                  className="font-semibold text-[12px] tracking-tight"
                  style={{ color: msg.authorColor }}
                >
                  {msg.author}
                </span>
                <span className="truncate font-medium text-[13px] text-foreground tracking-tight">
                  {msg.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
