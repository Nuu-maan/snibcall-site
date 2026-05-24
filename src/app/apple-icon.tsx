import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #E8499E 0%, #B43F88 100%)",
        color: "white",
        fontSize: 128,
        fontWeight: 700,
      }}
    >
      ✦
    </div>,
    { ...size }
  );
}
