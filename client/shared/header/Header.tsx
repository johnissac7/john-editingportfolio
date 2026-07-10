"use client";

import React, { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";
import DesktopNav from "./DesktopNav";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
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
      /* 
        ULTRA-SLIM HEIGHT MATRIX:
        - Initial: h-[52px] (Sleek capsule bar)
        - Scrolled: data-[scrolled=true]:h-[44px] (Razor-thin frame)
      */
      className="group/header fixed inset-x-0 mx-auto z-50 select-none w-[92vw] max-w-7xl rounded-full border border-black/[0.04] bg-[#ECE8E9]/70 backdrop-blur-md transition-all duration-300 ease-out [transform:translateZ(0)]
        top-4 h-[52px]
        data-[scrolled=true]:top-3 data-[scrolled=true]:h-[44px] data-[scrolled=true]:bg-[#ECE8E9]/90 data-[scrolled=true]:backdrop-blur-xl data-[scrolled=true]:border-black/[0.08] data-[scrolled=true]:shadow-sm"
    >
      <DesktopNav
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
    </header>
  );
};