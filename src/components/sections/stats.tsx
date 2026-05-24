import { CheckmarkBadge02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const communities = [
  { name: "Lorem Hub", members: "12,184", color: "oklch(0.55 0.2 350)" },
  { name: "Ipsum Lounge", members: "684,512", color: "oklch(0.55 0.2 280)" },
  { name: "Dolor Arena", members: "294,123", color: "oklch(0.55 0.2 25)" },
  { name: "Amet Circle", members: "183,005", color: "oklch(0.55 0.2 145)" },
];

export function Stats() {
  return (
    <section className="relative flex flex-col items-center gap-12 py-20 text-center">
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -z-10 h-px w-full max-w-2xl -translate-x-1/2 bg-gradient-to-r from-transparent via-pink-500/40 to-transparent"
      />

      <div className="flex flex-col items-center gap-3">
        <p className="font-mono font-semibold text-[12px] text-pink-400 uppercase tracking-widest">
          Trusted worldwide
        </p>
        <p className="max-w-xl text-balance font-medium text-[18px] text-muted-foreground leading-[175%] tracking-tight">
          Powering{" "}
          <span className="font-semibold text-foreground">8,541,209</span> users
          across <span className="font-semibold text-foreground">2,341</span>{" "}
          communities
        </p>
      </div>

      <ul className="flex w-full flex-wrap items-center justify-center gap-x-10 gap-y-6">
        {communities.map((community) => (
          <li
            className="group flex items-center gap-3 text-left transition-transform hover:scale-105"
            key={community.name}
          >
            <span
              aria-hidden="true"
              className="flex size-12 items-center justify-center rounded-full border border-pink-500/10 font-semibold text-[16px] text-foreground tracking-tight ring-soft transition-shadow group-hover:shadow-[0_0_24px_-4px_var(--color-brand-glow)]"
              style={{
                background: `linear-gradient(135deg, ${community.color} 0%, rgb(17 18 18) 100%)`,
              }}
            >
              {community.name.charAt(0)}
            </span>
            <div className="flex flex-col">
              <span className="flex items-center gap-1.5 font-semibold text-[16px] text-foreground tracking-tight">
                {community.name}
                <HugeiconsIcon
                  className="size-4 text-pink-400"
                  icon={CheckmarkBadge02Icon}
                  strokeWidth={2}
                />
              </span>
              <span className="font-medium text-[14px] text-muted-foreground tracking-tight">
                {community.members} members
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
