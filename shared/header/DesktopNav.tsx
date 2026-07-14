"use client";

import Link from "next/link";
import Image from "next/image";
import DesktopSocials from "./DesktopSocials";
import HamburgerMenu from "./HamburgerMenu";

interface DesktopNavProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

export default function DesktopNav({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: DesktopNavProps) {
  return (
    <div className="relative w-full h-20 px-5 md:px-10 flex items-center justify-between">

      {/* =========================================
          DESKTOP LEFT: Brand Logo
          ========================================= */}
      <Link
        href="/"
        className="hidden md:flex relative items-center group transition-transform duration-300 active:scale-98"
      >
        <div className="relative overflow-hidden flex items-center justify-center bg-transparent w-[64px] h-[64px] transition-all duration-300">
          <Image
            src="/jo-png.png"
            alt="Jo Logo"
            width={80}
            height={80}
            priority
            className="object-contain w-full h-full transition-all duration-300"
          />
        </div>
      </Link>

      {/* =========================================
          MOBILE LEFT: Floating Action Pill
          ========================================= */}
      <div className="md:hidden flex items-center bg-white/50 backdrop-blur-md border border-black/5 rounded-[1.25rem] p-1.5 pr-4 shadow-[0_8px_20px_-10px_rgba(0,0,0,0.05)]">

        {/* Inner Button Wrapper (Mimics the reference image's nested container) */}
        <div className="flex items-center justify-center w-11 h-11 bg-white rounded-xl shadow-sm border border-black/[0.04]">
          <HamburgerMenu
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
        </div>

        {/* Beside Hamburger: Scaled Mobile Logo */}
        <Link href="/" className="ml-3.5 relative flex items-center justify-center w-8 h-8 active:scale-95 transition-transform">
          <Image
            src="/jo-png.png"
            alt="Jo Logo"
            width={40}
            height={40}
            priority
            className="object-contain w-full h-full"
          />
        </Link>

      </div>

      {/* =========================================
          CENTER NAV: Desktop Only
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
          RIGHT SIDE: Desktop Socials & Desktop Hamburger
          ========================================= */}
      <div className="flex items-center gap-4">
        {/* Desktop Socials */}
        <div className="hidden md:block">
          <DesktopSocials />
        </div>

        {/* Desktop Hamburger (Hidden on mobile since it is inside the left pill) */}
        <div className="hidden md:block">
          <HamburgerMenu
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
        </div>
      </div>

    </div>
  );
}