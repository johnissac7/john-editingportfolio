"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

// 1. ReelData Interface
interface ReelData {
  id: number;
  numberLabel: string;
  duration: string;
  title: string;
  category: string;
  imageUrl: string;
  videoUrl: string;
}

const ReelCard: React.FC<{ reelData: ReelData }> = ({ reelData }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  // FIX: State specifically tracks if the video is playing
  const [isPlaying, setIsPlaying] = useState(false);

  // FIX: Explicit click handler to toggle play/pause and manage audio
  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        // Ensures audio is active when the user explicitly clicks play
        videoRef.current.muted = false;
        videoRef.current.play().catch((err) => console.error("Playback failed:", err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="flex flex-col w-full group outline-none">

      {/* 2. Changed aspect-[3/4] to aspect-[9/16] for true vertical reel sizing */}
      <div
        className="relative rounded-2xl overflow-hidden aspect-[9/16] bg-zinc-900 shadow-sm ring-1 ring-black/5 cursor-pointer"
        onClick={togglePlay}
      >
        <video
          ref={videoRef}
          src={reelData.videoUrl}
          poster={reelData.imageUrl}
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />

        {/* Top Labels - Added pointer-events-none so it doesn't block clicks */}
        <div className="absolute inset-0 p-4 md:p-5 flex flex-col justify-between text-white bg-gradient-to-b from-black/30 via-transparent to-black/10 pointer-events-none">
          <div className="flex justify-between items-start font-mono text-[11px] md:text-xs tracking-tight opacity-90 z-10">
            <span className="font-semibold shadow-black drop-shadow-md">{reelData.numberLabel}</span>
            <span className="font-light opacity-90 shadow-black drop-shadow-md">{reelData.duration}</span>
          </div>
        </div>

        {/* 3. Premium Play/Pause Overlay */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${isPlaying
              ? "opacity-0 group-hover:opacity-100" // Fades out when playing, reappears lightly on hover
              : "opacity-100 bg-black/20 backdrop-blur-[2px]" // Slightly blurs and dims the paused video
            }`}
        >
          {/* Glassmorphism Button */}
          <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_1px_rgba(255,255,255,0.4)] transition-transform duration-300 hover:scale-110">
            {isPlaying ? (
              // Pause Icon
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            ) : (
              // Play Icon - Optically centered with translate-x-0.5
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </div>
        </div>

      </div>

      {/* Reel Info below Thumbnail - Left aligned */}
      <div className="pt-4 pb-2 text-zinc-950 text-left">
        <p className="text-[10px] font-mono font-medium tracking-[0.2em] uppercase text-zinc-400 mb-1.5 relative inline-block">
          {reelData.category}
          <span className="absolute -bottom-1.5 left-0 w-6 h-[1px] bg-zinc-300 transition-all duration-300 group-hover:w-full group-hover:bg-[#B95D43]"></span>
        </p>
        <h4 className="text-[14px] md:text-[15px] font-bold tracking-tight text-zinc-900 leading-snug group-hover:text-zinc-700 transition-colors duration-300">
          {reelData.title}
        </h4>
      </div>
    </div>
  );
};

export const FeaturedReelsSection: React.FC = () => {
  const reelsData: ReelData[] = [
    {
      id: 1,
      numberLabel: "01",
      duration: "00:09",
      title: "The Discipline No One Talks About",
      category: "YOUTUBE EDIT",
      imageUrl: "/reels/thumb1.jpg",
      videoUrl: "/FeaturedReels/BobProctor_final.mp4",
    },
    {
      id: 2,
      numberLabel: "02",
      duration: "00:18",
      title: "How I Stay Consistent",
      category: "PODCAST EDIT",
      imageUrl: "/reels/thumb2.jpg",
      videoUrl: "/FeaturedReels/JackNeel&AlexHormozi.mp4",
    },
    {
      id: 3,
      numberLabel: "03",
      duration: "00:11",
      title: "The actual thing that works",
      category: "DOCUMENTATION EDIT",
      imageUrl: "/reels/thumb4.jpg",
      videoUrl: "/FeaturedReels/docvideo_1.mp4",
    },
    {
      id: 4,
      numberLabel: "04",
      duration: "00:18",
      title: "Educational Podcast Edit",
      category: "EDUCATIONAL TALK EDIT",
      imageUrl: "/reels/thumb5.jpg",
      videoUrl: "/FeaturedReels/TalkinHeadPod-Chatgpt_2.mp4",
    },
  ];

  return (
    <section id="work" className="bg-[#F2EFF0] pt-0 pb-12 md:pb-14 px-6 lg:px-16 xl:px-24 text-zinc-950 overflow-hidden">
      <div className="max-w-[1400px] mx-auto w-full">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-10 md:mb-14 gap-8 lg:gap-12">
          <div className="flex flex-col gap-3 md:gap-4 max-w-4xl">
            <p className="flex items-center gap-3 text-[10px] md:text-[11px] font-bold tracking-[0.25em] uppercase text-zinc-400">
              MY WORK — <span className="text-zinc-950 font-black">02</span>
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-[60px] font-bold tracking-tighter leading-[1.1] text-zinc-900">
              Featured Reels
              <span className="text-red-600 inline-block ml-1">.</span>
            </h2>
            <p className="text-lg md:text-xl lg:text-[22px] leading-relaxed text-zinc-600 font-medium max-w-2xl mt-1">
              A selection of talking head edits that blend{" "}
              <span className="text-red-700 font-semibold border-b-[2px] border-red-700/20 pb-0.5">
                storytelling
              </span>
              ,{" "}
              <span className="text-red-700 font-semibold border-b-[2px] border-red-700/20 pb-0.5">
                motion design
              </span>
              , and rhythm to create{" "}
              <span className="text-red-700 font-semibold border-b-[2px] border-red-700/20 pb-0.5">
                impact
              </span>{" "}
              that lasts.
            </p>
          </div>
        </div>

        {/* Reels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8 lg:gap-x-8 lg:gap-y-12">
          {reelsData.map((reel) => (
            <ReelCard key={reel.id} reelData={reel} />
          ))}
        </div>
      </div>
    </section>
  );
};