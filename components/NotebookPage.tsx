"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export function NotebookPage({ children, className = "" }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: -0.5, y: 20 }}
      whileInView={{ opacity: 1, rotate: 0, y: 0 }}
      transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
      viewport={{ once: true, margin: "-60px" }}
      className={`relative rounded-[2px] ${className}`}
      style={{
        boxShadow:
          "1px 4px 14px rgba(44, 26, 14, 0.10), 0 1px 3px rgba(44, 26, 14, 0.07)",
        backgroundImage:
          "repeating-linear-gradient(transparent, transparent 31px, rgba(44, 26, 14, 0.045) 31px, rgba(44, 26, 14, 0.045) 32px)",
        backgroundPositionY: "12px",
        backgroundColor: "#F2E8D0",
      }}
    >
      {/* Left margin line */}
      <div
        className="absolute top-0 bottom-0 left-12 w-px"
        style={{ backgroundColor: "rgba(139, 99, 68, 0.12)" }}
      />
      {children}
    </motion.div>
  );
}

export function SectionDivider() {
  return (
    <div className="flex items-center gap-4 my-12 px-4">
      <div className="flex-1 h-px" style={{ backgroundColor: "rgba(44, 26, 14, 0.12)" }} />
      <span className="text-coffee/40 text-xs tracking-[0.4em] uppercase font-display">
        · · ·
      </span>
      <div className="flex-1 h-px" style={{ backgroundColor: "rgba(44, 26, 14, 0.12)" }} />
    </div>
  );
}
