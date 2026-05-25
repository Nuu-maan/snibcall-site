import { ImageResponse } from "next/og";

import { SITE_NAME, SITE_URL } from "@/lib/site";

export const OG_SIZE = {
  width: 1200,
  height: 630,
};

export const OG_CONTENT_TYPE = "image/png";

const PINK = "#E8499E";
const BG = "#0A0A0B";
const CARD = "#111113";
const BORDER = "#1F1F23";
const FG = "#FAFAFA";
const MUTED = "#8A8A90";

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
  let titleFontSize = 128;
  if (title.length > 22) {
    titleFontSize = 84;
  } else if (title.length > 16) {
    titleFontSize = 104;
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
              width: 32,
              height: 32,
              borderRadius: 8,
              background: PINK,
              color: FG,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: "-0.04em",
            }}
          >
            s
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
              color: MUTED,
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "4px 10px",
              background: CARD,
              border: `1px solid ${BORDER}`,
              borderRadius: 6,
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
            letterSpacing: "0.04em",
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

      <div
        style={{
          position: "relative",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "0 60px",
          gap: 24,
        }}
      >
        {eyebrow ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 14px",
              background: CARD,
              border: `1px solid ${BORDER}`,
              borderRadius: 999,
              color: MUTED,
              fontSize: 15,
              fontWeight: 500,
              letterSpacing: "0.02em",
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
          }}
        >
          <span
            style={{
              color: FG,
              fontSize: titleFontSize,
              fontWeight: 600,
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}
          >
            {title}
          </span>
        </div>
        {subtitle ? (
          <div
            style={{
              display: "flex",
              color: MUTED,
              fontSize: 28,
              fontWeight: 400,
              letterSpacing: "-0.01em",
              maxWidth: 900,
              lineHeight: 1.35,
            }}
          >
            {subtitle}
          </div>
        ) : null}
      </div>

      {pills.length > 0 ? (
        <div
          style={{
            display: "flex",
            gap: 10,
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
                padding: "8px 14px",
                borderRadius: 6,
                background: CARD,
                border: `1px solid ${BORDER}`,
                color: MUTED,
                fontSize: 15,
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

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 1,
          display: "flex",
          background: BORDER,
        }}
      />
    </div>,
    { ...OG_SIZE }
  );
}
