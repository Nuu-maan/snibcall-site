import { ArrowRight02Icon, Call02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: "/#features", label: "features" },
  { href: "/#how", label: "how it works" },
  { href: "/commands", label: "commands" },
  { href: "/#help", label: "help" },
];

export function Nav() {
  return (
    <header className="sticky top-5 z-[100] mx-auto flex w-full max-w-5xl justify-center px-6">
      {/* Floating pill */}
      <div className="relative w-full max-w-3xl">
        {/* soft drop shadow / glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-x-2 -bottom-2 -z-10 h-12 rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, oklch(0 0 0 / 0.5) 0%, transparent 70%), radial-gradient(ellipse at center, oklch(0.7 0.27 350 / 0.1) 0%, transparent 60%)",
            filter: "blur(8px)",
          }}
        />

        <nav
          aria-label="primary"
          className="relative flex items-center justify-between gap-3 rounded-full border border-white/8 bg-[rgb(24_24_25)] py-2 pr-2 pl-5"
        >
          {/* Logo */}
          <Link className="group flex shrink-0 items-baseline gap-1.5" href="/">
            <span
              aria-hidden="true"
              className="font-semibold text-[20px] text-pink-300 leading-none transition-colors group-hover:text-pink-200"
            >
              ✧
            </span>
            <span className="font-semibold text-[15px] text-foreground tracking-tight">
              snibcall
            </span>
          </Link>

          {/* Separator */}
          <span
            aria-hidden="true"
            className="hidden h-5 w-px bg-white/8 md:block"
          />

          {/* Center links */}
          <ul className="hidden flex-1 items-center justify-center gap-0.5 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  className="relative inline-flex items-center rounded-full px-3 py-1.5 font-medium text-[13px] text-muted-foreground tracking-tight transition-colors duration-200 hover:bg-pink-500/8 hover:text-pink-100"
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Separator */}
          <span
            aria-hidden="true"
            className="hidden h-5 w-px bg-white/8 md:block"
          />

          {/* Invite CTA */}
          <Link
            className="group inline-flex shrink-0 items-center gap-1.5 rounded-full bg-pink-500 px-4 py-1.5 font-semibold text-[13px] text-white tracking-tight transition-transform hover:scale-[1.04] active:scale-[0.97]"
            href="/invite"
          >
            <HugeiconsIcon
              className="size-3.5"
              icon={Call02Icon}
              strokeWidth={2.4}
            />
            invite
            <HugeiconsIcon
              className="size-3 opacity-70 transition-transform duration-300 group-hover:translate-x-0.5"
              icon={ArrowRight02Icon}
              strokeWidth={2.4}
            />
          </Link>
        </nav>
      </div>
    </header>
  );
}
