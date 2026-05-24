import { OG_CONTENT_TYPE, OG_SIZE, renderOgCard } from "@/lib/og-card";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export const alt = `${SITE_NAME} — ${SITE_TAGLINE}`;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function TwitterImage() {
  return renderOgCard({
    title: "snibcall",
    subtitle: "a tiny phone for your server.",
    pills: [
      "cross-server calls",
      "webhook identity",
      "anonymous masks",
      "free forever",
    ],
  });
}
