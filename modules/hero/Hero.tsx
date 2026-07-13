"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image"; // Replaced <img> for optimization

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
    // FIX 2 (Mobile Gap): Changed h-[100dvh] to h-auto.
    // Dynamic Viewport Height (dvh) was forcing the section to take up the full screen height on mobile.
    // Since the video's contents were shorter, the background filled the remaining space, creating a large gap.
    // Changing h-auto forces the section to shrink to fit the video height, removing the gap.
    <section className="relative w-full h-auto md:h-[100dvh] bg-[#f2eff0] overflow-hidden select-none">
      {/* =========================================
          FIX 1 (Zooming): Max-Width Container
          =========================================
          To make the layout zoom correctly (scaling up and down), we cannot let the layout stretch infinitely to 100% of the screen width.
          I have introduced a max-width container (max-w-[1920px] mx-auto) around the inner contents.
          Now, when you zoom out, the layout stops stretching, allowing the browsers zoom scaling to take effect as expected.
      */}
      <div className="max-w-[1920px] mx-auto w-full h-full relative">
        <div
          className={`absolute w-full h-auto
            md:w-[90%] md:h-[95%] // Updated from [90vw] to [90%] relative to the container
            md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 // Position centered relative to the container
            top-0 left-0 // Default position for mobile
            overflow-hidden transition-opacity duration-[1200ms] ease-out will-change-transform-opacity z-10 ${
              isVisualReady ? "opacity-100" : "opacity-0"
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
      </div>
    </section>
  );
}
