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
    // Increased overall height to h-20 (80px) to give the larger logo room to breathe
    <div className="relative w-full h-20 px-6 md:px-10 flex items-center justify-between">

      {/* Left Side: Brand Wordmark */}
      <Link
        href="/"
        className="relative flex items-center group transition-transform duration-300 active:scale-98"
      >
        {/* Logo scaled up significantly to 64px for better visibility */}
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

      {/* Center Nav: Text size and tracking remain optimized for editorial style */}
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

      {/* Far Right Desktop Social Links */}
      <div className="flex items-center gap-4">
        <DesktopSocials />

        {/* Mobile Navigation Trigger */}
        <HamburgerMenu
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      </div>
    </div>
  );
}