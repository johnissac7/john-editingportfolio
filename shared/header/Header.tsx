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
      /* 
        RESPONSIVE CONTAINER CONFIGURATION:
        - Mobile: Completely layout-free, unpainted, and transparent.
        - Desktop: Becomes the structured full-width header from the design.
      */
      className="group/header fixed top-0 left-0 w-full z-50 select-none transition-all duration-300 ease-out [transform:translateZ(0)]
        h-[76px] bg-transparent border-none
        md:bg-[#F2EFF0]/60 md:backdrop-blur-md md:border-b md:border-black/[0.04]
        md:data-[scrolled=true]:h-[64px] md:data-[scrolled=true]:bg-[#F2EFF0]/90 md:data-[scrolled=true]:backdrop-blur-xl"
    >
      {/* 
        Container constraints: On mobile, we use pointer-events-none so click-throughs work on the page, 
        and re-enable them on the inner relative child wrapper.
      */}
      <div className="w-full h-full max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-end md:justify-between pointer-events-none md:pointer-events-auto">
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