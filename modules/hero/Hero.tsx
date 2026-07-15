"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisualReady, setIsVisualReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleAutoplay = async () => {
      try {
        await video.play();
      } catch (error) {
        console.warn(error);
      }
    };

    if (video.readyState >= 3) {
      setIsVisualReady(true);
      handleAutoplay();
    } else {
      const handleCanPlay = () => {
        setIsVisualReady(true);
        handleAutoplay();
      };
      video.addEventListener("canplay", handleCanPlay);
      return () => video.removeEventListener("canplay", handleCanPlay);
    }
  }, []);

  return (
    /* 
      FIX: Added 'aspect-[16/9]' (or change to your video's aspect ratio like aspect-[4/3] if needed) 
      on mobile so the section has structural layout height while remaining fluid.
    */
    <section className="relative w-full h-auto aspect-[16/9] md:aspect-auto md:h-[100dvh] bg-[#f2eff0] overflow-hidden select-none">
      {/* =========================================
          FIX 1 (Zooming): Max-Width Container
          ========================================= */}
      <div className="max-w-[1920px] mx-auto w-full h-full relative">
        <div
          className={`absolute w-full h-full
            md:w-[90%] md:h-[95%] 
            md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 
            top-0 left-0 
            overflow-hidden transition-opacity duration-[1200ms] ease-out will-change-transform-opacity z-10 ${
              isVisualReady ? "opacity-100" : "opacity-0"
            }`}
        >
          {/* Video element and alignment remains 100% untouched */}
          <video
            ref={videoRef}
            src="/HeroSection.mp4"
            preload="auto"
            loop
            muted
            playsInline
            controls={false}
            className="w-full h-full object-contain object-top md:object-cover [transform:translateZ(0)] will-change-transform"
          />
        </div>
      </div>

      {/* =========================================
          RESPONSIVE GLASSMORPHISM BUTTON
          ========================================= */}
      <div className="absolute bottom-6 md:bottom-14 left-0 right-0 z-20 flex justify-center pointer-events-none">
        <a
          href="#contact"
          className="pointer-events-auto group inline-flex items-center gap-2.5 transition-all duration-300
               /* Mobile: Invisible container, clean text link layout */
               px-4 py-2 bg-transparent border-none shadow-none text-zinc-950 active:scale-98
               /* Desktop: Reverts 100% back to original solid capsule style */
               md:px-8 md:py-4 md:rounded-full md:bg-zinc-950 md:text-white md:border md:border-white/10 md:shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] md:hover:scale-105 md:hover:bg-black"
        >
          {/* Text Layer */}
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase">
            {"Let's"} Connect
          </span>

          {/* Dynamic Arrow Layout */}
          {/* 
      Mobile: A raw vector arrow that sits cleanly next to the text link.
      Desktop: Encased inside the original rounded-full bg-white/10 container.
    */}
          <div
            className="flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5
                    w-auto h-auto bg-transparent rounded-none
                    md:w-5 md:h-5 md:rounded-full md:bg-white/10"
          >
            <svg
              className="w-3.5 h-3.5 text-zinc-950 md:w-2.5 md:h-2.5 md:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14m0 0l-6-6m6 6l-6 6"
              />
            </svg>
          </div>
        </a>
      </div>
    </section>
  );
}
