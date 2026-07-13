"use client";

import React from "react";

export const Footer: React.FC = () => {
  return (
    // Reduced py from 24 to 20 for a tighter footprint
    <footer className="bg-[#141414] py-16 md:py-20 px-6 lg:px-16 xl:px-24 text-zinc-100 selection:bg-zinc-800 selection:text-white">
      <div className="max-w-[1400px] mx-auto w-full">
        {/* TOP ROW: Brand & Date */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="flex flex-col gap-2 md:gap-3">
            <span className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-zinc-500">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-[60px] font-medium tracking-tight text-white leading-none">
              JohnIssac
            </h2>
          </div>

          <div className="flex flex-col md:items-end gap-1 md:gap-2 text-left md:text-right">
            <span className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-zinc-500">
              Last Updated
            </span>
            <span className="text-sm md:text-[15px] text-zinc-300">
              July, 2026
            </span>
          </div>
        </div>

        {/* COMPACT DIVIDER */}
        <hr className="my-12 md:my-16 border-white/10" />

        {/* MIDDLE ROW: Info Columns - Reduced gaps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6">
          <div className="lg:col-span-4 flex flex-col gap-3">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-500">
              I Do
            </span>
            <ul className="flex flex-col gap-1 text-[14px] text-zinc-300">
              <li>Video Editing</li>
              <li>Motion Graphics</li>
            </ul>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-500">
              Built With
            </span>
            <ul className="flex flex-col gap-1 text-[14px] text-zinc-300">
              <li>Next.js, Typescript,</li>
              <li>Tailwind, Framer Motion,</li>
              <li>Bun</li>
            </ul>
          </div>

          <div className="lg:col-span-4 flex flex-col lg:items-end gap-3 text-left lg:text-right">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-500">
              Ready To
            </span>
            <ul className="flex flex-col gap-1 text-[14px] text-zinc-300">
              <li>Short form edits.</li>
              <li>Long form edits.</li>
              <li>Product collaborations.</li>
            </ul>
          </div>
        </div>

        {/* BOTTOM ROW: Professional Copyright Block */}
        <div className="mt-16 md:mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-[11px] text-zinc-600 uppercase tracking-[0.15em]">
          <p>© {new Date().getFullYear()} John Issac Creative Studio.</p>
          <p>All rights reserved. Unauthorized reproduction prohibited.</p>
        </div>
      </div>
    </footer>
  );
};
