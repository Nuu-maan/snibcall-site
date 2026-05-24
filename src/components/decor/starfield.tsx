const starLayers = [
  "radial-gradient(1px 1px at 25px 50px, oklch(1 0 0 / 0.55), transparent 50%)",
  "radial-gradient(1.5px 1.5px at 130px 30px, oklch(0.82 0.16 350 / 0.55), transparent 50%)",
  "radial-gradient(1px 1px at 240px 220px, oklch(1 0 0 / 0.4), transparent 50%)",
].join(", ");

const starSizes = "260px 280px, 380px 440px, 520px 560px";

export function Starfield() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: starLayers,
          backgroundSize: starSizes,
          backgroundRepeat: "repeat",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
    </div>
  );
}
