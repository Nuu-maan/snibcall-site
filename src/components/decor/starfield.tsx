const starLayers = [
  "radial-gradient(1px 1px at 25px 50px, oklch(1 0 0 / 0.6), transparent 50%)",
  "radial-gradient(1px 1px at 80px 130px, oklch(1 0 0 / 0.4), transparent 50%)",
  "radial-gradient(1.5px 1.5px at 60px 80px, oklch(1 0 0 / 0.35), transparent 50%)",
  "radial-gradient(2px 2px at 130px 30px, oklch(0.82 0.16 350 / 0.7), transparent 50%)",
  "radial-gradient(1.5px 1.5px at 240px 220px, oklch(1 0 0 / 0.5), transparent 50%)",
  "radial-gradient(1px 1px at 320px 180px, oklch(0.82 0.16 350 / 0.5), transparent 50%)",
].join(", ");

const starSizes =
  "150px 200px, 220px 180px, 280px 320px, 380px 440px, 480px 520px, 600px 640px";

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
