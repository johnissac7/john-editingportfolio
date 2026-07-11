"use client";

import React from "react";

export const ContactSection: React.FC = () => {
  return (
    <section className="bg-[#F2EFF0] py-24 md:py-32 px-6 lg:px-16 xl:px-24 text-zinc-950 overflow-hidden">
      <div className="max-w-[1400px] mx-auto w-full">
        {/* Header - Editorial Left Alignment */}
        <div className="mb-20">
          <p className="flex items-center gap-3 text-[11px] font-bold tracking-[0.25em] uppercase text-zinc-400 mb-6">
            LET'S CONNECT — 07
          </p>
          <h2 className="text-4xl md:text-[60px] font-bold tracking-tighter leading-[1.1] text-zinc-900 max-w-3xl">
            Let's create something worth watching
            <span className="text-[#B95D43]">.</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left Column: Personal Intro */}
          <div className="lg:col-span-6">
            <p className="text-lg md:text-xl text-zinc-600 leading-relaxed max-w-lg mb-10">
              Whether you have an idea, a project, or just want to connect, I'd
              love to hear from you. Let's discuss how we can tell your story
              through movement and rhythm.
            </p>

            <a
              href="mailto:john@example.com"
              className="inline-flex items-center px-8 py-4 rounded-full bg-zinc-900 text-white text-[13px] font-bold tracking-[0.1em] uppercase hover:bg-[#B95D43] transition-colors duration-300"
            >
              Start a Project
            </a>
          </div>

          {/* Right Column: Contact Details */}
          <div className="lg:col-span-6 flex flex-col gap-10">
            <div className="space-y-8">
              {/* Email */}
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400 mb-2">
                  Email
                </p>
                <a
                  href="mailto:hello@johnissac.com"
                  className="text-xl md:text-2xl font-medium text-zinc-950 hover:text-[#B95D43] transition-colors"
                >
                  hello@johnissac.com
                </a>
              </div>

              {/* Phone */}
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400 mb-2">
                  Phone
                </p>
                <a
                  href="tel:+910000000000"
                  className="text-xl md:text-2xl font-medium text-zinc-950"
                >
                  +91 00000 00000
                </a>
              </div>

              {/* Location */}
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400 mb-2">
                  Location
                </p>
                <p className="text-xl md:text-2xl font-medium text-zinc-950">
                  Based in India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-32 pt-16 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[12px] font-medium text-zinc-500 uppercase tracking-[0.1em]">
            Currently available for freelance projects.
          </p>
          <p className="text-[12px] font-medium text-zinc-400">
            © {new Date().getFullYear()} John Issac.
          </p>
        </div>
      </div>
    </section>
  );
};
