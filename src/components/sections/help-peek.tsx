"use client";

import {
  ArrowDown01Icon,
  Book02Icon,
  Call02Icon,
  Home01Icon,
  Shield01Icon,
  SparklesIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import { useEffect, useRef, useState } from "react";

import { GradientText } from "@/components/ui/gradient-text";
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
  { cmd: "s.block", desc: "block a server from matching with yours." },
  { cmd: "s.unblock", desc: "unblock a previously blocked server." },
  { cmd: "s.blocks", desc: "list every server you've blocked." },
  { cmd: "s.help", desc: "open the help menu, or one command in detail." },
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
        <p className="font-medium text-[14px] text-foreground italic leading-[170%] tracking-tight">
          a tiny phone for your server.
        </p>
        <p className="font-medium text-[13px] text-muted-foreground leading-[170%] tracking-tight">
          run{" "}
          <code className="rounded bg-pink-500/12 px-1.5 py-0.5 font-mono text-[12px] text-pink-200">
            s.call
          </code>{" "}
          — when another server does the same, you&apos;re connected.
        </p>
        <p className="font-medium text-[13px] text-muted-foreground leading-[170%] tracking-tight">
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
            className="flex items-baseline gap-2 rounded-md px-1 py-1 transition-colors hover:bg-white/[0.03]"
            key={row.cmd}
          >
            <code className="shrink-0 rounded bg-pink-500/12 px-2 py-0.5 font-mono font-semibold text-[12px] text-pink-200">
              {row.cmd.split(" ")[0]}
            </code>
            {row.cmd.includes("(") ? (
              <code className="shrink-0 rounded bg-white/[0.04] px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
                {row.cmd.split(" ")[1]?.replace(/[()]/g, "")}
              </code>
            ) : null}
            <span className="font-medium text-[12.5px] text-muted-foreground leading-snug tracking-tight">
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
        <p className="font-medium text-[13px] text-muted-foreground leading-[170%] tracking-tight">
          <code className="rounded bg-pink-500/12 px-1.5 py-0.5 font-mono text-[12px] text-pink-200">
            s.call
          </code>{" "}
          waits in queue → matched with another server → you&apos;re connected.
        </p>
        <p className="font-medium text-[13px] text-muted-foreground leading-[170%] tracking-tight">
          messages relay across via webhook with your name + avatar.
        </p>
        <p className="font-medium text-[13px] text-muted-foreground leading-[170%] tracking-tight">
          <code className="rounded bg-pink-500/12 px-1.5 py-0.5 font-mono text-[12px] text-pink-200">
            s.skip
          </code>{" "}
          to swap.{" "}
          <code className="rounded bg-pink-500/12 px-1.5 py-0.5 font-mono text-[12px] text-pink-200">
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
            className="flex items-start gap-2.5 font-medium text-[13px] text-muted-foreground leading-[160%] tracking-tight"
            key={tip}
          >
            <span aria-hidden className="mt-0.5 text-pink-300">
              ✦
            </span>
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

  // close on outside click + Escape
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
      className="reveal-on-scroll cv-auto relative flex flex-col items-center gap-16 py-24 md:py-32"
      id="help"
    >
      <SectionHeading
        icon={Book02Icon}
        subtitle="paginated, dropdown-driven, and lives entirely inside discord. try the dropdown."
        title={
          <>
            a peek at <GradientText>s.help</GradientText>
          </>
        }
      />

      <div className="relative w-full max-w-2xl">
        <div
          aria-hidden="true"
          className="absolute -inset-12 -z-10"
          style={{
            background:
              "radial-gradient(ellipse at center, oklch(0.7 0.27 350 / 0.18) 0%, transparent 65%)",
          }}
        />

        {/* fake Discord message */}
        <div className="rounded-2xl border border-white/5 bg-[rgb(43_45_49)] p-5 shadow-2xl shadow-black/40">
          {/* author line */}
          <div className="flex items-center gap-3 pb-3">
            <span className="flex size-10 items-center justify-center rounded-full bg-pink-500 text-white">
              <HugeiconsIcon
                className="size-5"
                icon={Call02Icon}
                strokeWidth={2}
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

          {/* embed */}
          <div className="flex overflow-hidden rounded-md bg-[rgb(34_35_39)]">
            <div className="w-1 shrink-0 bg-pink-500" />
            <div className="flex flex-1 flex-col gap-3 p-4">
              <div className="flex items-center gap-2">
                <span className="text-pink-300">✦</span>
                <span className="font-semibold text-[14px] text-foreground tracking-tight">
                  snibcall
                </span>
                <span className="text-muted-foreground">·</span>
                <HugeiconsIcon
                  className="size-4 text-pink-200"
                  icon={active.icon}
                  strokeWidth={1.8}
                />
                <span className="font-semibold text-[14px] text-foreground tracking-tight">
                  {active.label}
                </span>
              </div>

              {/* page content — keyed so it remounts on change and triggers fade */}
              <div className="animate-[fade-in_220ms_ease-out]" key={active.id}>
                {active.body}
              </div>

              <p className="pt-1 font-mono text-[10px] text-muted-foreground/80 tracking-tight">
                page {activeIdx + 1} / {pages.length} · pick a section below ↓
              </p>
            </div>
          </div>

          {/* dropdown — interactive */}
          <div className="relative mt-2" ref={dropdownRef}>
            <button
              aria-expanded={open}
              aria-haspopup="listbox"
              className="flex w-full items-center justify-between rounded-md border border-white/5 bg-[rgb(34_35_39)] px-3 py-2.5 font-medium text-[13px] text-foreground transition-colors hover:bg-[rgb(40_41_45)]"
              onClick={() => setOpen((v) => !v)}
              type="button"
            >
              <span className="flex items-center gap-2.5">
                <HugeiconsIcon
                  className="size-4 text-pink-300"
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
              <ul className="absolute right-0 left-0 z-20 mt-1.5 flex animate-[fade-in_140ms_ease-out] flex-col gap-0.5 rounded-md border border-white/5 bg-[rgb(43_45_49)] p-1.5 shadow-2xl shadow-black/60">
                {pages.map((page, idx) => (
                  <li key={page.id}>
                    <button
                      aria-pressed={idx === activeIdx}
                      className={`flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left font-medium text-[13px] transition-colors ${
                        idx === activeIdx
                          ? "bg-pink-500/15 text-pink-100"
                          : "text-muted-foreground hover:bg-white/[0.04] hover:text-foreground"
                      }`}
                      onClick={() => {
                        setActiveIdx(idx);
                        setOpen(false);
                      }}
                      type="button"
                    >
                      <HugeiconsIcon
                        className={`size-4 ${idx === activeIdx ? "text-pink-300" : "text-muted-foreground"}`}
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

        {/* page dots underneath the embed */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {pages.map((page, idx) => (
            <button
              aria-label={`go to ${page.label}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === activeIdx
                  ? "w-8 bg-pink-400"
                  : "w-1.5 bg-white/15 hover:bg-white/30"
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
