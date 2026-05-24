import {
  ArrowLeft02Icon,
  ArrowRight02Icon,
  Book02Icon,
  BubbleChatIcon,
  Cancel01Icon,
  CheckmarkBadge02Icon,
  HelpCircleIcon,
  Shield01Icon,
  TimeQuarter02Icon,
  UserMultipleIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import Link from "next/link";

const SUPPORT_URL = "https://discord.gg/As8TbHwhhP";
const LAST_UPDATED = "2026-05-25";

interface PolicySection {
  body: React.ReactNode;
  icon: IconSvgElement;
  id: string;
  title: string;
}

const sections: PolicySection[] = [
  {
    id: "what-we-store",
    icon: Book02Icon,
    title: "what snibcall stores",
    body: (
      <>
        <p>only the bare minimum needed to make calls work:</p>
        <ul className="mt-3 flex flex-col gap-2.5">
          <li className="flex items-start gap-2.5">
            <span
              aria-hidden
              className="mt-1.5 size-1.5 shrink-0 rounded-full bg-pink-400"
            />
            <span>
              <strong className="text-foreground">server ids</strong> of
              channels currently queued or in a call, while the call is live.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span
              aria-hidden
              className="mt-1.5 size-1.5 shrink-0 rounded-full bg-pink-400"
            />
            <span>
              <strong className="text-foreground">block-list entries</strong> —
              the server ids your admins have blocked. these survive restarts.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span
              aria-hidden
              className="mt-1.5 size-1.5 shrink-0 rounded-full bg-pink-400"
            />
            <span>
              <strong className="text-foreground">
                basic operational logs
              </strong>{" "}
              — command names, timestamps, error traces. used to debug crashes.
            </span>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "what-we-dont",
    icon: Cancel01Icon,
    title: "what it doesn't store",
    body: (
      <ul className="flex flex-col gap-2.5">
        <li className="flex items-start gap-2.5">
          <span
            aria-hidden
            className="mt-1.5 size-1.5 shrink-0 rounded-full bg-pink-400"
          />
          <span>
            <strong className="text-foreground">message contents.</strong>{" "}
            messages are relayed in-flight via webhook and immediately discarded
            — never written to disk.
          </span>
        </li>
        <li className="flex items-start gap-2.5">
          <span
            aria-hidden
            className="mt-1.5 size-1.5 shrink-0 rounded-full bg-pink-400"
          />
          <span>
            <strong className="text-foreground">your discord profile</strong> —
            no avatars, usernames, or ids stored. the webhook uses them at the
            moment of relay and forgets them.
          </span>
        </li>
        <li className="flex items-start gap-2.5">
          <span
            aria-hidden
            className="mt-1.5 size-1.5 shrink-0 rounded-full bg-pink-400"
          />
          <span>
            <strong className="text-foreground">
              analytics, ads, trackers.
            </strong>{" "}
            none. ever.
          </span>
        </li>
      </ul>
    ),
  },
  {
    id: "who-sees",
    icon: UserMultipleIcon,
    title: "who can see your data",
    body: (
      <>
        <p>
          the bot operator (the person hosting snibcall) has access to the
          operational logs and block-list database. nobody else.
        </p>
        <p className="mt-3">
          we do <strong className="text-foreground">not</strong> share, sell, or
          otherwise hand off data to third parties. there are no third parties.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    icon: TimeQuarter02Icon,
    title: "how long it's kept",
    body: (
      <ul className="flex flex-col gap-2.5">
        <li className="flex items-start gap-2.5">
          <span
            aria-hidden
            className="mt-1.5 size-1.5 shrink-0 rounded-full bg-pink-400"
          />
          <span>
            <strong className="text-foreground">call state</strong> — wiped the
            moment a call ends, hangs up, or times out (5 min of silence).
          </span>
        </li>
        <li className="flex items-start gap-2.5">
          <span
            aria-hidden
            className="mt-1.5 size-1.5 shrink-0 rounded-full bg-pink-400"
          />
          <span>
            <strong className="text-foreground">block-list</strong> — kept until
            an admin runs{" "}
            <code className="rounded bg-pink-500/12 px-1.5 py-0.5 font-mono text-[12px] text-pink-200">
              s.unblock
            </code>
            , or the bot is removed from the server.
          </span>
        </li>
        <li className="flex items-start gap-2.5">
          <span
            aria-hidden
            className="mt-1.5 size-1.5 shrink-0 rounded-full bg-pink-400"
          />
          <span>
            <strong className="text-foreground">operational logs</strong> —
            rotated after 14 days.
          </span>
        </li>
      </ul>
    ),
  },
  {
    id: "rights",
    icon: Shield01Icon,
    title: "your rights",
    body: (
      <>
        <p>at any time you can:</p>
        <ul className="mt-3 flex flex-col gap-2.5">
          <li className="flex items-start gap-2.5">
            <span
              aria-hidden
              className="mt-1.5 size-1.5 shrink-0 rounded-full bg-pink-400"
            />
            <span>
              kick snibcall from your server — its presence is the only thing
              tying anything to your server.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span
              aria-hidden
              className="mt-1.5 size-1.5 shrink-0 rounded-full bg-pink-400"
            />
            <span>
              ask the operator to wipe your server&apos;s block-list and any
              logs that reference it — see the contact card below.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span
              aria-hidden
              className="mt-1.5 size-1.5 shrink-0 rounded-full bg-pink-400"
            />
            <span>revoke any permission discord granted, anytime.</span>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "changes",
    icon: BubbleChatIcon,
    title: "changes to this policy",
    body: (
      <p>
        if this page changes, the &ldquo;last updated&rdquo; date below changes
        too. material changes get announced in the support server before they
        take effect.
      </p>
    ),
  },
];

export function PrivacyPanel() {
  return (
    <>
      {/* Header */}
      <section className="relative flex flex-col items-center gap-6 py-16 text-center md:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-1/2 -z-10 h-[24rem] w-[36rem] -translate-x-1/2"
          style={{
            background:
              "radial-gradient(ellipse at center top, oklch(0.7 0.27 350 / 0.18) 0%, transparent 60%)",
          }}
        />

        <Link
          className="inline-flex items-center gap-1.5 font-medium text-[12px] text-muted-foreground tracking-tight transition-colors hover:text-pink-200"
          href="/"
        >
          <HugeiconsIcon
            className="size-3.5"
            icon={ArrowLeft02Icon}
            strokeWidth={2}
          />
          back to home
        </Link>

        <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-1.5 font-medium text-[12px] text-pink-200 tracking-tight ring-soft">
          <HugeiconsIcon
            className="size-3.5"
            icon={Shield01Icon}
            strokeWidth={2}
          />
          last updated ·{" "}
          <span className="font-mono tabular-nums">{LAST_UPDATED}</span>
        </div>

        <h1 className="font-bold text-[44px] text-foreground lowercase leading-[105%] tracking-tight md:text-[56px]">
          privacy
        </h1>

        <p className="max-w-xl text-pretty font-medium text-[16px] text-muted-foreground leading-[175%] tracking-tight">
          the short version: snibcall never stores your messages, never tracks
          you, and never shares anything. the long version is below.
        </p>
      </section>

      {/* TL;DR card */}
      <section className="pb-10">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card-tinted p-6 ring-pink-soft md:p-8">
          <div
            aria-hidden="true"
            className="absolute -top-px right-16 left-16 h-px bg-gradient-to-r from-transparent via-pink-400/40 to-transparent"
          />
          <div className="flex items-start gap-4">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-pink-500/20 bg-pink-500/10 text-pink-200 ring-soft">
              <HugeiconsIcon
                className="size-5"
                icon={CheckmarkBadge02Icon}
                strokeWidth={1.8}
              />
            </span>
            <div className="flex flex-col gap-3">
              <h2 className="font-semibold text-[18px] text-foreground lowercase tracking-tight">
                the short version
              </h2>
              <ul className="flex flex-col gap-2 text-[14px] text-muted-foreground leading-[170%] tracking-tight">
                <li className="flex items-start gap-2.5">
                  <span
                    aria-hidden
                    className="mt-1.5 size-1.5 shrink-0 rounded-full bg-pink-400"
                  />
                  <span>messages relay in-flight — they are never saved.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span
                    aria-hidden
                    className="mt-1.5 size-1.5 shrink-0 rounded-full bg-pink-400"
                  />
                  <span>
                    only your block-list and basic logs are persisted.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span
                    aria-hidden
                    className="mt-1.5 size-1.5 shrink-0 rounded-full bg-pink-400"
                  />
                  <span>
                    nothing is shared with third parties. there aren&apos;t any.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span
                    aria-hidden
                    className="mt-1.5 size-1.5 shrink-0 rounded-full bg-pink-400"
                  />
                  <span>
                    kick the bot at any time — that&apos;s the off switch.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Full sections */}
      <section className="flex flex-col gap-10 pb-16">
        {sections.map((section, idx) => (
          <article
            className="relative flex flex-col gap-4 rounded-3xl border border-border bg-card-tinted p-6 ring-pink-soft md:p-8"
            id={section.id}
            key={section.id}
          >
            <div
              aria-hidden="true"
              className="absolute -top-px right-16 left-16 h-px bg-gradient-to-r from-transparent via-pink-400/40 to-transparent opacity-60"
            />
            <header className="flex items-center gap-3">
              <span className="font-mono font-semibold text-[11px] text-pink-300 tabular-nums tracking-[0.2em]">
                {(idx + 1).toString().padStart(2, "0")}
              </span>
              <span className="flex size-10 items-center justify-center rounded-xl border border-pink-500/15 bg-pink-500/8 text-pink-200">
                <HugeiconsIcon
                  className="size-4"
                  icon={section.icon}
                  strokeWidth={1.8}
                />
              </span>
              <h2 className="font-semibold text-[18px] text-foreground lowercase tracking-tight">
                {section.title}
              </h2>
            </header>
            <div className="flex flex-col gap-2 font-medium text-[14px] text-muted-foreground leading-[175%] tracking-tight">
              {section.body}
            </div>
          </article>
        ))}
      </section>

      {/* Contact card */}
      <section className="pb-20">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card-tinted p-6 ring-pink-soft md:p-8">
          <div
            aria-hidden="true"
            className="absolute -top-px right-16 left-16 h-px bg-gradient-to-r from-transparent via-pink-400/40 to-transparent"
          />
          <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
            <div className="flex items-start gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-pink-500/20 bg-pink-500/10 text-pink-200 ring-soft">
                <HugeiconsIcon
                  className="size-5"
                  icon={HelpCircleIcon}
                  strokeWidth={1.8}
                />
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-[16px] text-foreground lowercase tracking-tight">
                  questions, removal requests, or anything else?
                </h3>
                <p className="max-w-md font-medium text-[14px] text-muted-foreground leading-[170%] tracking-tight">
                  open a ticket in the support server — the operator reads
                  everything personally.
                </p>
              </div>
            </div>
            <a
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-5 py-2.5 font-semibold text-[14px] text-pink-100 tracking-tight transition-colors hover:border-pink-500/50 hover:bg-pink-500/15 active:scale-[0.97]"
              href={SUPPORT_URL}
              rel="noopener"
              target="_blank"
            >
              <HugeiconsIcon
                className="size-4"
                icon={HelpCircleIcon}
                strokeWidth={2}
              />
              join support server
              <HugeiconsIcon
                className="size-3.5 opacity-70"
                icon={ArrowRight02Icon}
                strokeWidth={2.2}
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
