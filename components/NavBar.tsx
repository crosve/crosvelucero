"use client";
import React, { useState } from "react";
import { Link } from "react-scroll/modules";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { Reveal } from "./PageTransition";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  { label: "Home", page: "home" },
  { label: "About", page: "about" },
  { label: "Experience", page: "experience" },
  { label: "Projects", page: "projects" },
];

const reloadPage = () => {
  window.location.reload();
};

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <header
      className="w-full mx-auto px-4 sm:px-20 fixed top-0 z-50"
      style={{
        backgroundColor: "rgba(237, 224, 196, 0.92)",
        backdropFilter: "blur(6px)",
        borderBottom: "1px solid rgba(44, 26, 14, 0.10)",
        boxShadow: "0 1px 8px rgba(44, 26, 14, 0.06)",
      }}
    >
      <Reveal>
        <div className="justify-between md:items-center md:flex">
          <div>
            <div className="flex items-center justify-between py-3 md:py-4 md:block">
              <Link to="home" className="cursor-pointer">
                <h1
                  onClick={reloadPage}
                  className="font-display text-xl font-bold text-sepia cursor-pointer tracking-wide"
                >
                  Crosve Lucero
                </h1>
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-sepia rounded-md"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? <IoMdClose size={26} /> : <IoMdMenu size={26} />}
                </button>
              </div>
            </div>
          </div>

          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <div className="items-center justify-center space-y-6 md:flex md:space-x-8 md:space-y-0">
                {NAV_ITEMS.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.page}
                    className="block lg:inline-block font-display text-sm tracking-widest uppercase text-sepia/50 cursor-pointer text-center hover:text-sepia transition-colors"
                    activeClass="!text-sepia"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setNavbar(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </header>
  );
}
