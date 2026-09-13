"use client";

interface Props {
  onOpen: () => void;
}

export default function CoverPage({ onOpen }: Props) {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center"
      style={{
        backgroundColor: "#EAD9B8",
        backgroundImage: [
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M30 0 L60 30 L30 60 L0 30 Z' fill='none' stroke='%232C1A0E' stroke-width='0.5' stroke-opacity='0.09'/%3E%3C/svg%3E\")",
          "radial-gradient(ellipse at 20% 30%, rgba(120, 78, 28, 0.18) 0%, transparent 48%)",
          "radial-gradient(ellipse at 78% 70%, rgba(100, 62, 18, 0.14) 0%, transparent 42%)",
        ].join(", "),
      }}
    >
      {/* Ornamental frame */}
      <div
        className="absolute inset-6 md:inset-10 pointer-events-none rounded-[2px]"
        style={{
          border: "1px solid rgba(44, 26, 14, 0.18)",
          boxShadow: "inset 0 0 0 4px rgba(44, 26, 14, 0.06), inset 0 0 0 6px rgba(44, 26, 14, 0.03)",
        }}
      />
      {/* Inner frame line */}
      <div
        className="absolute inset-8 md:inset-12 pointer-events-none rounded-[1px]"
        style={{ border: "0.5px solid rgba(44, 26, 14, 0.10)" }}
      />

      {/* Content */}
      <div className="relative text-center px-8 max-w-lg">

        <p className="fade-up-1 font-display text-[10px] tracking-[0.45em] uppercase text-coffee mb-8">
          Vol. I &nbsp;·&nbsp; 2025
        </p>

        <div className="fade-up-1 flex items-center gap-4 mb-8">
          <div className="flex-1 h-px" style={{ backgroundColor: "rgba(44, 26, 14, 0.2)" }} />
          <span className="text-coffee/50 text-xs">✦</span>
          <div className="flex-1 h-px" style={{ backgroundColor: "rgba(44, 26, 14, 0.2)" }} />
        </div>

        <h1 className="fade-up-2 font-display text-4xl sm:text-5xl md:text-6xl font-bold text-sepia tracking-wide leading-tight mb-3">
          Crosve Lucero
        </h1>

        <p className="fade-up-3 font-display italic text-xl md:text-2xl text-coffee mt-3 mb-1">
          Software + AI Engineer
        </p>

        <p className="fade-up-3 font-display text-xs tracking-widest text-sepia/40 mb-8">
          New York City, NY
        </p>

        <div className="fade-up-3 flex items-center gap-4 mb-10">
          <div className="flex-1 h-px" style={{ backgroundColor: "rgba(44, 26, 14, 0.2)" }} />
          <span className="text-coffee/50 text-xs">✦</span>
          <div className="flex-1 h-px" style={{ backgroundColor: "rgba(44, 26, 14, 0.2)" }} />
        </div>

        <button
          onClick={onOpen}
          className="fade-up-4 font-display text-sm tracking-[0.2em] uppercase px-8 py-3 text-sepia border border-sepia/25 hover:bg-sepia/5 hover:border-sepia/40 transition-all rounded-[2px] cursor-pointer"
        >
          Open Book →
        </button>

        <p className="fade-up-5 font-body italic text-sepia/25 text-xs mt-6 tracking-wide">
          or press → to begin
        </p>
      </div>
    </div>
  );
}
