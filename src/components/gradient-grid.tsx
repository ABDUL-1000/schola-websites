export function GradientGrid() {
  return (
    <>
      {/* Radial Gradient Background from Bottom */}
      <div
        className="fixed inset-0 z-[-1] pointer-events-none"
        style={{
          background:
            'radial-gradient(125% 125% at 50% 90%, var(--background) 40%, var(--gradient-primary) 100%)',
        }}
      />

      {/* Geometric Grid Background */}
      <div
        className="fixed inset-0 z-[-1] pointer-events-none opacity-60"
        style={{
          backgroundImage: `
              linear-gradient(to right, var(--border) 1px, transparent 1px),
              linear-gradient(to bottom, var(--border) 1px, transparent 1px)
            `,
          backgroundSize: '20px 30px',
          WebkitMaskImage:
            'radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)',
          maskImage:
            'radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)',
        }}
      />
    </>
  )
}
