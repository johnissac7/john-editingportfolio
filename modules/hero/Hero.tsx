"use client";

import React, { useRef, useEffect, useState } from "react";

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
    <section className="relative w-full h-auto md:h-[100dvh] bg-[#f2eff0] overflow-hidden select-none">
      <div className="max-w-[1920px] mx-auto w-full h-full relative">

        {/* Hero Video Container */}
        <div
          className={`absolute w-full h-auto md:w-[90%] md:h-[95%] md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 top-0 left-0 overflow-hidden transition-opacity duration-[1200ms] ease-out will-change-transform-opacity z-10 ${isVisualReady ? "opacity-100" : "opacity-0"
            }`}
        >
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

        {/* =========================================
            GLASSMORPHISM BUTTON
            Positioned at the bottom center
            ========================================= */}
        <div className="absolute bottom-10 md:bottom-14 left-0 right-0 z-20 flex justify-center pointer-events-none">
          <a
            href="#contact"
            className="pointer-events-auto group inline-flex items-center gap-3 px-8 py-4 rounded-full 
                       bg-zinc-950 text-white 
                       border border-white/10
                       shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)]
                       transition-all duration-300 hover:scale-105 hover:bg-black"
          >
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase">
              Let's Connect
            </span>
            {/* Arrow Icon Container */}
            <div className="flex items-center justify-center w-5 h-5 rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-0.5">
              <svg
                className="w-2.5 h-2.5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-6-6m6 6l-6 6" />
              </svg>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}