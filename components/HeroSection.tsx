"use client";
import React from "react";
import { Link } from "react-scroll/modules";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-32">
      <div className="w-full max-w-xl mx-auto text-center px-4">

        {/* Top ornament */}
        <p className="fade-up-1 text-xs tracking-[0.35em] uppercase text-coffee font-display mb-6">
          Software Portfolio
        </p>

        {/* Decorative rule */}
        <div className="fade-up-1 flex items-center gap-3 mb-8">
          <div className="flex-1 h-px bg-sepia/25" />
          <span className="text-coffee/50 text-sm">✦</span>
          <div className="flex-1 h-px bg-sepia/25" />
        </div>

        {/* Name — serif, dignified but not oversized */}
        <h1 className="fade-up-2 font-display text-5xl md:text-6xl font-bold text-sepia leading-tight tracking-wide mb-2">
          Crosve Lucero
        </h1>

        {/* Role — italic serif */}
        <p className="fade-up-3 font-display italic text-xl text-coffee mt-4 mb-2">
          Software + AI Engineer
        </p>

        <p className="fade-up-3 text-sm text-sepia-muted tracking-widest mb-8">
          New York City, NY
        </p>

        {/* Decorative rule */}
        <div className="fade-up-3 flex items-center gap-3 mb-8">
          <div className="flex-1 h-px bg-sepia/25" />
          <span className="text-coffee/50 text-sm">✦</span>
          <div className="flex-1 h-px bg-sepia/25" />
        </div>

        {/* Brief intro */}
        <p className="fade-up-4 font-body text-sepia/70 leading-relaxed text-base md:text-lg italic max-w-md mx-auto mb-10">
          Building distributed systems and AI-powered tooling — currently at{" "}
          <span className="not-italic font-semibold text-sepia/90">Blitz Corp</span>,
          pursuing an MS at NYU.
        </p>

        {/* CTAs */}
        <div className="fade-up-5 flex gap-4 justify-center">
          <Link
            to="projects"
            className="px-6 py-2.5 border border-sepia/30 text-sepia font-display text-sm tracking-wide rounded-sm hover:bg-sepia/5 transition-colors cursor-pointer"
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
          <Link
            to="experience"
            className="px-6 py-2.5 bg-sepia text-parchment font-display text-sm tracking-wide rounded-sm hover:bg-sepia/80 transition-colors cursor-pointer"
            smooth={true}
            offset={-100}
            duration={500}
          >
            Experience
          </Link>
        </div>

        {/* Bottom scroll hint */}
        <p className="fade-up-5 text-sepia/30 text-xs tracking-widest mt-16 uppercase">
          Scroll to explore
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
