"use client";

import React from "react";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#F8F8F8]">
      {/* =========================================
        THE ORGANIC MESH GRADIENT
        =========================================
      */}
      {/* 1. Top-Left Lobe */}
      <div className="absolute top-[38%] left-[42%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#EBBAB0] rounded-full blur-[100px] opacity-[0.85] pointer-events-none z-0" />

      {/* 2. Bottom-Right Lobe */}
      <div className="absolute top-[62%] left-[58%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#EBBAB0] rounded-full blur-[100px] opacity-[0.85] pointer-events-none z-0" />

      {/* 3. Central Bridge */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-[#E2AD9F] rounded-full blur-[90px] opacity-[0.70] pointer-events-none z-0" />

      {/* =========================================
        THE PREMIUM GRAIN TEXTURE
        =========================================
      */}
      <div
        className="absolute inset-0 z-10 opacity-[0.14] pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* =========================================
        MAIN CONTENT
        =========================================
      */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-5xl mx-auto px-6 mt-16 md:mt-24">
        {/* Pre-heading */}
        <div className="flex flex-col items-center gap-3 mb-4 md:mb-5">
          <p className="text-[11px] md:text-[12px] font-bold tracking-[0.15em] uppercase text-[#B95D43]">
            Video Editor & Motion Designer
          </p>
          <div className="w-[42px] h-[2px] bg-[#D2AEA3]"></div>
        </div>

        {/* Main Heading */}
        <h1 className="text-[50px] md:text-[85px] font-medium tracking-tight text-[#1D1D1D] leading-[1.05] mb-8">
          Creating videos that <br className="hidden md:block" />
          people{" "}
          <span className="font-serif italic text-[#346DEB]">remember</span>
          <span className="text-[#F2B5AA] font-sans">.</span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-[16px] md:text-[20px] text-[#555555] leading-[1.6] font-medium tracking-[0.02em]">
          I transform ideas into powerful edits and motion{" "}
          <br className="hidden md:block" />
          that connect, engage and leave a lasting impact.
        </p>

        {/* =========================================
          PERFECTED GLASSMORPHIC BUTTON
          =========================================
        */}
        <button
          className="
            mt-14 px-12 py-[18px] rounded-full flex items-center gap-6 group transition-all duration-500
            bg-gradient-to-b from-white/25 to-white/5
            backdrop-blur-[16px] backdrop-saturate-[1.2]
            border border-white/20
            shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_8px_32px_rgba(0,0,0,0.04)]
            hover:from-white/30 hover:to-white/10 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_8px_32px_rgba(0,0,0,0.08)]
          "
        >
          {/* Text color changed to a soft graphite instead of harsh black */}
          <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-[#2A2826] mt-[2px] ml-2">
            Hire Me
          </span>
          <svg
            className="w-5 h-5 text-[#2A2826] group-hover:translate-x-1 transition-transform duration-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};
