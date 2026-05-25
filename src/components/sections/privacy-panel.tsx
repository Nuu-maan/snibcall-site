import {
  ArrowLeft02Icon,
  ArrowUpRight01Icon,
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

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5">
      <span
        aria-hidden
        className="mt-2 size-1 shrink-0 rounded-full bg-pink-500"
      />
      <span>{children}</span>
    </li>
  );
}

const sections: PolicySection[] = [
  {
    id: "what-we-store",
    icon: Book02Icon,
    title: "What snibcall stores",
    body: (
      <>
        <p>Only the bare minimum needed to make calls work:</p>
        <ul className="mt-3 flex flex-col gap-2.5">
          <Bullet>
            <strong className="text-foreground">Server IDs</strong> of channels
            currently queued or in a call, while the call is live.
          </Bullet>
          <Bullet>
            <strong className="text-foreground">Block-list entries</strong> —
            the server IDs your admins have blocked. These survive restarts.
          </Bullet>
          <Bullet>
            <strong className="text-foreground">Basic operational logs</strong>{" "}
            — command names, timestamps, error traces. Used to debug crashes.
          </Bullet>
        </ul>
      </>
    ),
  },
  {
    id: "what-we-dont",
    icon: Cancel01Icon,
    title: "What it doesn't store",
    body: (
      <ul className="flex flex-col gap-2.5">
        <Bullet>
          <strong className="text-foreground">Message contents.</strong>{" "}
          Messages are relayed in-flight via webhook and immediately discarded —
          never written to disk.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Your Discord profile</strong> — no
          avatars, usernames, or IDs stored. The webhook uses them at the moment
          of relay and forgets them.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Analytics, ads, trackers.</strong>{" "}
          None. Ever.
        </Bullet>
      </ul>
    ),
  },
  {
    id: "who-sees",
    icon: UserMultipleIcon,
    title: "Who can see your data",
    body: (
      <>
        <p>
          The bot operator (the person hosting snibcall) has access to the
          operational logs and block-list database. Nobody else.
        </p>
        <p className="mt-3">
          We do <strong className="text-foreground">not</strong> share, sell, or
          otherwise hand off data to third parties. There are no third parties.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    icon: TimeQuarter02Icon,
    title: "How long it's kept",
    body: (
      <ul className="flex flex-col gap-2.5">
        <Bullet>
          <strong className="text-foreground">Call state</strong> — wiped the
          moment a call ends, hangs up, or times out (5 min of silence).
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Block-list</strong> — kept until
          an admin runs{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[12px] text-foreground">
            s.unblock
          </code>
          , or the bot is removed from the server.
        </Bullet>
        <Bullet>
          <strong className="text-foreground">Operational logs</strong> —
          rotated after 14 days.
        </Bullet>
      </ul>
    ),
  },
  {
    id: "rights",
    icon: Shield01Icon,
    title: "Your rights",
    body: (
      <>
        <p>At any time you can:</p>
        <ul className="mt-3 flex flex-col gap-2.5">
          <Bullet>
            Kick snibcall from your server — its presence is the only thing
            tying anything to your server.
          </Bullet>
          <Bullet>
            Ask the operator to wipe your server&apos;s block-list and any logs
            that reference it — see the contact card below.
          </Bullet>
          <Bullet>Revoke any permission Discord granted, anytime.</Bullet>
        </ul>
      </>
    ),
  },
  {
    id: "changes",
    icon: BubbleChatIcon,
    title: "Changes to this policy",
    body: (
      <p>
        If this page changes, the &ldquo;last updated&rdquo; date below changes
        too. Material changes get announced in the support server before they
        take effect.
      </p>
    ),
  },
];

export function PrivacyPanel() {
  return (
    <>
      <section className="relative flex flex-col items-start gap-5 py-20 md:py-28">
        <Link
          className="reveal-on-scroll group inline-flex items-center gap-1.5 font-medium text-[12px] text-muted-foreground tracking-tight transition-colors hover:text-foreground"
          href="/"
        >
          <HugeiconsIcon
            className="size-3.5 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-x-0.5"
            icon={ArrowLeft02Icon}
            strokeWidth={2}
          />
          Back to home
        </Link>

        <div className="reveal-on-scroll inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-medium text-[11.5px] text-muted-foreground tracking-tight">
          <HugeiconsIcon
            className="size-3.5 text-pink-500"
            icon={Shield01Icon}
            strokeWidth={2}
          />
          Last updated ·{" "}
          <span className="font-mono tabular-nums">{LAST_UPDATED}</span>
        </div>

        <h1 className="reveal-up-lg font-normal text-[48px] text-foreground leading-[1.05] tracking-[-0.03em] md:text-[64px]">
          Privacy
        </h1>

        <p className="reveal-on-scroll-1 max-w-xl text-[15.5px] text-muted-foreground leading-[1.65] sm:text-[16px]">
          The short version: snibcall never stores your messages, never tracks
          you, and never shares anything. The long version is below.
        </p>
      </section>

      <section className="border-border/60 border-t py-12">
        <div className="reveal-scale rounded-xl border border-border bg-card p-6 md:p-8">
          <div className="flex items-start gap-4">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-md border border-border bg-background text-foreground">
              <HugeiconsIcon
                className="size-4.5"
                icon={CheckmarkBadge02Icon}
                strokeWidth={1.8}
              />
            </span>
            <div className="flex flex-col gap-3">
              <h2 className="font-sans font-semibold text-[18px] text-foreground tracking-[-0.01em]">
                The short version
              </h2>
              <ul className="flex flex-col gap-2 text-[14px] text-muted-foreground leading-[1.65]">
                <Bullet>
                  Messages relay in-flight — they are never saved.
                </Bullet>
                <Bullet>
                  Only your block-list and basic logs are persisted.
                </Bullet>
                <Bullet>
                  Nothing is shared with third parties. There aren&apos;t any.
                </Bullet>
                <Bullet>
                  Kick the bot at any time — that&apos;s the off switch.
                </Bullet>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-6 border-border/60 border-t py-12 pb-16">
        {sections.map((section, idx) => (
          <article
            className={`flex flex-col gap-4 rounded-xl border border-border bg-card p-6 md:p-8 ${
              idx % 2 === 0 ? "reveal-left" : "reveal-right"
            }`}
            id={section.id}
            key={section.id}
          >
            <header className="flex items-center gap-3">
              <span className="display-numeral text-[24px] text-pink-500 leading-none">
                {(idx + 1).toString().padStart(2, "0")}
              </span>
              <span className="flex size-8 items-center justify-center rounded-md border border-border bg-background text-foreground">
                <HugeiconsIcon
                  className="size-4"
                  icon={section.icon}
                  strokeWidth={1.8}
                />
              </span>
              <h2 className="font-sans font-semibold text-[17px] text-foreground tracking-[-0.01em]">
                {section.title}
              </h2>
            </header>
            <div className="flex flex-col gap-2 text-[14px] text-muted-foreground leading-[1.7]">
              {section.body}
            </div>
          </article>
        ))}
      </section>

      <section className="border-border/60 border-t py-12 pb-20">
        <div className="reveal-scale rounded-xl border border-border bg-card p-6 md:p-8">
          <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
            <div className="flex items-start gap-4">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-md border border-border bg-background text-foreground">
                <HugeiconsIcon
                  className="size-4.5"
                  icon={HelpCircleIcon}
                  strokeWidth={1.8}
                />
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="font-sans font-semibold text-[15.5px] text-foreground tracking-[-0.01em]">
                  Questions, removal requests, or anything else?
                </h3>
                <p className="max-w-md text-[13.5px] text-muted-foreground leading-[1.65]">
                  Open a ticket in the support server — the operator reads
                  everything personally.
                </p>
              </div>
            </div>
            <a
              className="group inline-flex shrink-0 items-center gap-1.5 rounded-md border border-border bg-background px-4 py-2 font-semibold text-[13.5px] text-foreground tracking-tight transition-[background-color,transform] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-secondary active:scale-[0.97]"
              href={SUPPORT_URL}
              rel="noopener"
              target="_blank"
            >
              Join support server
              <HugeiconsIcon
                className="size-3.5 opacity-70 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                icon={ArrowUpRight01Icon}
                strokeWidth={2.2}
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
