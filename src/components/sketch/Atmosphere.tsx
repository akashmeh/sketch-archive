/** Global CRT atmosphere: grain, scanlines, vignette. Purely decorative. */
export function Atmosphere() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-50">
      <div className="scanlines absolute inset-0 opacity-30 mix-blend-multiply" />
      <div className="grain absolute inset-0 opacity-[0.09] mix-blend-overlay" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 52%, oklch(0.08 0.01 48 / 0.85) 100%)",
        }}
      />
    </div>
  );
}

export function SectionLabel({ index, children }: { index: string; children: string }) {
  return (
    <div className="flex items-center gap-4 text-primary">
      <span className="mono-label">{index}</span>
      <span className="h-px w-10 bg-primary" />
      <span className="mono-label text-muted-foreground">{children}</span>
    </div>
  );
}
