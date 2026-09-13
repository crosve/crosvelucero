"use client";
import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CoverPage from "./CoverPage";
import GlossaryPage from "./GlossaryPage";
import PageShell from "./PageShell";
import AboutSection from "./AboutSection";
import MyExperiences from "./MyExperiences";
import ProjectsSection from "./ProjectsSection";
import BookmarkNav from "./BookmarkNav";

const TOTAL_PAGES = 5;

const variants = {
  enter: (dir: number) => ({
    rotateY: dir >= 0 ? 90 : -90,
    filter: "brightness(0.78)",
    opacity: 0.88,
  }),
  center: {
    rotateY: 0,
    filter: "brightness(1)",
    opacity: 1,
  },
  exit: (dir: number) => ({
    rotateY: dir >= 0 ? -90 : 90,
    filter: "brightness(0.78)",
    opacity: 0.88,
  }),
};

const springTransition = {
  rotateY: { type: "spring" as const, stiffness: 68, damping: 22, mass: 1.1 },
  filter: { duration: 0.62, ease: [0.65, 0, 0.35, 1] },
  opacity: { duration: 0.55, ease: [0.65, 0, 0.35, 1] },
};

export default function BookContainer() {
  const [[currentPage, direction], setPageState] = useState<[number, number]>([0, 0]);
  const touchStartX = useRef(0);

  const paginate = useCallback((newPage: number) => {
    setPageState(([curr]) => {
      if (newPage < 0 || newPage >= TOTAL_PAGES || newPage === curr) return [curr, 0];
      return [newPage, newPage > curr ? 1 : -1];
    });
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        setPageState(([curr]) => {
          if (curr >= TOTAL_PAGES - 1) return [curr, 0];
          return [curr + 1, 1];
        });
      }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        setPageState(([curr]) => {
          if (curr <= 0) return [curr, 0];
          return [curr - 1, -1];
        });
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 60) {
      setPageState(([curr]) => {
        if (diff > 0) {
          if (curr >= TOTAL_PAGES - 1) return [curr, 0];
          return [curr + 1, 1];
        } else {
          if (curr <= 0) return [curr, 0];
          return [curr - 1, -1];
        }
      });
    }
  }, []);

  const pageComponents = [
    <CoverPage key="cover" onOpen={() => paginate(1)} />,
    <GlossaryPage key="glossary" onNavigate={paginate} />,
    <PageShell key="about" chapter="I" title="About Me" pageNumber={3} onContents={() => paginate(1)}>
      <AboutSection />
    </PageShell>,
    <PageShell key="experience" chapter="II" title="Experience" pageNumber={4} onContents={() => paginate(1)}>
      <MyExperiences />
    </PageShell>,
    <PageShell key="projects" chapter="III" title="Projects" pageNumber={5} onContents={() => paginate(1)}>
      <ProjectsSection />
    </PageShell>,
  ];

  return (
    <div
      className="fixed inset-0 overflow-hidden"
      style={{ perspective: "2000px" }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence custom={direction} mode="sync">
        <motion.div
          key={currentPage}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={springTransition}
          className="absolute inset-0"
          style={{
            transformOrigin: direction >= 0 ? "left center" : "right center",
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
          }}
        >
          {pageComponents[currentPage]}
        </motion.div>
      </AnimatePresence>

      {/* Left arrow */}
      {currentPage > 0 && (
        <button
          onClick={() => paginate(currentPage - 1)}
          aria-label="Previous page"
          className="fixed left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center font-display text-3xl leading-none text-sepia/25 hover:text-sepia/60 transition-colors select-none"
        >
          ‹
        </button>
      )}

      {/* Right arrow */}
      {currentPage < TOTAL_PAGES - 1 && (
        <button
          onClick={() => paginate(currentPage + 1)}
          aria-label="Next page"
          className="fixed right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center font-display text-3xl leading-none text-sepia/25 hover:text-sepia/60 transition-colors select-none"
        >
          ›
        </button>
      )}

      {/* Page dots */}
      <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-2 items-center">
        {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
          <button
            key={i}
            onClick={() => paginate(i)}
            aria-label={`Go to page ${i + 1}`}
            className="transition-all"
            style={{
              width: i === currentPage ? "18px" : "6px",
              height: "6px",
              borderRadius: i === currentPage ? "3px" : "50%",
              backgroundColor:
                i === currentPage
                  ? "rgba(44, 26, 14, 0.55)"
                  : "rgba(44, 26, 14, 0.22)",
              boxShadow: i === currentPage
                ? "0 0 0 2px rgba(44, 26, 14, 0.10)"
                : "0 0 0 1px rgba(44, 26, 14, 0.08)",
            }}
          />
        ))}
      </div>

      <BookmarkNav currentPage={currentPage} onNavigate={paginate} />
    </div>
  );
}
