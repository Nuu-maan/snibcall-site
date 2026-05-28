import { OG_CONTENT_TYPE, OG_SIZE, renderOgCard } from "@/lib/og-card";

export const alt = "snibcall privacy · what we store, in plain words";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function TwitterImage() {
  return renderOgCard({
    eyebrow: "plain-language policy",
    title: "privacy",
    subtitle: "never stores messages. never tracks you. never shares anything.",
    pills: ["no messages saved", "no analytics", "no third parties"],
  });
}
