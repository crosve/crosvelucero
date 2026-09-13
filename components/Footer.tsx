import React from "react";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl mt-8 mb-10">
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 h-px" style={{ backgroundColor: "rgba(44, 26, 14, 0.12)" }} />
        <span className="font-display text-xs tracking-[0.4em] text-coffee/40 uppercase">
          · · ·
        </span>
        <div className="flex-1 h-px" style={{ backgroundColor: "rgba(44, 26, 14, 0.12)" }} />
      </div>

      <div className="flex flex-col text-center md:flex-row md:justify-between md:items-center gap-3">
        <p className="font-display italic text-sm text-sepia/35">
          © 2025 Crosve Lucero
        </p>
        <div className="flex flex-row items-center justify-center gap-3">
          <a href="https://github.com/crosve" rel="noreferrer" target="_blank">
            <AiOutlineGithub
              className="transition-transform hover:-translate-y-0.5 cursor-pointer"
              style={{ color: "rgba(44, 26, 14, 0.45)" }}
              size={24}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/crosve-lucero-04a057274/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="transition-transform hover:-translate-y-0.5 cursor-pointer"
              style={{ color: "rgba(44, 26, 14, 0.45)" }}
              size={24}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
