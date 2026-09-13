"use client";
import { ReactNode } from "react";

const PAGE_BACKGROUND = {
  backgroundColor: "#F2E8D0",
  backgroundImage: [
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M30 0 L60 30 L30 60 L0 30 Z' fill='none' stroke='%232C1A0E' stroke-width='0.5' stroke-opacity='0.07'/%3E%3C/svg%3E\")",
    "repeating-linear-gradient(transparent, transparent 31px, rgba(44, 26, 14, 0.04) 31px, rgba(44, 26, 14, 0.04) 32px)",
  ].join(", "),
  backgroundPositionY: "12px",
};

interface Props {
  chapter: string;
  title: string;
  pageNumber: number;
  children: ReactNode;
  id?: string;
  onContents?: () => void;
}

export default function PageShell({ chapter, title, pageNumber, children, id, onContents }: Props) {
  return (
    <div
      id={id}
      className="absolute inset-0 flex flex-col overflow-hidden"
      style={PAGE_BACKGROUND}
    >
      {/* Left margin rule */}
      <div
        className="absolute top-0 bottom-0 left-14 md:left-16 w-px pointer-events-none"
        style={{ backgroundColor: "rgba(139, 99, 68, 0.14)" }}
      />

      {/* Chapter header */}
      <div className="pl-16 md:pl-20 pr-6 md:pr-10 pt-8 pb-4 shrink-0">
        <p className="font-display text-[10px] tracking-[0.35em] uppercase text-coffee mb-1">
          Chapter {chapter}
        </p>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-sepia leading-tight">
          {title}
        </h2>
        <hr className="w-8 h-0.5 mt-3 bg-coffee/40 border-0" />
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto pl-16 md:pl-20 pr-6 md:pr-10 pb-4 min-h-0">
        {children}
      </div>

      {/* Footer bar: page number + contents link */}
      <div
        className="shrink-0 flex items-center justify-between px-10 py-2.5"
        style={{ borderTop: "1px solid rgba(44, 26, 14, 0.06)" }}
      >
        {onContents ? (
          <button
            onClick={onContents}
            className="font-display text-[10px] tracking-[0.25em] uppercase text-sepia/25 hover:text-coffee/60 transition-colors"
          >
            Contents
          </button>
        ) : (
          <span />
        )}
        <span className="font-display italic text-sepia/25 text-xs">
          — {pageNumber} —
        </span>
        <span />
      </div>
    </div>
  );
}
