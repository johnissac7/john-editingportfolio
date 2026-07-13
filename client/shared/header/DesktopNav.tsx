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
    <div className="w-full h-full px-6 md:px-10 flex items-center justify-between">
      {/* Left Side: Brand Wordmark */}
      <Link
        href="/"
        className="relative flex items-center gap-2.5 group transition-transform duration-300 active:scale-98 -ml-3 md:-ml-5"
      >
        {/* 1. Circular Frame Icon */}
        <div className="relative overflow-hidden rounded-full flex items-center justify-center bg-transparent w-[44px] h-[44px] group-data-[scrolled=true]/header:w-[36px] group-data-[scrolled=true]/header:h-[36px] transition-all duration-300">
          <Image
            src="/jo-png.png"
            alt="Jo Logo"
            width={54}
            height={54}
            priority
            className="object-cover w-full h-full scale-102 transition-all duration-300"
          />
        </div>
      </Link>

      <nav className="hidden md:flex items-center gap-10 font-sans text-[11px] font-semibold tracking-[0.16em] uppercase">
        <Link
          href="#work"
          className="relative py-2 text-zinc-900 transition-colors duration-300"
        >
          Home
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[4px] h-[4px] bg-zinc-900 rounded-full" />
        </Link>

        <Link
          href="#services"
          className="relative py-2 text-zinc-900/60 hover:text-zinc-900 transition-colors duration-300"
        >
          About
        </Link>

        <Link
          href="#about"
          className="relative py-2 text-zinc-900/60 hover:text-zinc-900 transition-colors duration-300"
        >
          Services
        </Link>

        <Link
          href="#contact"
          className="relative py-2 text-zinc-900/60 hover:text-zinc-900 transition-colors duration-300"
        >
          Skills
        </Link>
        <Link
          href="#contact"
          className="relative py-2 text-zinc-900/60 hover:text-zinc-900 transition-colors duration-300"
        >
          Contact
        </Link>
      </nav>

      {/* Far Right Desktop Social Links */}
      <DesktopSocials />

      {/* Mobile Navigation Trigger */}
      <HamburgerMenu
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
    </div>
  );
}
