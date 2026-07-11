"use client";

import React, { useRef, useState } from "react";

export const MotionGraphicsSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    // ADJUSTMENT: Increased top padding (pt-14) to perfectly space it from the previous grid
    <section className="bg-[#F2EFF0] pt-12 md:pt-14 pb-16 md:pb-20 px-6 lg:px-16 xl:px-24 text-zinc-950 overflow-hidden">
      <div className="max-w-[1400px] mx-auto w-full">
        {/* Main Section Header */}
        <div className="flex flex-col mb-12 md:mb-16">
          <p className="flex items-center gap-3 text-[10px] md:text-[11px] font-bold tracking-[0.25em] uppercase text-zinc-400 mb-4">
            MY WORK — <span className="text-zinc-950 font-black">04</span>
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-[60px] font-bold tracking-tighter leading-[1.1] text-zinc-900">
            Motion Graphics
            <span className="text-red-600 inline-block ml-1">.</span>
          </h2>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* =========================================
              LEFT COLUMN: Title & Video (7/12 width)
              ========================================= */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Redesigned Premium Title with WhatsApp Brand Hint */}
            <div className="flex items-center gap-3 mb-5 pl-1">
              <div className="relative flex h-2.5 w-2.5 mt-0.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-40"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366]"></span>
              </div>
              <h3 className="text-2xl lg:text-[28px] font-bold tracking-tight text-zinc-900 leading-none">
                WhatsApp <span className="font-light text-zinc-400">Ad.</span>
              </h3>
            </div>

            {/* Locked 16:9 Video Player */}
            <div
              className="relative w-full aspect-video rounded-2xl md:rounded-[2rem] overflow-hidden bg-zinc-900 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] ring-1 ring-black/5 group cursor-pointer"
              onClick={togglePlay}
            >
              <video
                ref={videoRef}
                src="/whatsapp-ad.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />

              {/* Premium Play/Pause Overlay */}
              <div
                className={`absolute inset-0 bg-black/20 backdrop-blur-[2px] transition-opacity duration-500 flex items-center justify-center ${
                  isPlaying
                    ? "opacity-0 group-hover:opacity-100"
                    : "opacity-100"
                }`}
              >
                <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  {isPlaying ? (
                    <svg
                      className="w-6 h-6 md:w-8 md:h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6 md:w-8 md:h-8 text-white translate-x-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* =========================================
              RIGHT COLUMN: Details & Metadata (5/12 width)
              ========================================= */}
          <div className="lg:col-span-5 flex flex-col pt-1 lg:pt-2 lg:mt-[76px]">
            {/* Top Label */}
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#B95D43] mb-5">
              Featured Project
            </h4>

            {/* Intro Paragraph */}
            <p className="text-[15px] md:text-[17px] leading-[1.6] text-zinc-600 mb-8 max-w-lg">
              My first and best motion graphics edit — a WhatsApp ad designed to{" "}
              <span className="font-bold text-zinc-800">grab attention</span>,{" "}
              <span className="font-bold text-zinc-800">communicate fast</span>,
              and <span className="font-bold text-zinc-800">drive action</span>{" "}
              in just a few seconds.
            </p>

            {/* Divider */}
            <hr className="border-black/5 mb-8" />

            {/* Story/Process Sections */}
            <div className="flex flex-col gap-8 mb-10 md:mb-10 mb-2">
              {/* Inspiration */}
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B95D43]"></span>
                  <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-zinc-900 mt-0.5">
                    The Inspiration
                  </h4>
                </div>
                <div className="pl-4 ml-[2px] border-l-[1.5px] border-[#B95D43]/30">
                  <p className="text-[14px] md:text-[15px] leading-[1.8] text-zinc-600">
                    Inspired by the sleek, high-impact style of{" "}
                    <span className="font-bold text-zinc-800">@mvvnsur</span>,
                    known for creating visually bold and dynamic motion that
                    connects instantly.
                  </p>
                </div>
              </div>

              {/* Approach */}
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B95D43]"></span>
                  <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-zinc-900 mt-0.5">
                    The Approach
                  </h4>
                </div>
                <div className="pl-4 ml-[2px] border-l-[1.5px] border-[#B95D43]/30">
                  <p className="text-[14px] md:text-[15px] leading-[1.8] text-zinc-600">
                    Built with a{" "}
                    <span className="font-bold text-zinc-800">
                      mobile-first
                    </span>{" "}
                    mindset, combining{" "}
                    <span className="font-bold text-zinc-800">
                      smooth transitions
                    </span>
                    ,{" "}
                    <span className="font-bold text-zinc-800">
                      kinetic typography
                    </span>
                    , and{" "}
                    <span className="font-bold text-zinc-800">
                      sound design
                    </span>{" "}
                    to deliver a premium feel and a clear message.
                  </p>
                </div>
              </div>
            </div>

            {/* Premium Metadata Container */}
            <div className="hidden md:block w-full bg-white/20 backdrop-blur-sm rounded-[1.5rem] border border-black/5 p-5 md:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6">
                {/* Role */}
                <div className="flex flex-col items-center text-center px-2 md:border-r border-black/5">
                  <div className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-[#EAD4CC] flex items-center justify-center text-zinc-900 mb-3 shadow-sm">
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-zinc-500 mb-1">
                    Role
                  </span>
                  <span className="text-[11px] md:text-[12px] font-medium text-zinc-800">
                    Motion Designer
                  </span>
                </div>

                {/* Type */}
                <div className="flex flex-col items-center text-center px-2 md:border-r border-black/5">
                  <div className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-[#EAD4CC] flex items-center justify-center text-zinc-900 mb-3 shadow-sm">
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                      />
                    </svg>
                  </div>
                  <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-zinc-500 mb-1">
                    Type
                  </span>
                  <span className="text-[11px] md:text-[12px] font-medium text-zinc-800">
                    WhatsApp Ad
                  </span>
                </div>

                {/* Format */}
                <div className="flex flex-col items-center text-center px-2 md:border-r border-black/5">
                  <div className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-[#EAD4CC] flex items-center justify-center text-zinc-900 mb-3 shadow-sm">
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-zinc-500 mb-1">
                    Format
                  </span>
                  <span className="text-[11px] md:text-[12px] font-medium text-zinc-800">
                    16:9 Ad
                  </span>
                </div>

                {/* Status */}
                <div className="flex flex-col items-center text-center px-2">
                  <div className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-[#EAD4CC] flex items-center justify-center text-zinc-900 mb-3 shadow-sm">
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-zinc-500 mb-1">
                    Status
                  </span>
                  <span className="flex items-center gap-1.5 text-[11px] md:text-[12px] font-medium text-zinc-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00A167]"></span>
                    Completed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
