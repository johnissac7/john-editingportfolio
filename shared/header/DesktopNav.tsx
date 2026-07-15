"use client";

import Link from "next/link";
import Image from "next/image";
import DesktopSocials from "./DesktopSocials";
import HamburgerMenu from "./HamburgerMenu";

interface DesktopNavProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  isScrolled: boolean;
}

export default function DesktopNav({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  isScrolled,
}: DesktopNavProps) {
  return (
    <div className="relative w-full h-full flex items-center justify-between pointer-events-auto">
      {/* =========================================
          DESKTOP LEFT: Clean Wordmark Only (No Image Circle)
          ========================================= */}
      <Link
        href="/"
        className="hidden md:flex items-center gap-3.5 group transition-transform duration-300 active:scale-98"
      >
        {/* 
    SCALED UP BRAND CANVAS:
    - Expanded width and height configurations to 76px.
    - Set to 'object-cover' to allow the image asset to fill the space completely and bleed edge-to-edge.
  */}
        <div className="relative flex items-center justify-center bg-transparent w-[60px] h-[60px] transition-all duration-300">
          <Image
            src="/jo-png.png"
            alt="Jo Logo"
            width={96}
            height={96}
            priority
            className="object-cover w-full h-full transition-all duration-300"
          />
        </div>
      </Link>

      {/* =========================================
          DESKTOP CENTER: Navigation Links (Hidden on Mobile)
          ========================================= */}
      <ol className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-10 font-sans text-[11px] font-bold tracking-[0.15em] uppercase">
        {["About", "Work", "Services", "Contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="group flex items-center py-2 text-zinc-900/70 hover:text-zinc-900 transition-colors duration-300"
            >
              <span>{item}</span>
            </a>
          </li>
        ))}
      </ol>

      {/* =========================================
          DESKTOP RIGHT: Socials
          ========================================= */}
      <div className="hidden md:flex items-center gap-4">
        <DesktopSocials />
      </div>

      {/* =========================================
          MOBILE ONLY: Clean, Symmetrical Floating Trigger Circle
          ========================================= */}
      <div
        className={`md:hidden fixed top-4 right-4 flex items-center justify-center w-12 h-12 bg-white/75 backdrop-blur-lg border border-black/[0.08] rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-500 ease-out
        ${
          isScrolled
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        {/* Centered Trigger Button */}
        <div className="flex items-center justify-center w-6 h-6">
          <HamburgerMenu
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
        </div>
      </div>
    </div>
  );
}
