"use client";

import React from "react";

export const ContactSection: React.FC = () => {
  return (
    // Added top border line (border-t border-black/10) to clearly separate the section
    <section
      id="contact"
      className="bg-[#F2EFF0] border-t border-black/10 pt-16 md:pt-24 pb-20 md:pb-24 px-6 lg:px-16 xl:px-24 text-zinc-950 overflow-hidden selection:bg-[#B95D43] selection:text-white"
    >
      <div className="max-w-[1400px] mx-auto w-full">
        {/* =========================================
            TWO-COLUMN EDITORIAL GRID
            ========================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* =========================================
              LEFT COLUMN (7/12): Typography & Socials
              ========================================= */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Section Label */}
            <div className="flex items-center gap-4 mb-8 md:mb-10">
              <span className="text-[#B95D43] text-[11px] font-bold font-mono tracking-widest">
                05
              </span>
              <span className="w-8 h-px bg-black/10"></span>
              <span className="text-[10px] md:text-[11px] font-bold tracking-[0.25em] uppercase text-zinc-800">
                Let's Connect
              </span>
            </div>

            {/* Hero Heading */}
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
              {/* WhatsApp */}
              <a
                href="https://wa.me/919345269742"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 outline-none"
              >
                {/* Cleaned & streamlined authentic WhatsApp path silhouette */}
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-zinc-900 group-hover:text-[#25D366] transition-colors duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                </svg>
                <span className="text-[9px] font-bold tracking-[0.15em] uppercase text-zinc-500 group-hover:text-[#25D366] transition-colors duration-300">
                  WhatsApp
                </span>
              </a>

              <div className="hidden sm:block w-px h-6 bg-black/10"></div>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/_jo.xhn?igsh=MWwzZjVtbnRlc2hndw=="
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 outline-none"
              >
                {/* 
      Defines a linear gradient within the SVG to perfectly match 
      Instagram's iconic brand color spectrum injection.
    */}
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-zinc-900 transition-colors duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    maskImage:
                      "linear-gradient(to top right, #f9ce34, #ee2a7b, #6228d7)",
                    WebkitMaskImage:
                      "linear-gradient(to top right, #f9ce34, #ee2a7b, #6228d7)",
                  }}
                >
                  {/* Dynamic inline style swaps stroke color to use the gradient on parent hover */}
                  <g className="stroke-zinc-900 group-hover:stroke-[url(#insta-gradient)] transition-colors duration-300">
                    <defs>
                      <linearGradient
                        id="insta-gradient"
                        x1="100%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#6228d7" />
                        <stop offset="50%" stopColor="#ee2a7b" />
                        <stop offset="100%" stopColor="#f9ce34" />
                      </linearGradient>
                    </defs>
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </g>
                </svg>
                {/* Text color transition matches the core brand red/magenta node */}
                <span className="text-[9px] font-bold tracking-[0.15em] uppercase text-zinc-500 group-hover:text-[#E1306C] transition-colors duration-300">
                  Instagram
                </span>
              </a>

              <div className="hidden sm:block w-px h-6 bg-black/10"></div>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/john-issac-3a916041a?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 outline-none"
              >
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-zinc-900 group-hover:text-[#0077B5] transition-colors duration-300"
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
                <span className="text-[9px] font-bold tracking-[0.15em] uppercase text-zinc-500 group-hover:text-[#0077B5] transition-colors duration-300">
                  LinkedIn
                </span>
              </a>

              <div className="hidden sm:block w-px h-6 bg-black/10"></div>

              {/* Gmail */}
              <a
                href="mailto:jijohnissac@gmail.com"
                className="group flex flex-col items-center gap-3 outline-none"
              >
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-zinc-900 group-hover:text-[#EA4335] transition-colors duration-300"
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
                <span className="text-[9px] font-bold tracking-[0.15em] uppercase text-zinc-500 group-hover:text-[#EA4335] transition-colors duration-300">
                  Gmail
                </span>
              </a>
            </div>
          </div>

          {/* =========================================
              RIGHT COLUMN (5/12): Interactive Contact Card
              ========================================= */}
          <div className="lg:col-span-5 flex flex-col mt-10 lg:mt-0">
            <div className="bg-[#FCFCFC]/80 backdrop-blur-md rounded-[1.5rem] md:rounded-[2rem] border border-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.03)] p-6 md:p-8 flex flex-col w-full max-w-[500px] ml-auto">
              {/* Row 1: Email */}
              <a
                href="mailto:jijohnissac@gmail.com"
                className="group flex items-center gap-5 pb-6 border-b border-black/5 outline-none"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#B95D43]/10 flex items-center justify-center text-[#B95D43] shrink-0 transition-transform duration-300 group-hover:scale-105">
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <div className="flex-1 flex flex-col gap-1">
                  <p className="text-[10px] md:text-[11px] font-bold tracking-[0.15em] uppercase text-zinc-500">
                    Email
                  </p>
                  <p className="text-[15px] md:text-[17px] font-medium text-zinc-900 transition-colors duration-300 group-hover:text-[#B95D43]">
                    jijohnissac@gmail.com
                  </p>
                </div>
                <div className="text-zinc-400 group-hover:text-[#B95D43] group-hover:translate-x-1 transition-all duration-300">
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </div>
              </a>

              {/* Row 2: Let's Collaborate */}
              <a
                href="https://wa.me/919345269742"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 py-6 border-b border-black/5 outline-none"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#B95D43]/10 flex items-center justify-center text-[#B95D43] shrink-0 transition-transform duration-300 group-hover:scale-105">
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M23 7l-7 5 7 5V7z"></path>
                    <rect
                      x="1"
                      y="5"
                      width="15"
                      height="14"
                      rx="2"
                      ry="2"
                    ></rect>
                  </svg>
                </div>
                <div className="flex-1 flex flex-col gap-1">
                  <p className="text-[10px] md:text-[11px] font-bold tracking-[0.15em] uppercase text-zinc-500">
                    Let's Collaborate
                  </p>
                  <p className="text-[15px] md:text-[17px] font-medium text-zinc-900 transition-colors duration-300 group-hover:text-[#B95D43]">
                    Open for exciting video projects
                  </p>
                </div>
                <div className="text-zinc-400 group-hover:text-[#B95D43] group-hover:translate-x-1 transition-all duration-300">
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </div>
              </a>

              {/* Row 3: What I Do */}
              <div className="group flex items-center gap-5 pt-6 outline-none cursor-default">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#B95D43]/10 flex items-center justify-center text-[#B95D43] shrink-0 transition-transform duration-300 group-hover:scale-105">
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19.82 2H4.18C2.97 2 2 2.97 2 4.18v15.64C2 21.03 2.97 22 4.18 22h15.64c1.21 0 2.18-.97 2.18-2.18V4.18C22 2.97 21.03 2 19.82 2z"></path>
                    <path d="M7 2v20"></path>
                    <path d="M17 2v20"></path>
                    <path d="M2 12h20"></path>
                    <path d="M2 7h5"></path>
                    <path d="M2 17h5"></path>
                    <path d="M17 17h5"></path>
                    <path d="M17 7h5"></path>
                  </svg>
                </div>
                <div className="flex-1 flex flex-col gap-1">
                  <p className="text-[10px] md:text-[11px] font-bold tracking-[0.15em] uppercase text-zinc-500">
                    What I Do
                  </p>
                  <p className="text-[14px] md:text-[15px] font-medium text-zinc-900 flex items-center flex-wrap">
                    Editing{" "}
                    <span className="text-[#B95D43] mx-2 text-[10px]">•</span>{" "}
                    Motion Design{" "}
                    <span className="text-[#B95D43] mx-2 text-[10px]">•</span>{" "}
                    Storytelling
                  </p>
                </div>
                <div className="text-zinc-400 group-hover:text-[#B95D43] group-hover:translate-x-1 transition-all duration-300">
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================
            BOTTOM FOOTER DIVIDER
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
