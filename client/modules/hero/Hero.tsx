"use client";

import React, { useRef, useEffect, useState } from 'react';

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
      video.addEventListener('canplay', handleCanPlay);
      return () => video.removeEventListener('canplay', handleCanPlay);
    }
  }, []);

  return (
    <section className="relative w-full h-[100dvh] bg-[#f2eff0] overflow-hidden select-none">
      
  
      <div 
        className={`absolute w-full h-auto 
          md:w-[90vw] md:h-[95vh] md:top-0 md:left-1/2 md:-translate-x-1/2
          top-0 left-0
          overflow-hidden transition-opacity duration-[1200ms] ease-out will-change-transform-opacity z-10 ${
          isVisualReady ? 'opacity-100' : 'opacity-0'
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
    </section>
  );
}