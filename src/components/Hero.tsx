export function Hero() {
  return (
    <header className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-forest via-forest-light to-moss">
      {/* Ambient overlays */}
      <div className="absolute inset-0 opacity-80">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_70%,rgba(196,112,75,0.15)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(107,143,107,0.2)_0%,transparent_50%)]" />
      </div>

      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-parchment leading-[1.12] tracking-tight mb-6">
          Rooted in Thirty Years of Tenderness.
        </h1>
        <p className="font-serif text-[clamp(1rem,2vw,1.25rem)] italic text-parchment/80 leading-relaxed mb-10">
          A curated collection from a lifetime spent listening to the language of leaves.
        </p>
        <a
          href="#catalog"
          className="inline-block px-8 py-3.5 bg-terracotta text-parchment text-sm font-medium tracking-wide rounded hover:bg-terracotta-dark hover:-translate-y-0.5 transition-all"
        >
          Explore the Collection
        </a>
      </div>
    </header>
  );
}
