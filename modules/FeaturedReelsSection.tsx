"use client";

import React from "react";
import Image from "next/image";

interface ReelData {
  id: number;
  numberLabel: string;
  duration: string;
  title: string;
  category: string;
  imageUrl: string;
}

const ReelCard: React.FC<{ reelData: ReelData }> = ({ reelData }) => {
  return (
    <div className="flex flex-col w-full group">
      {/* Thumbnail Container */}
      <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-zinc-200 shadow-sm transition-transform duration-500 ease-out group-hover:scale-[1.01]">
        <Image
          src={reelData.imageUrl}
          alt={`${reelData.category} - ${reelData.title}`}
          fill
          priority={reelData.id <= 2}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Corner Labels & Floating Glass Play Button */}
        <div className="absolute inset-0 p-4 md:p-5 flex flex-col justify-between text-white bg-gradient-to-b from-black/20 via-transparent to-black/10">
          <div className="flex justify-between items-start font-mono text-[11px] md:text-xs tracking-tight opacity-90">
            <span className="font-semibold">{reelData.numberLabel}</span>
            <span className="font-light opacity-80">{reelData.duration}</span>
          </div>

          <button className="flex items-center justify-center rounded-full w-10 h-10 md:w-12 md:h-12 border border-white/30 bg-white/10 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] transition-all duration-300 group-hover:bg-white group-hover:border-white group-hover:scale-105">
            <svg
              className="w-4 h-4 md:w-5 md:h-5 fill-white transition-colors duration-300 group-hover:fill-zinc-950 translate-x-[1px]"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 3l16 9-16 9v-18z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Reel Info below Thumbnail */}
      <div className="pt-4 pb-2 text-zinc-950">
        <p className="text-[10px] font-mono font-medium tracking-[0.2em] uppercase text-zinc-400 mb-1.5 relative inline-block w-full">
          {reelData.category}
          <span className="absolute -bottom-1.5 left-0 w-6 h-[1px] bg-zinc-300"></span>
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
    },
    {
      id: 2,
      numberLabel: "02",
      duration: "00:18",
      title: "How I Stay Consistent",
      category: "PODCAST EDIT",
      imageUrl: "/reels/thumb2.jpg",
    },
    {
      id: 3,
      numberLabel: "03",
      duration: "00:11",
      title: "The actual thing that works",
      category: "DOCUMENTATION EDIT",
      imageUrl: "/reels/thumb4.jpg",
    },
    {
      id: 4,
      numberLabel: "04",
      duration: "00:18",
      title: "Educational Podcast Edit",
      category: "EDUCATIONAL TALK EDIT",
      imageUrl: "/reels/thumb5.jpg",
    },
  ];

  return (
    // ADJUSTMENT: Increased bottom padding (pb-14) to give more breathing room
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8 lg:gap-x-8 lg:gap-y-10">
          {reelsData.map((reel) => (
            <ReelCard key={reel.id} reelData={reel} />
          ))}
        </div>
      </div>
    </section>
  );
};
