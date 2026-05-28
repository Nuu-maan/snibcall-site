import { OG_CONTENT_TYPE, OG_SIZE, renderOgCard } from "@/lib/og-card";

export const alt = "snibcall · terms of service";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function TwitterImage() {
  return renderOgCard({
    eyebrow: "rules of the road",
    title: "terms",
    subtitle:
      "what we offer, what you can do with it, and what we expect in return.",
    pills: ["plain words", "no loopholes", "free to use", "kick anytime"],
  });
}
