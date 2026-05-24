import { OG_CONTENT_TYPE, OG_SIZE, renderOgCard } from "@/lib/og-card";

export const alt = "add snibcall to your discord server";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function TwitterImage() {
  return renderOgCard({
    eyebrow: "one click away",
    title: "invite snibcall",
    subtitle: "add a tiny phone to your server. opens discord.",
    pills: ["free", "no card", "no signup", "revocable any time"],
  });
}
