import type { Metadata } from "next";

import { CommandsExplorer } from "@/components/sections/commands-explorer";
import { Footer } from "@/components/sections/footer";
import { Nav } from "@/components/sections/nav";

const TITLE = "commands";
const DESCRIPTION =
  "every command snibcall knows — searchable, copyable, grouped by category. calling, social, moderation, misc.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/commands" },
  openGraph: {
    title: `${TITLE} — snibcall`,
    description: DESCRIPTION,
    url: "/commands",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} — snibcall`,
    description: DESCRIPTION,
  },
};

export default function CommandsPage() {
  return (
    <>
      <main className="relative mx-auto w-full max-w-5xl px-5 sm:px-6">
        <Nav />
        <CommandsExplorer />
      </main>
      <Footer />
    </>
  );
}
