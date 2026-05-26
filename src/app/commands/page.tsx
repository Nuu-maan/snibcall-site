import type { Metadata } from "next";

import { CommandsExplorer } from "@/components/sections/commands-explorer";

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
  return <CommandsExplorer />;
}
