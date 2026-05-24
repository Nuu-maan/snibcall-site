import type { Metadata } from "next";

import { Starfield } from "@/components/decor/starfield";
import { Footer } from "@/components/sections/footer";
import { Nav } from "@/components/sections/nav";
import { PrivacyPanel } from "@/components/sections/privacy-panel";

export const metadata: Metadata = {
  title: "privacy — snibcall",
  description:
    "snibcall never stores your messages, never tracks you, and never shares anything. the long version is here.",
};

export default function PrivacyPage() {
  return (
    <>
      <Starfield />
      <main className="relative mx-auto w-full max-w-4xl px-6">
        <Nav />
        <PrivacyPanel />
      </main>
      <Footer />
    </>
  );
}
