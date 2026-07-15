"use client";

import React from "react";

const workflowSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "I first understand the creator's style, audience, and the message they want to deliver.",
  },
  {
    number: "02",
    title: "Edit",
    description:
      "I focus on storytelling, pacing, and clean visuals before adding any effects.",
  },
  {
    number: "03",
    title: "Refine",
    description:
      "I improve the flow with motion graphics, sound design, and small details that make the edit feel complete.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "I review everything carefully and deliver the final video, ready to publish.",
  },
];

export const HowIWorkSection: React.FC = () => {
  return (
    <section id="services"className="bg-[#F2EFF0] pt-12 md:pt-14 pb-20 md:pb-24 px-6 lg:px-16 xl:px-24 text-zinc-950 overflow-hidden">
      <div className="max-w-[1400px] mx-auto w-full">
        {/* Header - Left Aligned */}
        <div className="flex flex-col mb-20 max-w-2xl">
          <p className="flex items-center gap-3 text-[11px] font-bold tracking-[0.25em] uppercase text-zinc-400 mb-6">
            MY PROCESS — 04
          </p>
          <h2 className="text-4xl md:text-[60px] font-bold tracking-tighter leading-[1.1] text-zinc-900 mb-6">
            How I Work<span className="text-[#B95D43]">.</span>
          </h2>
          <p className="text-lg md:text-[22px] leading-relaxed text-zinc-600 font-medium">
            A simple process focused on creating edits that connect with people.
          </p>
        </div>

        {/* Workflow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {workflowSteps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col border-l border-black/10 pl-6"
            >
              <span className="text-[11px] font-bold text-[#B95D43] tracking-[0.2em] font-mono mb-4 block">
                {step.number}
              </span>
              <h3 className="text-xl font-bold tracking-tight text-zinc-900 mb-3">
                {step.title}
              </h3>
              <p className="text-[15px] leading-[1.7] text-zinc-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Closing Thought - TIGHTENED SPACING */}
        {/* Changed 'mt-32 pt-16' to 'mt-20 pt-10' to reduce the excessive gap */}
        <div className="mt-20 pt-10 border-t border-black/5 max-w-2xl">
          <p className="text-lg md:text-xl font-medium text-zinc-500 italic">
            Great edits don't happen by accident. They’re built through
            iteration and attention to every frame.
          </p>
        </div>
      </div>
    </section>
  );
};
