import type { Metadata } from "next";

import { Starfield } from "@/components/decor/starfield";
import { CommandsExplorer } from "@/components/sections/commands-explorer";
import { Footer } from "@/components/sections/footer";
import { Nav } from "@/components/sections/nav";

export const metadata: Metadata = {
  title: "commands — snibcall",
  description:
    "every command snibcall knows. searchable, copyable, grouped by what it does.",
};

export default function CommandsPage() {
  return (
    <>
      <Starfield />
      <main className="relative mx-auto w-full max-w-5xl px-6">
        <Nav />
        <CommandsExplorer />
      </main>
      <Footer />
    </>
  );
}
