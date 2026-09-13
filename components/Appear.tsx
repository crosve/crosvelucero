"use client";
import React, { useEffect, useRef, ReactNode } from "react";
import { motion, useAnimation } from "framer-motion";

interface Props {
  offset?: string;
  children?: ReactNode;
}

export default function Appear({ children, offset = "0px" }: Props) {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start({
              y: 0,
              opacity: 1,
              rotateX: 0,
              transition: { duration: 0.75, ease: [0.215, 0.61, 0.355, 1] },
            });
          }
        });
      },
      { rootMargin: offset }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [ref, controls, offset]);

  return (
    <div style={{ perspective: "700px" }}>
      <motion.div
        ref={ref}
        initial={{ y: 28, opacity: 0, rotateX: -5 }}
        animate={controls}
        className="relative"
      >
        {children}
      </motion.div>
    </div>
  );
}
