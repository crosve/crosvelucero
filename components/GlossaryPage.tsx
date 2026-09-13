"use client";

const PAGE_BACKGROUND = {
  backgroundColor: "#F2E8D0",
  backgroundImage: [
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M30 0 L60 30 L30 60 L0 30 Z' fill='none' stroke='%232C1A0E' stroke-width='0.5' stroke-opacity='0.07'/%3E%3C/svg%3E\")",
    "repeating-linear-gradient(transparent, transparent 31px, rgba(44, 26, 14, 0.04) 31px, rgba(44, 26, 14, 0.04) 32px)",
  ].join(", "),
  backgroundPositionY: "12px",
};

const ENTRIES = [
  { numeral: "I.", title: "About Me", pageNumber: 3, pageIndex: 2 },
  { numeral: "II.", title: "Experience", pageNumber: 4, pageIndex: 3 },
  { numeral: "III.", title: "Projects", pageNumber: 5, pageIndex: 4 },
];

interface Props {
  onNavigate: (page: number) => void;
}

export default function GlossaryPage({ onNavigate }: Props) {
  return (
    <div
      className="absolute inset-0 flex flex-col overflow-hidden"
      style={PAGE_BACKGROUND}
    >
      {/* Left margin rule */}
      <div
        className="absolute top-0 bottom-0 left-14 md:left-16 w-px pointer-events-none"
        style={{ backgroundColor: "rgba(139, 99, 68, 0.14)" }}
      />

      {/* Main content — centered vertically */}
      <div className="flex-1 flex items-center pl-16 md:pl-24 pr-8 md:pr-16">
        <div className="w-full max-w-lg">

          <p className="font-display text-[10px] tracking-[0.45em] uppercase text-coffee mb-4">
            Table of Contents
          </p>

          <div className="flex items-center gap-3 mb-10">
            <div className="h-px flex-1" style={{ backgroundColor: "rgba(44, 26, 14, 0.18)" }} />
            <span className="text-coffee/50 text-xs">✦</span>
            <div className="h-px flex-1" style={{ backgroundColor: "rgba(44, 26, 14, 0.18)" }} />
          </div>

          {/* TOC entries */}
          <div className="space-y-5 mb-12">
            {ENTRIES.map(({ numeral, title, pageNumber, pageIndex }) => (
              <button
                key={pageIndex}
                onClick={() => onNavigate(pageIndex)}
                className="w-full text-left group"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-sm text-sepia/40 w-8 shrink-0">
                    {numeral}
                  </span>
                  <span className="font-display text-xl md:text-2xl font-bold text-sepia group-hover:text-coffee transition-colors">
                    {title}
                  </span>
                  <span
                    className="flex-1 mx-2"
                    style={{
                      borderBottom: "1px dotted rgba(44, 26, 14, 0.20)",
                      minWidth: "2rem",
                      marginBottom: "4px",
                    }}
                  />
                  <span className="font-display italic text-sepia/40 text-sm shrink-0">
                    {pageNumber}
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1" style={{ backgroundColor: "rgba(44, 26, 14, 0.18)" }} />
            <span className="text-coffee/50 text-xs">✦</span>
            <div className="h-px flex-1" style={{ backgroundColor: "rgba(44, 26, 14, 0.18)" }} />
          </div>

          <p className="font-body italic text-sepia/35 text-sm leading-relaxed">
            A portfolio of the work of<br />
            Crosve Lucero — Software &amp; AI Engineer
          </p>

        </div>
      </div>

      {/* Footer */}
      <div
        className="shrink-0 flex items-center justify-between px-10 py-2.5"
        style={{ borderTop: "1px solid rgba(44, 26, 14, 0.06)" }}
      >
        <button
          onClick={() => onNavigate(0)}
          className="font-display text-[10px] tracking-[0.25em] uppercase text-sepia/25 hover:text-coffee/60 transition-colors"
        >
          Cover
        </button>
        <span className="font-display italic text-sepia/25 text-xs">— 2 —</span>
        <span />
      </div>
    </div>
  );
}
