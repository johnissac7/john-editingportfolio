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
    <div className="relative w-full h-full px-6 md:px-10 flex items-center justify-between">
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

      <ol className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8 font-sans text-[11px] font-semibold tracking-[0.16em] uppercase">
        <li>
          <a
            href="#about"
            className="group flex items-center gap-1.5 py-2 text-zinc-900/60 hover:text-zinc-900 transition-colors duration-300"
          >
            <span>About</span>
          </a>
        </li>
        <li>
          <a
            href="#work"
            className="group flex items-center gap-1.5 py-2 text-zinc-900/60 hover:text-zinc-900 transition-colors duration-300"
          >
            <span>Work</span>
          </a>
        </li>
        <li>
          <a
            href="#services"
            className="group flex items-center gap-1.5 py-2 text-zinc-900/60 hover:text-zinc-900 transition-colors duration-300"
          >
            <span>Services</span>
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="group flex items-center gap-1.5 py-2 text-zinc-900/60 hover:text-zinc-900 transition-colors duration-300"
          >
            <span>Contact</span>
          </a>
        </li>
      </ol>

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
