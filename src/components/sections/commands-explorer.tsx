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
      "Start a call. Queues this channel; pairs when another server runs s.call.",
    usage: "s.call",
    cooldown: "5s",
    needs: ["manage webhooks", "send messages", "embed links", "read history"],
  },
  {
    name: "s.skip",
    aliases: ["s.s"],
    category: "calling",
    icon: SkipForward,
    description: "End the current call and immediately search for a new one.",
    usage: "s.skip",
    cooldown: "5s",
    needs: [],
  },
  {
    name: "s.hangup",
    aliases: ["s.h", "s.leave", "s.end"],
    category: "calling",
    icon: PhoneOff01Icon,
    description: "End the call quietly. If only queued, cancels the wait.",
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
      "Share your Discord handle with the other side as a friend request.",
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
      "Hide your name and avatar — turn anonymous. Run again to reroll a new identity.",
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
      "Remove your mask. Your messages appear with your real name and avatar again.",
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
      "Block another server from matching with yours. With no arg, blocks the current call partner.",
    usage: "s.block [serverId]",
    cooldown: "3s",
    needs: ["manage server"],
  },
  {
    name: "s.unblock",
    aliases: [],
    category: "moderation",
    icon: Cancel01Icon,
    description: "Remove a server from the block list.",
    usage: "s.unblock <serverId>",
    cooldown: "3s",
    needs: ["manage server"],
  },
  {
    name: "s.blocks",
    aliases: ["s.blocklist"],
    category: "moderation",
    icon: CheckmarkBadge02Icon,
    description: "List every server your server has blocked.",
    usage: "s.blocks",
    cooldown: "3s",
    needs: ["manage server"],
  },
  {
    name: "s.help",
    aliases: ["s.commands"],
    category: "misc",
    icon: HelpCircleIcon,
    description: "Show the help menu, or a detailed page for one command.",
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
      "Tiny health check — gateway latency and how long the bot has been up.",
    usage: "s.ping",
    cooldown: "3s",
    needs: [],
  },
];

const categoryMeta: Record<Category, { description: string; label: string }> = {
  calling: {
    label: "Calling",
    description: "Start, skip, or end calls",
  },
  social: {
    label: "Social",
    description: "Connect with the other side",
  },
  moderation: {
    label: "Moderation",
    description: "Control who can match with your server",
  },
  misc: {
    label: "Misc",
    description: "Everything else",
  },
};

const filters: { id: Category | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "calling", label: "Calling" },
  { id: "social", label: "Social" },
  { id: "moderation", label: "Moderation" },
  { id: "misc", label: "Misc" },
];

