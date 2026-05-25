"use client";

import {
  Call02Icon,
  Home01Icon,
  Shield01Icon,
  SparklesIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import { useState } from "react";

import { SectionHeading } from "@/components/ui/section-heading";

interface CommandRow {
  alias?: string;
  cmd: string;
  desc: string;
}

interface HelpPage {
  body: React.ReactNode;
  hint: string;
  icon: IconSvgElement;
  id: string;
  label: string;
}

const commandRows: CommandRow[] = [
  {
    cmd: "s.call",
    alias: "s.c",
    desc: "start a call — pair with another server.",
  },
  {
    cmd: "s.skip",
    alias: "s.s",
    desc: "end the current call and find a new one.",
  },
  { cmd: "s.hangup", alias: "s.h", desc: "end the call quietly." },
  {
    cmd: "s.friend",
    alias: "s.fr",
    desc: "share your discord handle with the other side.",
  },
  {
    cmd: "s.mask",
    alias: "s.anon",
    desc: "hide your name and avatar — turn anonymous.",
  },
  { cmd: "s.unmask", desc: "remove your mask and show your real name again." },
  { cmd: "s.block", desc: "block a server from matching with yours." },
  { cmd: "s.unblock", desc: "unblock a previously blocked server." },
  { cmd: "s.blocks", desc: "list every server you've blocked." },
  { cmd: "s.help", desc: "open the help menu, or one command in detail." },
  { cmd: "s.ping", alias: "s.p", desc: "check the bot's latency and uptime." },
];

const tips = [
  "mentions never ping across servers — safe to be casual.",
  "needs Manage Webhooks in the call channel.",
  "one call per channel · same-server channels can't match.",
  "admins: s.block to refuse a server forever.",
];

const pages: HelpPage[] = [
  {
    id: "home",
    label: "home",
    hint: "the intro card",
    icon: Home01Icon,
    body: (
      <div className="flex flex-col gap-3">
        <p className="text-[14px] text-foreground leading-[1.65]">
          a tiny phone for your server.
        </p>
        <p className="text-[13px] text-muted-foreground leading-[1.65]">
          run{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[12px] text-foreground">
            s.call
          </code>{" "}
          — when another server does the same, you&apos;re connected.
        </p>
        <p className="text-[13px] text-muted-foreground leading-[1.65]">
          messages relay both ways. it feels like one shared room.
        </p>
      </div>
    ),
  },
  {
    id: "commands",
    label: "commands",
    hint: "11 in total",
    icon: Call02Icon,
    body: (
      <ul className="-mx-1 flex flex-col gap-0.5">
        {commandRows.map((row) => (
          <li
            className="flex flex-col gap-0.5 rounded px-1.5 py-1.5 transition-colors hover:bg-white/[0.03] sm:flex-row sm:items-baseline sm:gap-2"
            key={row.cmd}
          >
            <div className="flex shrink-0 items-baseline gap-1.5">
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono font-semibold text-[12px] text-foreground">
                {row.cmd}
              </code>
              {row.alias ? (
                <code className="rounded bg-muted/50 px-1.5 py-0.5 font-mono text-[11px] text-muted-foreground">
                  {row.alias}
                </code>
              ) : null}
            </div>
            <span className="text-[12.5px] text-muted-foreground leading-snug">
              <span className="hidden sm:inline">— </span>
              {row.desc}
            </span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: "how",
    label: "how it works",
    hint: "the pipeline",
    icon: SparklesIcon,
    body: (
      <div className="flex flex-col gap-3">
        <p className="text-[13px] text-muted-foreground leading-[1.65]">
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[12px] text-foreground">
            s.call
          </code>{" "}
          waits in queue → matched with another server → you&apos;re connected.
        </p>
        <p className="text-[13px] text-muted-foreground leading-[1.65]">
          messages relay across via webhook with your name + avatar.
        </p>
        <p className="text-[13px] text-muted-foreground leading-[1.65]">
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[12px] text-foreground">
            s.skip
          </code>{" "}
          to swap.{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[12px] text-foreground">
            s.hangup
          </code>{" "}
          to end. silence auto-ends after 5 min.
        </p>
      </div>
    ),
  },
  {
    id: "tips",
    label: "tips & privacy",
    hint: "4 things to know",
    icon: Shield01Icon,
    body: (
      <ul className="flex flex-col gap-2">
        {tips.map((tip) => (
          <li
            className="flex items-start gap-2.5 text-[13px] text-muted-foreground leading-[1.6]"
            key={tip}
          >
            <span
              aria-hidden
              className="mt-1.5 size-1 shrink-0 rounded-full bg-pink-500"
            />
            <span>{tip}</span>
          </li>
        ))}
      </ul>
    ),
  },
];

export function HelpPeek() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = pages[activeIdx];

  return (
    <section
      className="cv-auto relative flex flex-col items-start gap-12 border-border/60 border-t py-20 md:py-28"
      id="help"
    >
      <SectionHeading
        className="reveal-on-scroll"
        eyebrow="Help"
        subtitle="Four pages, one command. snibcall packs everything into a single paginated embed."
        title={
          <>
            A peek at <em className="font-medium italic">s.help</em>
          </>
        }
      />

      <div className="grid w-full gap-4 md:grid-cols-[minmax(0,1fr)_240px] md:gap-6">
        <div className="reveal-left order-2 md:order-1">
          <div className="parallax-y-up-sm flex overflow-hidden rounded-xl border border-border bg-card">
            <div className="reveal-scale-y w-[3px] shrink-0 bg-pink-500" />
            <div className="flex min-w-0 flex-1 flex-col">
              <div className="flex items-center gap-2 border-border/60 border-b px-4 py-3 sm:px-5">
                <HugeiconsIcon
                  className="size-4 shrink-0 text-pink-400 transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]"
                  icon={active.icon}
                  strokeWidth={1.8}
                />
                <span className="font-semibold text-[14px] text-foreground tracking-tight">
                  {active.label}
                </span>
                <span className="ml-auto font-mono text-[10.5px] text-muted-foreground/80 tabular-nums">
                  {activeIdx + 1} / {pages.length}
                </span>
              </div>
              <div
                className="h-[280px] animate-[fade-blur-in_260ms_cubic-bezier(0.23,1,0.32,1)] overflow-y-auto px-4 py-4 [scrollbar-width:thin] sm:px-5"
                key={active.id}
              >
                {active.body}
              </div>
            </div>
          </div>
        </div>

        <aside className="reveal-right order-1 flex flex-col gap-3 md:order-2 md:gap-4">
          <div className="hidden flex-col gap-2 md:flex">
            <span className="font-mono font-semibold text-[10px] text-muted-foreground/80 uppercase tracking-[0.18em]">
              The command
            </span>
            <code className="inline-flex w-fit items-center gap-1.5 rounded-md border border-border bg-background px-2.5 py-1 font-mono text-[13px] text-foreground">
              <span className="text-pink-400">$</span>
              s.help
            </code>
            <p className="text-[12px] text-muted-foreground leading-[1.6]">
              Returns a paginated embed. Pick a page to see what renders.
            </p>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1 md:flex-col md:gap-1 md:overflow-x-visible md:pb-0">
            {pages.map((page, idx) => {
              const isActive = idx === activeIdx;
              return (
                <button
                  aria-pressed={isActive}
                  className={`flex shrink-0 items-center gap-2.5 rounded-md border px-3 py-2 text-left transition-[background-color,border-color,color,transform] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97] md:w-full ${
                    isActive
                      ? "border-pink-500/50 bg-pink-500/[0.06] text-foreground"
                      : "border-border bg-card text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                  key={page.id}
                  onClick={() => setActiveIdx(idx)}
                  type="button"
                >
                  <HugeiconsIcon
                    className={`size-4 shrink-0 transition-colors duration-200 ${isActive ? "text-pink-400" : "text-muted-foreground"}`}
                    icon={page.icon}
                    strokeWidth={1.8}
                  />
                  <span className="flex min-w-0 flex-col">
                    <span className="font-medium text-[13px] leading-tight tracking-tight">
                      {page.label}
                    </span>
                    <span className="hidden text-[10.5px] text-muted-foreground/70 leading-tight tracking-tight md:mt-0.5 md:inline">
                      {page.hint}
                    </span>
                  </span>
                  <span
                    className={`ml-auto hidden shrink-0 font-mono text-[10px] tabular-nums md:inline ${
                      isActive ? "text-pink-400/80" : "text-muted-foreground/50"
                    }`}
                  >
                    {idx + 1}/{pages.length}
                  </span>
                </button>
              );
            })}
          </div>
        </aside>
      </div>
    </section>
  );
}
