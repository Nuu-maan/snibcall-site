"use client";

import {
  ArrowUpRight01Icon,
  Call02Icon,
  Cancel01Icon,
  Menu01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Button, buttonStyles } from "@/components/ui/button";

interface NavLink {
  href: string;
  label: string;
  /** For routed links, the pathname this link owns. */
  match?: string;
  /** For hash links on the home page, the section id to scroll-spy on. */
  section?: string;
}

const navLinks: NavLink[] = [
  { href: "/#features", label: "Features", section: "features" },
  { href: "/#how", label: "How it works", section: "how" },
  { href: "/commands", label: "Commands", match: "/commands" },
  { href: "/#help", label: "Help", section: "help" },
];

const HOME_SECTION_IDS = ["features", "how", "help"];

function isActive(
  pathname: string,
  link: NavLink,
  activeSection: string | null
): boolean {
  if (link.section) {
    // Hash links only get highlighted when the user is on the home page
    // AND the matching section is the one currently in view.
    return pathname === "/" && activeSection === link.section;
  }
  if (!link.match) {
    return false;
  }
  return pathname === link.match || pathname.startsWith(`${link.match}/`);
}

export function Nav() {
  const pathname = usePathname() ?? "/";
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    if (!open) {
      return;
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
      }
    }
    document.addEventListener("keydown", handleKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  // Close the mobile sheet on route change so the menu doesn't linger
  // over the new page after a link click.
  // biome-ignore lint/correctness/useExhaustiveDependencies: intentional, close on every navigation.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Scroll-spy for home-page anchor links. We track which of the named
  // sections is currently "the one being read", defined as the section
  // crossing the band between 30% and 50% from the top of the viewport.
  // That keeps the highlight from flipping every time a tall section's
  // edge brushes the very top or bottom of the screen.
  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(null);
      return;
    }
    const targets = HOME_SECTION_IDS.map((id) =>
      document.getElementById(id)
    ).filter((el): el is HTMLElement => el !== null);
    if (targets.length === 0) {
      return;
    }
    const ratios = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            ratios.set(entry.target.id, entry.intersectionRatio);
          } else {
            ratios.delete(entry.target.id);
          }
        }
        let topId: string | null = null;
        let topRatio = 0;
        for (const [id, ratio] of ratios) {
          if (ratio > topRatio) {
            topId = id;
            topRatio = ratio;
          }
        }
        setActiveSection(topId);
      },
      {
        rootMargin: "-30% 0px -50% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );
    for (const t of targets) {
      observer.observe(t);
    }
    return () => observer.disconnect();
  }, [pathname]);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="nav-scrolled sticky top-0 z-[100] w-full bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-6 px-5 py-3 sm:px-6">
        <Link
          aria-label="snibcall home"
          className="group inline-flex shrink-0 items-center gap-2.5 transition-transform duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97]"
          href="/"
          onClick={closeMenu}
        >
          <span className="relative flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-pink-500/15 ring-1 ring-pink-500/30 ring-offset-2 ring-offset-background transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:rotate-[-8deg]">
            <Image
              alt=""
              aria-hidden="true"
              className="size-8 object-cover"
              height={64}
              src="/bot.png"
              width={64}
            />
          </span>
          <span className="font-display font-medium text-[20px] text-foreground italic leading-none tracking-[-0.02em]">
            snibcall
          </span>
        </Link>

        <nav aria-label="primary" className="hidden md:block">
          <ul className="flex items-center gap-0.5 rounded-full border border-white/[0.07] bg-[oklch(0.16_0.006_30_/_0.78)] p-1 shadow-[inset_0_1px_0_oklch(1_0_0_/_0.06),0_2px_8px_-2px_oklch(0_0_0_/_0.5)] backdrop-blur-md">
            {navLinks.map((link) => {
              const active = isActive(pathname, link, activeSection);
              return (
                <li key={link.href}>
                  <Link
                    aria-current={active ? "page" : undefined}
                    className={`relative inline-flex items-center rounded-full px-3 py-1.5 font-medium text-[13px] tracking-tight transition-colors duration-200 ${
                      active
                        ? "bg-background text-foreground shadow-[inset_0_0_0_1px_oklch(1_0_0_/_0.06)]"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            className={buttonStyles({
              variant: "primary",
              size: "sm",
              className: "hidden md:inline-flex",
            })}
            href="/invite"
          >
            Add to Discord
            <HugeiconsIcon
              className="size-3.5 opacity-80 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
              icon={ArrowUpRight01Icon}
              strokeWidth={2.4}
            />
          </Link>

          <Button
            aria-controls="mobile-menu"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="md:hidden"
            onClick={() => setOpen((v) => !v)}
            size="icon"
            variant="icon"
          >
            <HugeiconsIcon
              className="size-4"
              icon={open ? Cancel01Icon : Menu01Icon}
              strokeWidth={2}
            />
          </Button>
        </div>
      </div>

      {open ? (
        <div
          className="absolute inset-x-0 top-full animate-[slide-down_220ms_cubic-bezier(0.32,0.72,0,1)] border-border/60 border-t bg-background/95 backdrop-blur-md md:hidden"
          id="mobile-menu"
        >
          <ul className="mx-auto flex w-full max-w-5xl flex-col gap-0.5 px-3 py-3 sm:px-4">
            {navLinks.map((link) => {
              const active = isActive(pathname, link, activeSection);
              return (
                <li key={link.href}>
                  <Link
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center justify-between rounded-md px-3 py-3 font-medium text-[15px] tracking-tight transition-[background-color,transform] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.98] ${
                      active
                        ? "bg-secondary text-foreground"
                        : "text-foreground/90 hover:bg-secondary hover:text-foreground"
                    }`}
                    href={link.href}
                    onClick={closeMenu}
                  >
                    {link.label}
                    {active ? (
                      <span
                        aria-hidden="true"
                        className="size-1.5 rounded-full bg-pink-500"
                      />
                    ) : null}
                  </Link>
                </li>
              );
            })}
            <li className="px-1 pt-2 pb-1">
              <Link
                className={buttonStyles({
                  variant: "primary",
                  size: "md",
                  className: "w-full",
                })}
                href="/invite"
                onClick={closeMenu}
              >
                <HugeiconsIcon
                  className="size-4"
                  icon={Call02Icon}
                  strokeWidth={2.2}
                />
                Add to Discord
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
