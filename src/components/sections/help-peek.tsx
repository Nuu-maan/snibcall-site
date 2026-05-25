"use client";

import {
  ArrowDown01Icon,
  Call02Icon,
  Home01Icon,
  Shield01Icon,
  SparklesIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { SectionHeading } from "@/components/ui/section-heading";

interface CommandRow {
  cmd: string;
  desc: string;
}

interface HelpPage {
  body: React.ReactNode;
  icon: IconSvgElement;
  id: string;
  label: string;
}

const commandRows: CommandRow[] = [
  { cmd: "s.call (s.c)", desc: "start a call — pair with another server." },
  { cmd: "s.skip (s.s)", desc: "end the current call and find a new one." },
  { cmd: "s.hangup (s.h)", desc: "end the call quietly." },
  {
    cmd: "s.friend (s.fr)",
    desc: "share your discord handle with the other side.",
  },
  {
    cmd: "s.mask (s.anon)",
    desc: "hide your name and avatar — turn anonymous.",
  },
  { cmd: "s.unmask", desc: "remove your mask and show your real name again." },
  { cmd: "s.block", desc: "block a server from matching with yours." },
  { cmd: "s.unblock", desc: "unblock a previously blocked server." },
  { cmd: "s.blocks", desc: "list every server you've blocked." },
  { cmd: "s.help", desc: "open the help menu, or one command in detail." },
  { cmd: "s.ping (s.p)", desc: "check the bot's latency and uptime." },
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
    icon: Call02Icon,
    body: (
      <ul className="flex flex-col gap-1.5">
        {commandRows.map((row) => (
          <li
            className="flex items-baseline gap-2 rounded px-1 py-1 transition-colors hover:bg-white/[0.03]"
            key={row.cmd}
          >
            <code className="shrink-0 rounded bg-muted px-2 py-0.5 font-mono font-semibold text-[12px] text-foreground">
              {row.cmd.split(" ")[0]}
            </code>
            {row.cmd.includes("(") ? (
              <code className="shrink-0 rounded bg-muted/60 px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
                {row.cmd.split(" ")[1]?.replace(/[()]/g, "")}
              </code>
            ) : null}
            <span className="text-[12.5px] text-muted-foreground leading-snug">
              — {row.desc}
            </span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: "how",
    label: "how it works",
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
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const active = pages[activeIdx];

  useEffect(() => {
    if (!open) {
      return;
    }
    function handleDown(e: MouseEvent) {
      if (!dropdownRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleDown);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleDown);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  return (
    <section
      className="cv-auto relative flex flex-col items-start gap-12 border-border/60 border-t py-20 md:py-28"
      id="help"
    >
      <SectionHeading
        eyebrow="Help"
        subtitle="Paginated, dropdown-driven, lives entirely inside Discord. Try the dropdown."
        title={
          <>
            A peek at <em className="font-medium italic">s.help</em>
          </>
        }
      />

      <div className="relative w-full max-w-2xl self-center">
        <div className="rounded-xl border border-border bg-card p-5">
          <div className="flex items-center gap-3 pb-3">
            <span className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-pink-500/15 ring-1 ring-pink-500/30">
              <Image
                alt=""
                aria-hidden="true"
                className="size-10 object-cover"
                height={80}
                src="/bot.png"
                width={80}
              />
            </span>
            <div className="flex flex-col">
              <span className="flex items-center gap-1.5 font-semibold text-[14px] text-foreground tracking-tight">
                snibcall
                <span className="rounded bg-pink-500 px-1 py-px font-bold font-mono text-[9px] text-white uppercase tracking-wide">
                  bot
                </span>
              </span>
              <span className="font-mono text-[11px] text-muted-foreground tracking-tight">
                today at 21:04
              </span>
            </div>
          </div>

          <div className="flex overflow-hidden rounded-md border border-border bg-background">
            <div className="w-0.5 shrink-0 bg-pink-500" />
            <div className="flex flex-1 flex-col gap-3 p-4">
              <div className="flex items-center gap-2">
                <HugeiconsIcon
                  className="size-4 text-pink-400"
                  icon={active.icon}
                  strokeWidth={1.8}
                />
                <span className="font-semibold text-[14px] text-foreground tracking-tight">
                  {active.label}
                </span>
                <span className="ml-auto font-mono text-[10.5px] text-muted-foreground/80">
                  {activeIdx + 1} / {pages.length}
                </span>
              </div>

              <div className="animate-[fade-in_220ms_ease-out]" key={active.id}>
                {active.body}
              </div>
            </div>
          </div>

          <div className="relative mt-2" ref={dropdownRef}>
            <button
              aria-expanded={open}
              aria-haspopup="listbox"
              className="flex w-full items-center justify-between rounded-md border border-border bg-background px-3 py-2.5 font-medium text-[13px] text-foreground transition-colors hover:bg-secondary"
              onClick={() => setOpen((v) => !v)}
              type="button"
            >
              <span className="flex items-center gap-2.5">
                <HugeiconsIcon
                  className="size-4 text-muted-foreground"
                  icon={active.icon}
                  strokeWidth={1.8}
                />
                {active.label}
              </span>
              <HugeiconsIcon
                className={`size-4 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                icon={ArrowDown01Icon}
                strokeWidth={2}
              />
            </button>

            {open ? (
              <ul className="absolute right-0 left-0 z-20 mt-1.5 flex animate-[fade-in_140ms_ease-out] flex-col gap-0.5 rounded-md border border-border bg-popover p-1.5 shadow-black/40 shadow-xl">
                {pages.map((page, idx) => (
                  <li key={page.id}>
                    <button
                      aria-pressed={idx === activeIdx}
                      className={`flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left font-medium text-[13px] transition-colors ${
                        idx === activeIdx
                          ? "bg-secondary text-foreground"
                          : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
                      }`}
                      onClick={() => {
                        setActiveIdx(idx);
                        setOpen(false);
                      }}
                      type="button"
                    >
                      <HugeiconsIcon
                        className="size-4 text-muted-foreground"
                        icon={page.icon}
                        strokeWidth={1.8}
                      />
                      <span>{page.label}</span>
                      <span className="ml-auto font-mono text-[10px] text-muted-foreground/60">
                        {idx + 1}/{pages.length}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-1.5">
          {pages.map((page, idx) => (
            <button
              aria-label={`go to ${page.label}`}
              className={`h-1 rounded-full transition-all duration-300 ${
                idx === activeIdx
                  ? "w-6 bg-foreground"
                  : "w-1 bg-border hover:bg-muted-foreground"
              }`}
              key={page.id}
              onClick={() => setActiveIdx(idx)}
              type="button"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
