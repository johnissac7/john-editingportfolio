"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image"; // Imported Next.js Image component

export const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
        {/* Logo using the image from the public folder */}
        <Link href="/" className="flex items-center">
          <Image
            src="/jo-png.png"
            alt="Jo Logo"
            width={40} // Adjust width as needed for your specific image
            height={40} // Adjust height as needed
            priority // Prioritizes loading this image since it's above the fold
            className="object-contain"
          />
        </Link>

        {/* Center Navigation - Hidden on small screens for mobile responsiveness */}
        <nav className="hidden md:flex items-center gap-10">
          <div className="relative group cursor-pointer flex flex-col items-center">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-900">
              Work
            </span>
            {/* Active Dot Indicator */}
            <span className="w-1 h-1 bg-zinc-900 rounded-full absolute -bottom-3"></span>
          </div>
          <div className="relative group cursor-pointer flex flex-col items-center">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-500 hover:text-zinc-900 transition-colors">
              About
            </span>
          </div>
          <div className="relative group cursor-pointer flex flex-col items-center">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-500 hover:text-zinc-900 transition-colors">
              Services
            </span>
          </div>
          <div className="relative group cursor-pointer flex flex-col items-center">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-500 hover:text-zinc-900 transition-colors">
              Contact
            </span>
          </div>
        </nav>

        {/* Right Status Indicator */}
        <div className="hidden md:flex items-center gap-3">
          <span className="w-2 h-2 bg-zinc-900 rounded-full animate-pulse"></span>
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-900">
            Available for Freelance
          </span>
        </div>
      </div>
    </header>
  );
};
