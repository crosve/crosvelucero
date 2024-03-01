"use client";
import React, { useEffect, useRef, ReactNode } from "react";

import { motion, useAnimation } from "framer-motion";

interface Props {
  offset?: string;
  children?: ReactNode;
}

export default function SlideUp({ children, offset = "0px" }: Props) {
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
              transition: { duration: 0.5, ease: "easeOut" },
            });
          }
        });
      },
      { rootMargin: offset }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [ref]);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 35, opacity: 0 }}
      animate={controls}
      className="relative"
    >
      {children}
    </motion.div>
  );
}
