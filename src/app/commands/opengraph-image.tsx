import { OG_CONTENT_TYPE, OG_SIZE, renderOgCard } from "@/lib/og-card";

export const alt = "snibcall commands — every command, in one place";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpengraphImage() {
  return renderOgCard({
    eyebrow: "11 commands · 4 categories",
    title: "commands",
    subtitle: "every command snibcall knows, grouped by what it does.",
    pills: ["s.call", "s.mask", "s.friend", "s.block", "s.ping"],
  });
}
