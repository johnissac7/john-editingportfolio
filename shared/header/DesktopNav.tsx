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
    <div className="relative w-full h-full flex items-center justify-between pointer-events-auto">
      {/* =========================================
          DESKTOP LEFT: Brand Logo & Wordmark (Hidden on Mobile)
          ========================================= */}
      <Link
        href="/"
        className="hidden md:flex items-center gap-3.5 group transition-transform duration-300 active:scale-98"
      >
        {/* 
    DIALED BACK DESKTOP LOGO:
    - Reduced from 80px to a balanced 62px (~22.5% reduction)
    - Full-bleed circular crop maintained with object-cover
  */}
        <div className="relative overflow-hidden rounded-full flex items-center justify-center bg-transparent w-[62px] h-[62px] transition-all duration-300 border border-black/[0.04]">
          <Image
            src="/jo-png.png"
            alt="Jo Logo"
            width={80}
            height={80}
            priority
            className="object-cover w-full h-full scale-105 transition-all duration-300"
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
      <div className="hidden md:flex items-center gap-4">
        <DesktopSocials />
      </div>

      {/* =========================================
          MOBILE ONLY: Integrated Right Floating Pill
          - Combines Logo + Hamburger in one physical container.
          - Floating offset matches page margins seamlessly.
          ========================================= */}
      <div className="md:hidden fixed top-4 right-4 flex items-center gap-3 bg-white/25 backdrop-blur-lg border border-black/[0.08] rounded-full pl-2 pr-4 py-1.5 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
        {/* Round Logo Icon */}
        <Link
          href="/"
          className="relative flex items-center justify-center w-[44px] h-[44px] overflow-hidden rounded-full border border-black/[0.04] bg-[#F2EFF0]"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <Image
            src="/jo-png.png"
            alt="Jo Logo"
            width={52}
            height={52}
            priority
            className="object-cover w-full h-full scale-105"
          />
        </Link>

        {/* Vertical Separator Line */}
        <span className="w-[1px] h-4 bg-black/[0.08]" />

        {/* Trigger Button */}
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