function CommandCard({ command }: { command: Command }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(command.usage);
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  }

  return (
    <article className="flex flex-col gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-border/100">
      <header className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-md border border-border bg-background text-foreground">
            <HugeiconsIcon
              className="size-4.5"
              icon={command.icon}
              strokeWidth={1.8}
            />
          </span>
          <div className="flex flex-col">
            <code className="font-mono font-semibold text-[17px] text-foreground tracking-tight">
              {command.name}
            </code>
            {command.aliases.length > 0 ? (
              <span className="text-[11.5px] text-muted-foreground tracking-tight">
                Alias{command.aliases.length > 1 ? "es" : ""}{" "}
                {command.aliases.map((a, i) => (
                  <span key={a}>
                    <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[10.5px] text-muted-foreground">
                      {a}
                    </code>
                    {i < command.aliases.length - 1 ? " · " : ""}
                  </span>
                ))}
              </span>
            ) : (
              <span className="text-[11.5px] text-muted-foreground/70 tracking-tight">
                No aliases
              </span>
            )}
          </div>
        </div>

        <span className="rounded-md border border-border bg-background px-2 py-0.5 font-mono text-[10px] text-muted-foreground tracking-wider">
          {command.category}
        </span>
      </header>

      <p className="text-[13.5px] text-muted-foreground leading-[1.65]">
        {command.description}
      </p>

      <div className="flex flex-col gap-2 border-border/60 border-t pt-4">
        <div className="flex items-center justify-between gap-2">
          <span className="font-mono font-semibold text-[10px] text-muted-foreground/80 uppercase tracking-[0.18em]">
            Usage
          </span>
          <button
            aria-label={copied ? "copied" : "copy usage"}
            className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-2.5 py-1 font-mono text-[12px] text-foreground transition-colors hover:bg-secondary"
            onClick={handleCopy}
            type="button"
          >
            <span className="text-muted-foreground">$</span>
            <span className="font-semibold">{command.usage}</span>
            <HugeiconsIcon
              className={`size-3.5 transition-colors ${copied ? "text-pink-500" : "text-muted-foreground"}`}
              icon={copied ? Tick02Icon : Copy01Icon}
              strokeWidth={2}
            />
          </button>
        </div>

        <div className="flex items-center justify-between gap-2">
          <span className="font-mono font-semibold text-[10px] text-muted-foreground/80 uppercase tracking-[0.18em]">
            Cooldown
          </span>
          <span className="rounded-md border border-border bg-background px-2 py-0.5 font-mono font-semibold text-[12px] text-foreground tabular-nums">
            {command.cooldown}
          </span>
        </div>

        {command.needs.length > 0 ? (
          <div className="flex flex-col gap-1.5 pt-1">
            <span className="font-mono font-semibold text-[10px] text-muted-foreground/80 uppercase tracking-[0.18em]">
              Needs
            </span>
            <div className="flex flex-wrap gap-1.5">
              {command.needs.map((perm) => (
                <span
                  className="inline-flex items-center rounded-md border border-border bg-background px-2 py-0.5 text-[11px] text-muted-foreground tracking-tight"
                  key={perm}
                >
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
      <section className="relative flex flex-col items-start gap-5 py-20 md:py-24">
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
          <span className="relative flex size-1.5">
            <span
              aria-hidden="true"
              className="absolute inset-0 animate-ping-ring rounded-full bg-pink-500"
            />
            <span className="relative size-1.5 animate-status-pulse rounded-full bg-pink-500" />
          </span>
          <span className="tabular-nums">{commands.length}</span> commands · 4
          categories · prefix{" "}
          <code className="font-mono font-semibold text-foreground">s.</code>
        </div>

        <h1 className="reveal-up-lg font-normal text-[48px] text-foreground leading-[1.05] tracking-[-0.03em] md:text-[64px]">
          Commands
        </h1>

        <p className="reveal-on-scroll-1 max-w-xl text-[15.5px] text-muted-foreground leading-[1.65] sm:text-[16px]">
          Every command snibcall knows, grouped by what it does. Click any usage
          snippet to copy it. Type to search by name, description, or
          permission.
        </p>

        <div className="reveal-on-scroll-2 relative w-full max-w-md">
          <HugeiconsIcon
            className="absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted-foreground"
            icon={Search01Icon}
            strokeWidth={2}
          />
          <input
            aria-label="search commands"
            className="w-full rounded-md border border-border bg-card py-2.5 pr-10 pl-10 font-medium text-[13.5px] text-foreground placeholder:text-muted-foreground/70 focus:border-pink-500/60 focus:outline-none focus:ring-2 focus:ring-pink-500/20"
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search commands…"
            type="text"
            value={query}
          />
          {query ? (
            <button
              aria-label="clear search"
              className="absolute top-1/2 right-2 inline-flex size-7 -translate-y-1/2 items-center justify-center rounded text-muted-foreground transition-[background-color,transform,color] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-secondary hover:text-foreground active:scale-[0.93]"
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

        <div className="reveal-on-scroll-3 flex flex-wrap items-center gap-1.5">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.id;
            const count =
              filter.id === "all"
                ? commands.length
                : commands.filter((c) => c.category === filter.id).length;
            return (
              <button
                className={`inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 font-medium text-[12.5px] tracking-tight transition-[background-color,border-color,color,transform] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97] ${
                  isActive
                    ? "border-border bg-secondary text-foreground"
                    : "border-border bg-card text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                type="button"
              >
                {filter.label}
                <span className="text-muted-foreground/70 tabular-nums">
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      <section className="flex flex-col gap-12 border-border/60 border-t pt-12 pb-24">
        {grouped.size === 0 ? (
          <div className="reveal-scale flex flex-col items-center gap-3 rounded-xl border border-border border-dashed bg-card/40 px-8 py-20 text-center">
            <HugeiconsIcon
              className="size-7 text-muted-foreground/70"
              icon={Search01Icon}
              strokeWidth={1.5}
            />
            <p className="text-[14.5px] text-foreground tracking-tight">
              No commands match{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px] text-foreground">
                {query || activeFilter}
              </code>
            </p>
            <button
              className="text-[13px] text-pink-500 underline-offset-4 hover:underline"
              onClick={() => {
                setQuery("");
                setActiveFilter("all");
              }}
              type="button"
            >
              Clear filters
            </button>
          </div>
        ) : (
          [...grouped.entries()].map(([category, cmds]) => {
            const meta = categoryMeta[category];
            return (
              <div className="flex flex-col gap-5" key={category}>
                <div className="reveal-on-scroll flex items-baseline gap-3">
                  <h2 className="font-sans font-semibold text-[18px] text-foreground tracking-[-0.01em]">
                    {meta.label}
                  </h2>
                  <span className="text-[13px] text-muted-foreground tracking-tight">
                    {meta.description}
                  </span>
                  <span className="ml-auto font-mono font-semibold text-[11px] text-muted-foreground tabular-nums tracking-wider">
                    {cmds.length.toString().padStart(2, "0")}
                  </span>
                </div>
                <div
                  className="grid gap-4 md:grid-cols-2"
                  data-reveal-stagger="60"
                >
                  {cmds.map((cmd) => (
                    <div className="reveal-on-scroll" key={cmd.name}>
                      <CommandCard command={cmd} />
                    </div>
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
