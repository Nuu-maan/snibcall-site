import { ImageResponse } from "next/og";

import { SITE_NAME, SITE_URL } from "@/lib/site";

export const OG_SIZE = {
  width: 1200,
  height: 630,
};

export const OG_CONTENT_TYPE = "image/png";

const PINK = "#E8499E";
const PINK_SOFT = "#F4A6CC";
const BG = "#121213";
const CARD_TOP = "#1F1F1F";
const FG = "#F5F5F5";
const MUTED = "#9A9AA0";

interface OgCardProps {
  eyebrow?: string;
  pills?: string[];
  subtitle?: string;
  title: string;
}

export function renderOgCard({
  eyebrow,
  title,
  subtitle,
  pills = [],
}: OgCardProps): ImageResponse {
  const host = new URL(SITE_URL).host;
  // long titles need to shrink to stay on one or two readable lines
  let titleFontSize = 132;
  if (title.length > 22) {
    titleFontSize = 88;
  } else if (title.length > 16) {
    titleFontSize = 108;
  }

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: BG,
        position: "relative",
        fontFamily: '"Geist Sans", "Helvetica Neue", Arial, sans-serif',
      }}
    >
      {/* warm pink radial top-right */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          background:
            "radial-gradient(ellipse 60% 50% at 100% 0%, rgba(232,73,158,0.28) 0%, transparent 70%)",
        }}
      />
      {/* soft pink radial bottom-left */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          background:
            "radial-gradient(ellipse 50% 50% at 0% 100%, rgba(232,73,158,0.14) 0%, transparent 70%)",
        }}
      />
      {/* dot grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* top bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "44px 60px 0 60px",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span
            style={{
              color: PINK_SOFT,
              fontSize: 28,
              fontWeight: 600,
              lineHeight: 1,
            }}
          >
            ✦
          </span>
          <span
            style={{
              color: FG,
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: "-0.01em",
            }}
          >
            {SITE_NAME}
          </span>
          <span
            style={{
              marginLeft: 6,
              color: PINK_SOFT,
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.16em",
              textTransform: "lowercase",
              padding: "4px 10px",
              background: "rgba(232,73,158,0.10)",
              border: "1px solid rgba(232,73,158,0.25)",
              borderRadius: 999,
            }}
          >
            v1 · beta
          </span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            color: MUTED,
            fontSize: 14,
            fontFamily: '"Geist Mono", "Menlo", monospace',
            letterSpacing: "0.06em",
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: 999,
              background: PINK,
              display: "flex",
            }}
          />
          {host}
        </div>
      </div>

      {/* center stack */}
      <div
        style={{
          position: "relative",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 80px",
          gap: 22,
        }}
      >
        {eyebrow ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 16px",
              background: "rgba(232,73,158,0.10)",
              border: "1px solid rgba(232,73,158,0.30)",
              borderRadius: 999,
              color: PINK_SOFT,
              fontSize: 16,
              fontWeight: 500,
              letterSpacing: "0.02em",
              textTransform: "lowercase",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: 999,
                background: PINK,
                display: "flex",
              }}
            />
            {eyebrow}
          </div>
        ) : null}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 28,
          }}
        >
          <span
            style={{
              color: PINK_SOFT,
              fontSize: Math.round(titleFontSize * 0.85),
              fontWeight: 600,
              lineHeight: 1,
            }}
          >
            ✦
          </span>
          <span
            style={{
              color: FG,
              fontSize: titleFontSize,
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1,
              textTransform: "lowercase",
            }}
          >
            {title}
          </span>
        </div>
        {subtitle ? (
          <div
            style={{
              display: "flex",
              color: PINK_SOFT,
              fontSize: 34,
              fontStyle: "italic",
              fontWeight: 500,
              letterSpacing: "-0.01em",
              textAlign: "center",
              maxWidth: 900,
            }}
          >
            {subtitle}
          </div>
        ) : null}
      </div>

      {/* bottom pills */}
      {pills.length > 0 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 14,
            padding: "0 60px 56px 60px",
            position: "relative",
            flexWrap: "wrap",
          }}
        >
          {pills.map((label) => (
            <span
              key={label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 18px",
                borderRadius: 999,
                background: CARD_TOP,
                border: "1px solid rgba(232,73,158,0.18)",
                color: PINK_SOFT,
                fontSize: 16,
                fontWeight: 500,
                letterSpacing: "-0.005em",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: 999,
                  background: PINK,
                  display: "flex",
                }}
              />
              {label}
            </span>
          ))}
        </div>
      ) : (
        <div style={{ display: "flex", height: 56 }} />
      )}

      {/* top hairline */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          display: "flex",
          background:
            "linear-gradient(90deg, transparent 0%, rgba(232,73,158,0.65) 50%, transparent 100%)",
        }}
      />
    </div>,
    { ...OG_SIZE }
  );
}
