import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Mascot is 755x907 (portrait). Scale so the head + body fill the
// 64x64 favicon nicely once the bottom is clipped by overflow.
const IMG_WIDTH = 72;
const IMG_HEIGHT = Math.round((72 * 907) / 755); // ≈ 86

export default async function Icon() {
  const data = await readFile(path.join(process.cwd(), "public", "bot.png"));
  const dataUrl = `data:image/png;base64,${data.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        background: "transparent",
        overflow: "hidden",
      }}
    >
      {/* biome-ignore lint/performance/noImgElement: Satori only supports raw img elements. */}
      <img
        alt=""
        height={IMG_HEIGHT}
        src={dataUrl}
        style={{ marginTop: -4 }}
        width={IMG_WIDTH}
      />
    </div>,
    { ...size }
  );
}
