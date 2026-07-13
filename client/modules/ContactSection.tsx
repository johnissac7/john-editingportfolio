"use client";

import React from "react";

export const ContactSection: React.FC = () => {
  return (
    // Matches the exact padding and background logic of the previous sections
    <section className="bg-[#F2EFF0] pt-16 md:pt-24 pb-20 md:pb-24 px-6 lg:px-16 xl:px-24 text-zinc-950 overflow-hidden selection:bg-[#B95D43] selection:text-white">
      <div className="max-w-[1400px] mx-auto w-full">
        {/* =========================================
            TWO-COLUMN EDITORIAL GRID
            Matches the 7/12 & 5/12 split of Motion Graphics
            ========================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-start">
          {/* =========================================
              LEFT COLUMN (7/12): Typography & Socials
              ========================================= */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Section Label */}
            <div className="flex items-center gap-4 mb-8 md:mb-10">
              <span className="text-[#B95D43] text-[11px] font-bold font-mono tracking-widest">
                04
              </span>
              <span className="w-8 h-px bg-black/10"></span>
              <span className="text-[10px] md:text-[11px] font-bold tracking-[0.25em] uppercase text-zinc-800">
                Let's Connect
              </span>
            </div>

            {/* Hero Heading - Scaled to match your established 60px rule */}
            <h2 className="text-[44px] md:text-[52px] lg:text-[60px] font-bold tracking-tight leading-[1.05] text-zinc-900 mb-6 md:mb-8">
              <span className="block">Let's create</span>
              <span className="block">something</span>
              <span className="block font-serif italic text-[#B95D43] font-normal tracking-normal mt-1 md:mt-2">
                worth watching
                <span className="text-zinc-900 font-sans font-bold not-italic">
                  .
                </span>
              </span>
            </h2>

            {/* Intro Paragraph */}
            <p className="text-[15px] md:text-[16px] text-zinc-600 leading-[1.7] max-w-[420px]">
              Have a project in mind or just want to say hi? I'd love to hear
              from you and bring your ideas to life through edits that connect.
            </p>

            {/* Accent Line */}
            <div className="w-12 h-[2px] bg-[#B95D43]/30 mt-8 mb-12"></div>

            {/* Social Icons Row */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8">
              {/* WhatsApp (First) */}
              <a
                href="#"
                className="group flex flex-col items-center gap-3 outline-none"
              >
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-zinc-900 group-hover:text-[#B95D43] transition-colors duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                </svg>
                <span className="text-[9px] font-bold tracking-[0.15em] uppercase text-zinc-500 group-hover:text-[#B95D43] transition-colors duration-300">
                  WhatsApp
                </span>
              </a>

              <div className="hidden sm:block w-px h-6 bg-black/10"></div>

              {/* Instagram */}
              <a
                href="#"
                className="group flex flex-col items-center gap-3 outline-none"
              >
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-zinc-900 group-hover:text-[#B95D43] transition-colors duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
                <span className="text-[9px] font-bold tracking-[0.15em] uppercase text-zinc-500 group-hover:text-[#B95D43] transition-colors duration-300">
                  Instagram
                </span>
              </a>

              <div className="hidden sm:block w-px h-6 bg-black/10"></div>

              {/* LinkedIn */}
              <a
                href="#"
                className="group flex flex-col items-center gap-3 outline-none"
              >
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-zinc-900 group-hover:text-[#B95D43] transition-colors duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span className="text-[9px] font-bold tracking-[0.15em] uppercase text-zinc-500 group-hover:text-[#B95D43] transition-colors duration-300">
                  LinkedIn
                </span>
              </a>

              <div className="hidden sm:block w-px h-6 bg-black/10"></div>

              {/* Gmail */}
              <a
                href="mailto:hello@johnissac.com"
                className="group flex flex-col items-center gap-3 outline-none"
              >
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-zinc-900 group-hover:text-[#B95D43] transition-colors duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <span className="text-[9px] font-bold tracking-[0.15em] uppercase text-zinc-500 group-hover:text-[#B95D43] transition-colors duration-300">
                  Gmail
                </span>
              </a>
            </div>
          </div>

          {/* =========================================
              RIGHT COLUMN (5/12): Contact Info
              Uses the 'border-l' logic from HowIWork for structure
              ========================================= */}
          <div className="lg:col-span-5 flex flex-col justify-center h-full pt-12 lg:pt-8 lg:border-l lg:border-black/10 lg:pl-10 xl:pl-16 border-t border-black/10 lg:border-t-0 mt-4 lg:mt-0">
            <div className="max-w-[340px]">
              {/* Block 1: Email */}
              <div className="flex items-start gap-5">
                <div className="mt-0.5 text-[#B95D43]">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <div className="flex flex-col gap-1.5">
                  <p className="text-[9.5px] font-bold tracking-[0.2em] uppercase text-[#B95D43]">
                    Email
                  </p>
                  <a
                    href="mailto:hello@johnissac.com"
                    className="text-[17px] md:text-[19px] text-zinc-900 hover:text-[#B95D43] transition-colors"
                  >
                    hello@johnissac.com
                  </a>
                </div>
              </div>

              {/* Thin Divider */}
              <hr className="my-10 border-black/5 w-full" />

              {/* Block 2: Let's Work Together */}
              <div className="flex items-start gap-5">
                <div className="mt-0.5 text-[#B95D43]">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m22 2-7 20-4-9-9-4Z"></path>
                    <path d="M22 2 11 13"></path>
                  </svg>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-[9.5px] font-bold tracking-[0.2em] uppercase text-[#B95D43]">
                    Let's Work Together
                  </p>
                  <p className="text-[14px] md:text-[15px] leading-[1.8] text-zinc-900">
                    Available for freelance projects, short-form content, motion
                    graphics, and creative collaborations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================
            BOTTOM FOOTER
            ========================================= */}
        <div className="mt-20 md:mt-28 pt-8 border-t border-black/10 flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-3 text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-900">
            <svg
              className="w-4 h-4 text-[#B95D43]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.25"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v18m9-9H3m15.364-6.364l-12.728 12.728m0-12.728l12.728 12.728"
              />
            </svg>
            <span>Great stories deserve great edits.</span>
          </div>

          <a
            href="mailto:hello@johnissac.com"
            className="group flex items-center justify-center sm:justify-end gap-2 text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase text-[#B95D43] hover:text-zinc-900 transition-colors duration-300"
          >
            <span>Let's make yours next.</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
