import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Mascot fitted with a bit of pink padding around it so the strawberry
// hood and pink phone read clearly on iOS home screens.
const IMG_WIDTH = 156;
const IMG_HEIGHT = Math.round((156 * 907) / 755); // ≈ 187

export default async function AppleIcon() {
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
        background: "#E8499E",
        borderRadius: 40,
        overflow: "hidden",
      }}
    >
      {/* biome-ignore lint/performance/noImgElement: Satori only supports raw img elements. */}
      <img
        alt=""
        height={IMG_HEIGHT}
        src={dataUrl}
        style={{ marginTop: 8 }}
        width={IMG_WIDTH}
      />
    </div>,
    { ...size }
  );
}
