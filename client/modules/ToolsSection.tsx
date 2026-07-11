"use client";

import React from "react";
import Image from "next/image";

const toolsData = [
  { name: "Premiere Pro", label: "EDITING", icon: "/icons/pr.png" },
  { name: "After Effects", label: "MOTION", icon: "/icons/ae.png" },
  { name: "Photoshop", label: "DESIGN", icon: "/icons/ps.png" },
  { name: "Illustrator", label: "VECTOR", icon: "/icons/ai.png" },
  { name: "DaVinci Resolve", label: "COLOR", icon: "/icons/davinci.png" },
];

export const ToolsSection: React.FC = () => {
  return (
    <section className="bg-[#F2EFF0] py-20 px-6 lg:px-16 xl:px-24">
      <div className="max-w-[1400px] mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col mb-12">
          <p className="flex items-center gap-3 text-[11px] font-bold tracking-[0.25em] uppercase text-zinc-400 mb-4">
            MY TOOLS — <span className="text-zinc-950 font-black">06</span>
          </p>
          <p className="text-zinc-600 text-lg md:text-xl font-medium">
            The essential tools that power my creativity and workflow.
          </p>
        </div>

        {/* Divider */}
        <hr className="border-black/5 mb-16" />

        {/* Tool Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {toolsData.map((tool, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-[#EDEAEA] rounded-3xl p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.5),0_10px_20px_rgba(0,0,0,0.03)] border border-black/5"
            >
              {/* Icon Container */}
              <div className="relative w-16 h-16 mb-6 shadow-lg rounded-2xl overflow-hidden">
                <Image
                  src={tool.icon}
                  alt={tool.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Title & Category */}
              <h4 className="text-zinc-950 font-bold text-sm md:text-base mb-3 tracking-tight">
                {tool.name}
              </h4>
              <p className="text-[#B95D43] text-[10px] font-bold tracking-[0.2em] mb-4">
                {tool.label}
              </p>

              {/* Decorative Line */}
              <div className="w-6 h-[2px] bg-[#B95D43]/50 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
