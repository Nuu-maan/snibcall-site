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
import { useEffect, useState } from "react";

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: "/#features", label: "Features" },
  { href: "/#how", label: "How it works" },
  { href: "/commands", label: "Commands" },
  { href: "/#help", label: "Help" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

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

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="nav-scrolled sticky top-0 z-[100] mx-auto flex w-full max-w-5xl flex-col border-border/60 border-b bg-background/85 backdrop-blur-md">
      <nav
        aria-label="primary"
        className="flex w-full items-center justify-between gap-6 py-3"
      >
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

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                className="relative inline-flex items-center rounded-md px-3 py-1.5 font-medium text-[13.5px] text-muted-foreground tracking-tight transition-colors duration-200 after:absolute after:right-3 after:bottom-[5px] after:left-3 after:h-px after:origin-left after:scale-x-0 after:bg-pink-500/70 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.23,1,0.32,1)] after:content-[''] hover:text-foreground hover:after:scale-x-100"
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          className="group hidden shrink-0 items-center gap-1.5 rounded-full bg-pink-500 px-4 py-1.5 font-semibold text-[13px] text-white tracking-tight transition-[background-color,transform] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-pink-600 active:scale-[0.97] md:inline-flex"
          href="/invite"
        >
          Add to Discord
          <HugeiconsIcon
            className="size-3.5 opacity-80 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            icon={ArrowUpRight01Icon}
            strokeWidth={2.4}
          />
        </Link>

        <button
          aria-controls="mobile-menu"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex size-9 shrink-0 items-center justify-center rounded-md border border-border bg-card text-foreground transition-[background-color,transform] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-secondary active:scale-[0.93] md:hidden"
          onClick={() => setOpen((v) => !v)}
          type="button"
        >
          <HugeiconsIcon
            className="size-4 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)]"
            icon={open ? Cancel01Icon : Menu01Icon}
            strokeWidth={2}
          />
        </button>
      </nav>

      {open ? (
        <div
          className="absolute inset-x-0 top-full animate-[slide-down_220ms_cubic-bezier(0.32,0.72,0,1)] border-border/60 border-t bg-background/95 backdrop-blur-md md:hidden"
          id="mobile-menu"
        >
          <ul className="flex flex-col gap-0.5 p-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  className="flex items-center rounded-md px-3 py-3 font-medium text-[15px] text-foreground tracking-tight transition-[background-color,transform] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-secondary active:scale-[0.98]"
                  href={link.href}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="px-1 pt-2 pb-1">
              <Link
                className="flex w-full items-center justify-center gap-1.5 rounded-full bg-pink-500 px-4 py-2.5 font-semibold text-[14px] text-white tracking-tight transition-[background-color,transform] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-pink-600 active:scale-[0.97]"
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
