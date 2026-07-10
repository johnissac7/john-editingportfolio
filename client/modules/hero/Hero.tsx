"use client";

import React from "react";
import { motion } from "framer-motion";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#F8F8F8]">
      {/* =========================================
        THE ORGANIC MESH GRADIENT
        =========================================
      */}
      <div className="absolute top-[38%] left-[42%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#EBBAB0] rounded-full blur-[100px] opacity-[0.85] pointer-events-none z-0" />
      <div className="absolute top-[62%] left-[58%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#EBBAB0] rounded-full blur-[100px] opacity-[0.85] pointer-events-none z-0" />
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
          THE CAMOUFLAGED LENS BUTTON
          =========================================
        */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="
            mt-14 px-12 py-5 rounded-full flex items-center gap-5 group 
            bg-white/5 
            backdrop-blur-md
            border border-white/20
            shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.5)]
            hover:bg-white/10 hover:border-white/30 
            hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.12),inset_0_1px_1px_rgba(255,255,255,0.7)]
            transition-all duration-500
          "
        >
          {/* Subtle Dark Charcoal Text */}
          <span className="text-[11.5px] font-semibold tracking-[0.25em] uppercase text-[#1c1c1c] mt-[2px] ml-2">
            Hire Me
          </span>
          <svg
            className="w-5 h-5 text-[#1c1c1c] group-hover:translate-x-1 transition-transform duration-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </motion.button>
      </div>
    </section>
  );
};
