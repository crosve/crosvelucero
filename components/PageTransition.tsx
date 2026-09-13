"use client";
import React, { useRef, useEffect, ReactNode } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface RevealProps {
  children: ReactNode;
}

export const Reveal = ({ children }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div ref={ref} style={{ perspective: "700px", position: "relative" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -20, rotateX: 4 },
          visible: { opacity: 1, y: 0, rotateX: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.65, ease: [0.215, 0.61, 0.355, 1] }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
};
