"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PAGES = [
  { label: "Cover",      short: "Cover", index: 0 },
  { label: "Contents",   short: "Cont.", index: 1 },
  { label: "About Me",   short: "I",     index: 2 },
  { label: "Experience", short: "II",    index: 3 },
  { label: "Projects",   short: "III",   index: 4 },
];

interface Props {
  currentPage: number;
  onNavigate: (page: number) => void;
}

export default function BookmarkNav({ currentPage, onNavigate }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setIsOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const go = (index: number) => { onNavigate(index); setIsOpen(false); };

  return (
    <>
      {/* Backdrop — closes dropdown on outside click */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-30"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Dropdown header — slides from top */}
      <AnimatePresence>
        {isOpen && (
          <motion.header
            key="header"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", stiffness: 340, damping: 34 }}
            className="fixed top-0 left-0 right-0 z-40 h-11 flex items-center px-4 md:px-10 gap-4"
            style={{
              backgroundColor: "rgba(234, 217, 184, 0.98)",
              backdropFilter: "blur(12px)",
              borderBottom: "1px solid rgba(44, 26, 14, 0.09)",
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M30 0 L60 30 L30 60 L0 30 Z' fill='none' stroke='%232C1A0E' stroke-width='0.4' stroke-opacity='0.06'/%3E%3C/svg%3E\")",
            }}
          >
            <span className="font-display italic text-[11px] text-sepia/35 tracking-wide shrink-0 hidden sm:block">
              C.L.
            </span>
            <div
              className="hidden sm:block w-px h-4 shrink-0"
              style={{ backgroundColor: "rgba(44, 26, 14, 0.12)" }}
            />
            <nav className="flex items-center gap-0.5">
              {PAGES.map(({ label, short, index }) => {
                const active = currentPage === index;
                return (
                  <button
                    key={index}
                    onClick={() => go(index)}
                    title={label}
                    className="relative px-2.5 md:px-3 py-1 font-display text-[11px] md:text-xs tracking-wide transition-colors rounded-[2px]"
                    style={{
                      color: active ? "#8B6344" : "rgba(44, 26, 14, 0.40)",
                      fontWeight: active ? "600" : "400",
                      backgroundColor: active ? "rgba(139, 99, 68, 0.07)" : "transparent",
                    }}
                  >
                    <span className="hidden md:inline">{label}</span>
                    <span className="md:hidden">{short}</span>
                    {active && (
                      <span
                        className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                        style={{ backgroundColor: "rgba(139, 99, 68, 0.55)" }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Toggle button — always visible at top-right */}
      <button
        onClick={() => setIsOpen((o) => !o)}
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        className="fixed top-2.5 right-3 md:right-5 z-50 flex flex-col justify-center gap-[5px] p-2 rounded-[3px] transition-colors"
        style={{
          backgroundColor: isOpen ? "rgba(139, 99, 68, 0.10)" : "transparent",
        }}
      >
        <motion.span
          animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          className="block w-4 h-px origin-center"
          style={{ backgroundColor: "rgba(44, 26, 14, 0.45)" }}
        />
        <motion.span
          animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.15 }}
          className="block w-4 h-px"
          style={{ backgroundColor: "rgba(44, 26, 14, 0.45)" }}
        />
        <motion.span
          animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          className="block w-4 h-px origin-center"
          style={{ backgroundColor: "rgba(44, 26, 14, 0.45)" }}
        />
      </button>
    </>
  );
}
