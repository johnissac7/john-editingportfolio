"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import DesktopSocials from "./DesktopSocials";

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
      className="fixed top-0 left-0 w-full z-50 select-none bg-[#ECE8E9]/80 backdrop-blur-0 transition-all duration-300 ease-out border-b border-black/0 [transform:translateZ(0)]
        h-[76px] data-[scrolled=true]:h-[64px] data-[scrolled=true]:bg-[#ECE8E9]/95 data-[scrolled=true]:backdrop-blur-xl data-[scrolled=true]:border-black/[0.06]"
    >
      <div className="w-full h-full max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Left Side: Brand Wordmark */}
        <Link href="/" className="relative flex items-center group transition-transform duration-300 active:scale-98">
          <Image
            src="/jo-png.png"
            alt="Jo Logo"
            width={46} 
            height={46} 
            priority
            className="object-contain h-auto w-auto max-h-[46px] data-[scrolled=true]:max-h-[38px] transition-all duration-300"
          />
        </Link>

        {/* Center/Right: Navigation */}
        <nav className="hidden md:flex items-center gap-10 font-mono text-[11px] font-medium tracking-[0.18em] uppercase">
          <Link href="#work" className="relative py-2 text-zinc-900 transition-colors duration-300">
            Work
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[4px] h-[4px] bg-zinc-900 rounded-full" />
          </Link>
          
          <Link href="#services" className="relative py-2 text-zinc-900/60 hover:text-zinc-900 transition-colors duration-300">
            Services
          </Link>
          
          <Link href="#about" className="relative py-2 text-zinc-900/60 hover:text-zinc-900 transition-colors duration-300">
            About
          </Link>
          
          <Link href="#contact" className="relative py-2 text-zinc-900/60 hover:text-zinc-900 transition-colors duration-300">
            Contact
          </Link>
        </nav>

        {/* SWAPPED: Far Right Desktop Social Links (Available indicator completely removed) */}
        <DesktopSocials />

        {/* Mobile Navigation Trigger */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex md:hidden flex-col justify-center items-end gap-[5px] w-6 h-6 z-50 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <span className={`w-6 h-[1.5px] bg-zinc-900 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
          <span className={`w-4 h-[1.5px] bg-zinc-900 transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[3.5px] w-6' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 w-full h-screen bg-[#ECE8E9] z-40 p-8 flex flex-col justify-between transition-transform duration-500 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-8 mt-24 font-serif text-4xl font-light tracking-tight text-zinc-900">
          <Link href="#work" onClick={() => setIsMobileMenuOpen(false)}>Work</Link>
          <Link href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
          <Link href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
        </div>
        
        {/* Mobile Menu Overlay Container */}
      <div 
        className={`fixed inset-0 w-full h-[100dvh] bg-[#ECE8E9] z-40 p-8 flex flex-col justify-between transition-transform duration-500 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Navigation Section */}
        <div className="flex flex-col gap-8 mt-24 font-serif text-4xl font-light tracking-tight text-zinc-900">
          <Link href="#work" onClick={() => setIsMobileMenuOpen(false)}>Work</Link>
          <Link href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
          <Link href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
        </div>
        
        {/* SWAPPED: Pure Social Links Block (Available indicator completely removed) */}
        <div className="border-t border-black/10 pt-8 pb-4 flex items-center justify-start gap-8 z-50">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-mono text-xs font-semibold tracking-widest uppercase text-zinc-900 hover:text-zinc-600 transition-colors duration-300 py-2"
          >
            Instagram
          </a>
          <a 
            href="https://vimeo.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-mono text-xs font-semibold tracking-widest uppercase text-zinc-900 hover:text-zinc-600 transition-colors duration-300 py-2"
          >
            Vimeo
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-mono text-xs font-semibold tracking-widest uppercase text-zinc-900 hover:text-zinc-600 transition-colors duration-300 py-2"
          >
            LinkedIn
          </a>
        </div>
      </div>
      </div>
    </header>
  );
};