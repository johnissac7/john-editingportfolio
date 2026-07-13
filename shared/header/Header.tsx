"use client";

import React, { useState, useEffect } from "react";
import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      data-scrolled={isScrolled}
      /* - Stays flat, pinned to the top, and spans full-bleed (w-full).
        - Uses a razor-thin border-b with ultra-low opacity black.
        - Changes background from transparent/semi-translucent to slightly denser on scroll.
      */
      className="group/header fixed top-0 left-0 w-full z-50 select-none bg-[#F2EFF0]/60 backdrop-blur-md border-b border-black/[0.04] transition-all duration-300 ease-out [transform:translateZ(0)]
        h-[76px] data-[scrolled=true]:h-[64px] data-[scrolled=true]:bg-[#F2EFF0]/90 data-[scrolled=true]:backdrop-blur-xl"
    >
      <div className="w-full h-full max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
        <DesktopNav
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      </div>

      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
    </header>
  );
};