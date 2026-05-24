"use client";

import {
  Activity03Icon,
  ArrowLeft02Icon,
  Call02Icon,
  Cancel01Icon,
  CheckmarkBadge02Icon,
  Copy01Icon,
  EyeIcon,
  FavouriteIcon,
  HelpCircleIcon,
  IncognitoIcon,
  PhoneOff01Icon,
  Search01Icon,
  Shield01Icon,
  SkipForward,
  Tick02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import Link from "next/link";
import { useMemo, useState } from "react";

type Category = "calling" | "social" | "moderation" | "misc";

interface Command {
  aliases: string[];
  category: Category;
  cooldown: string;
  description: string;
  icon: IconSvgElement;
  name: string;
  needs: string[];
  usage: string;
}

const commands: Command[] = [
  {
    name: "s.call",
    aliases: ["s.c"],
    category: "calling",
    icon: Call02Icon,
    description:
      "start a call. queues this channel; pairs when another server runs s.call.",
    usage: "s.call",
    cooldown: "5s",
    needs: ["manage webhooks", "send messages", "embed links", "read history"],
  },
  {
    name: "s.skip",
    aliases: ["s.s"],
    category: "calling",
    icon: SkipForward,
    description: "end the current call and immediately search for a new one.",
    usage: "s.skip",
    cooldown: "5s",
    needs: [],
  },
  {
    name: "s.hangup",
    aliases: ["s.h", "s.leave", "s.end"],
    category: "calling",
    icon: PhoneOff01Icon,
    description: "end the call quietly. if only queued, cancels the wait.",
    usage: "s.hangup",
    cooldown: "2s",
    needs: [],
  },
  {
    name: "s.friend",
    aliases: ["s.fr", "s.addme"],
    category: "social",
    icon: FavouriteIcon,
    description:
      "share your discord handle with the other side as a friend request.",
    usage: "s.fr",
    cooldown: "10s",
    needs: ["must be in a call"],
  },
  {
    name: "s.mask",
    aliases: ["s.anon"],
    category: "social",
    icon: IncognitoIcon,
    description:
      "hide your name and avatar — turn anonymous. run again to reroll a new identity.",
    usage: "s.mask",
    cooldown: "5s",
    needs: [],
  },
  {
    name: "s.unmask",
    aliases: [],
    category: "social",
    icon: EyeIcon,
    description:
      "remove your mask. your messages appear with your real name + avatar again.",
    usage: "s.unmask",
    cooldown: "3s",
    needs: [],
  },
  {
    name: "s.block",
    aliases: [],
    category: "moderation",
    icon: Shield01Icon,
    description:
      "block another server from matching with yours. with no arg, blocks the current call partner.",
    usage: "s.block [serverId]",
    cooldown: "3s",
    needs: ["manage server"],
  },
  {
    name: "s.unblock",
    aliases: [],
    category: "moderation",
    icon: Cancel01Icon,
    description: "remove a server from the block list.",
    usage: "s.unblock <serverId>",
    cooldown: "3s",
    needs: ["manage server"],
  },
  {
    name: "s.blocks",
    aliases: ["s.blocklist"],
    category: "moderation",
    icon: CheckmarkBadge02Icon,
    description: "list every server your server has blocked.",
    usage: "s.blocks",
    cooldown: "3s",
    needs: ["manage server"],
  },
  {
    name: "s.help",
    aliases: ["s.commands"],
    category: "misc",
    icon: HelpCircleIcon,
    description: "show the help menu, or a detailed page for one command.",
    usage: "s.help [command]",
    cooldown: "3s",
    needs: [],
  },
  {
    name: "s.ping",
    aliases: ["s.p"],
    category: "misc",
    icon: Activity03Icon,
    description:
      "tiny health check — gateway latency and how long the bot has been up.",
    usage: "s.ping",
    cooldown: "3s",
    needs: [],
  },
];

const categoryMeta: Record<
  Category,
  { accent: string; description: string; label: string }
> = {
  calling: {
    label: "calling",
    description: "start, skip, or end calls",
    accent: "oklch(0.72 0.24 350)",
  },
  social: {
    label: "social",
    description: "connect with the other side",
    accent: "oklch(0.7 0.18 195)",
  },
  moderation: {
    label: "moderation",
    description: "control who can match with your server",
    accent: "oklch(0.7 0.18 35)",
  },
  misc: {
    label: "misc",
    description: "everything else",
    accent: "oklch(0.7 0.18 295)",
  },
};

const filters: { id: Category | "all"; label: string }[] = [
  { id: "all", label: "all" },
  { id: "calling", label: "calling" },
  { id: "social", label: "social" },
  { id: "moderation", label: "moderation" },
  { id: "misc", label: "misc" },
];

function CommandCard({ command }: { command: Command }) {
  const [copied, setCopied] = useState(false);
  const meta = categoryMeta[command.category];

  async function handleCopy() {
    await navigator.clipboard.writeText(command.usage);
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  }

  return (
    <article
      className="group relative flex flex-col gap-4 overflow-hidden rounded-3xl border border-border bg-card-tinted p-6 ring-pink-soft transition-colors duration-300 hover:border-pink-500/30"
      style={{ borderLeftWidth: "3px", borderLeftColor: `${meta.accent}` }}
    >
      <div
        aria-hidden="true"
        className="absolute -top-px right-12 left-12 h-px bg-gradient-to-r from-transparent via-pink-400/40 to-transparent opacity-60"
      />

      <header className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span
            className="flex size-11 shrink-0 items-center justify-center rounded-2xl ring-soft"
            style={{
              background: `linear-gradient(135deg, ${meta.accent}33 0%, ${meta.accent}11 100%)`,
              color: meta.accent,
            }}
          >
            <HugeiconsIcon
              className="size-5"
              icon={command.icon}
              strokeWidth={1.8}
            />
          </span>
          <div className="flex flex-col">
            <code className="font-mono font-semibold text-[18px] text-foreground tracking-tight">
              {command.name}
            </code>
            {command.aliases.length > 0 ? (
              <span className="font-medium text-[11px] text-muted-foreground tracking-tight">
                alias{command.aliases.length > 1 ? "es" : ""}{" "}
                {command.aliases.map((a, i) => (
                  <span key={a}>
                    <code className="rounded bg-white/[0.04] px-1.5 py-0.5 font-mono text-[10px] text-pink-200">
                      {a}
                    </code>
                    {i < command.aliases.length - 1 ? " · " : ""}
                  </span>
                ))}
              </span>
            ) : (
              <span className="font-medium text-[11px] text-muted-foreground/60 italic tracking-tight">
                no aliases
              </span>
            )}
          </div>
        </div>

        <span
          className="rounded-full border px-2.5 py-0.5 font-mono font-semibold text-[10px] tracking-wider"
          style={{
            background: `${meta.accent}15`,
            borderColor: `${meta.accent}40`,
            color: meta.accent,
          }}
        >
          {command.category}
        </span>
      </header>

      <p className="font-medium text-[14px] text-muted-foreground leading-[170%] tracking-tight">
        {command.description}
      </p>

      <div className="flex flex-col gap-2.5 border-white/5 border-t pt-4">
        {/* usage row */}
        <div className="flex items-center justify-between gap-2">
          <span className="font-mono font-semibold text-[10px] text-muted-foreground/60 uppercase tracking-[0.18em]">
            usage
          </span>
          <button
            aria-label={copied ? "copied" : "copy usage"}
            className="group/copy inline-flex items-center gap-2 rounded-md border border-white/5 bg-secondary/60 px-3 py-1.5 font-mono text-[12px] text-foreground transition-colors hover:border-pink-500/30 active:scale-[0.97]"
            onClick={handleCopy}
            type="button"
          >
            <span className="text-pink-300">{">"}</span>
            <span className="font-semibold text-pink-200">{command.usage}</span>
            <HugeiconsIcon
              className={`size-3.5 transition-colors ${copied ? "text-pink-300" : "text-muted-foreground group-hover/copy:text-pink-300"}`}
              icon={copied ? Tick02Icon : Copy01Icon}
              strokeWidth={2}
            />
          </button>
        </div>

        {/* cooldown row */}
        <div className="flex items-center justify-between gap-2">
          <span className="font-mono font-semibold text-[10px] text-muted-foreground/60 uppercase tracking-[0.18em]">
            cooldown
          </span>
          <span className="rounded-md border border-white/5 bg-secondary/60 px-2.5 py-1 font-mono font-semibold text-[12px] text-foreground tabular-nums">
            {command.cooldown}
          </span>
        </div>

        {/* needs row */}
        {command.needs.length > 0 ? (
          <div className="flex flex-col gap-1.5">
            <span className="font-mono font-semibold text-[10px] text-muted-foreground/60 uppercase tracking-[0.18em]">
              needs
            </span>
            <div className="flex flex-wrap gap-1.5">
              {command.needs.map((perm) => (
                <span
                  className="inline-flex items-center gap-1 rounded-full border border-pink-500/15 bg-pink-500/8 px-2 py-0.5 font-medium text-[11px] text-pink-200 lowercase tracking-tight"
                  key={perm}
                >
                  <HugeiconsIcon
                    className="size-2.5"
                    icon={CheckmarkBadge02Icon}
                    strokeWidth={2.4}
                  />
                  {perm}
                </span>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </article>
  );
}

export function CommandsExplorer() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<Category | "all">("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return commands.filter((cmd) => {
      const matchesCategory =
        activeFilter === "all" || cmd.category === activeFilter;
      const matchesQuery =
        !q ||
        cmd.name.toLowerCase().includes(q) ||
        cmd.description.toLowerCase().includes(q) ||
        cmd.aliases.some((a) => a.toLowerCase().includes(q)) ||
        cmd.needs.some((n) => n.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });
  }, [query, activeFilter]);

  const grouped = useMemo(() => {
    const map = new Map<Category, Command[]>();
    for (const cmd of filtered) {
      if (!map.has(cmd.category)) {
        map.set(cmd.category, []);
      }
      map.get(cmd.category)?.push(cmd);
    }
    return map;
  }, [filtered]);

  return (
    <>
      {/* Header */}
      <section className="relative flex flex-col items-center gap-7 py-20 text-center md:py-24">
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
          <span className="size-1.5 animate-status-pulse rounded-full bg-pink-400" />
          <span className="tabular-nums">{commands.length}</span> commands · 4
          categories · prefix{" "}
          <code className="font-mono font-semibold">s.</code>
        </div>

        <h1 className="font-bold text-[44px] text-foreground lowercase leading-[105%] tracking-tight md:text-[64px]">
          <span className="text-pink-300">✦</span> commands
        </h1>

        <p className="max-w-xl text-pretty font-medium text-[16px] text-muted-foreground leading-[175%] tracking-tight">
          every command snibcall knows, grouped by what it does. click any usage
          snippet to copy it. type to search by name, description, or
          permission.
        </p>

        {/* Search input */}
        <div className="relative w-full max-w-md">
          <HugeiconsIcon
            className="absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground"
            icon={Search01Icon}
            strokeWidth={2}
          />
          <input
            aria-label="search commands"
            className="w-full rounded-full border border-border bg-card py-3 pr-10 pl-11 font-medium text-[14px] text-foreground ring-soft placeholder:text-muted-foreground/60 focus:border-pink-500/50 focus:outline-none focus:ring-2 focus:ring-pink-500/20"
            onChange={(e) => setQuery(e.target.value)}
            placeholder="search commands…"
            type="text"
            value={query}
          />
          {query ? (
            <button
              aria-label="clear search"
              className="absolute top-1/2 right-3 inline-flex size-7 -translate-y-1/2 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-white/[0.06] hover:text-foreground"
              onClick={() => setQuery("")}
              type="button"
            >
              <HugeiconsIcon
                className="size-4"
                icon={Cancel01Icon}
                strokeWidth={2}
              />
            </button>
          ) : null}
        </div>

        {/* Filter chips */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 font-medium text-[12px] lowercase tracking-tight transition-all duration-200 ${
                  isActive
                    ? "border-pink-500/40 bg-pink-500/15 text-pink-100"
                    : "border-border bg-card text-muted-foreground hover:border-pink-500/20 hover:text-pink-200"
                }`}
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                type="button"
              >
                {filter.label}
                <span
                  className={`tabular-nums ${isActive ? "text-pink-200/80" : "text-muted-foreground/60"}`}
                >
                  {filter.id === "all"
                    ? commands.length
                    : commands.filter((c) => c.category === filter.id).length}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Grouped command cards */}
      <section className="flex flex-col gap-14 pb-24">
        {grouped.size === 0 ? (
          <div className="flex flex-col items-center gap-3 rounded-3xl border border-border border-dashed bg-card/40 px-8 py-20 text-center">
            <HugeiconsIcon
              className="size-8 text-muted-foreground/60"
              icon={Search01Icon}
              strokeWidth={1.5}
            />
            <p className="font-medium text-[15px] text-foreground tracking-tight">
              no commands match{" "}
              <code className="rounded bg-pink-500/10 px-1.5 py-0.5 font-mono text-[13px] text-pink-200">
                {query || activeFilter}
              </code>
            </p>
            <button
              className="font-medium text-[13px] text-pink-300 underline-offset-4 hover:underline"
              onClick={() => {
                setQuery("");
                setActiveFilter("all");
              }}
              type="button"
            >
              clear filters
            </button>
          </div>
        ) : (
          [...grouped.entries()].map(([category, cmds]) => {
            const meta = categoryMeta[category];
            return (
              <div className="flex flex-col gap-5" key={category}>
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="size-2 rounded-full"
                    style={{ background: meta.accent }}
                  />
                  <h2 className="font-semibold text-[20px] text-foreground lowercase tracking-tight">
                    {meta.label}
                  </h2>
                  <span className="font-medium text-[13px] text-muted-foreground lowercase tracking-tight">
                    — {meta.description}
                  </span>
                  <span
                    aria-hidden="true"
                    className="ml-auto h-px flex-1"
                    style={{
                      background: `linear-gradient(90deg, ${meta.accent}40 0%, transparent 100%)`,
                    }}
                  />
                  <span className="font-mono font-semibold text-[11px] text-muted-foreground/70 tabular-nums tracking-wider">
                    {cmds.length.toString().padStart(2, "0")}
                  </span>
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  {cmds.map((cmd) => (
                    <CommandCard command={cmd} key={cmd.name} />
                  ))}
                </div>
              </div>
            );
          })
        )}
      </section>
    </>
  );
}
