"use client";

import React from "react";
import Image from "next/image";

export const About: React.FC = () => {
  return (
    <section id="about" className="relative w-full py-24 md:py-32 bg-[#F2EFF0] text-[#1D1D1D] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

        {/* =========================================
            MOBILE HERO HEADER: Section Labels & Title
            ========================================= */}
        <div className="block lg:hidden flex flex-col">
          {/* Pre-heading */}
          <div className="flex items-center gap-4 mb-5">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#B95D43]">
              About Me
            </span>
            <div className="w-12 h-[1px] bg-[#D2AEA3]"></div>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#B95D43]">
              01
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl font-bold tracking-tight text-[#1D1D1D]">
            Who I am ?
          </h2>
        </div>

        {/* =========================================
            LEFT COLUMN: DESKTOP IMAGE / MOBILE PROFILE AVATAR
            ========================================= */}
        <div className="lg:col-span-5 flex lg:block items-center gap-6">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-full lg:h-full lg:aspect-[4/5] md:lg:aspect-[3/4] rounded-full lg:rounded-[2rem] overflow-hidden shadow-sm flex-shrink-0 border border-black/5 lg:border-0">
            <Image
              src="/myself1.png"
              alt="JohnIssac Portrait"
              fill
              // MOBILE FIX: Replaced 'object-top' with 'object-[center_20%]'
              // This pans the focal point slightly down into the circle to prevent the top of the head from being cut off.
              // 'lg:object-center' ensures the desktop view remains perfectly centered and untouched.
              className="object-cover object-[center_20%] lg:object-center grayscale hover:grayscale-0 transition-all duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Mobile Profile Subtext */}
          <div className="block lg:hidden flex flex-col gap-0.5">
            <span className="text-base font-bold text-black tracking-tight">JohnIssac</span>
            <span className="text-xs font-semibold text-[#B95D43] uppercase tracking-wider font-mono">Editor & Designer</span>
          </div>
        </div>

        {/* =========================================
            RIGHT COLUMN: CONTENT SYSTEM
            ========================================= */}
        <div className="lg:col-span-7 flex flex-col lg:-mt-8">

          {/* Desktop Only Header (Hidden on Mobile) */}
          <div className="hidden lg:flex flex-col">
            <div className="flex items-center gap-4 mb-5">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#B95D43]">
                About Me
              </span>
              <div className="w-12 h-[1px] bg-[#D2AEA3]"></div>
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#B95D43]">
                01
              </span>
            </div>

            <h2 className="text-4xl font-bold tracking-tight text-[#1D1D1D] mb-6 flex items-center gap-4">
              <span>1.</span> Who I am ?
            </h2>
          </div>

          {/* Intro Paragraph */}
          <p className="text-[18px] md:text-[22px] leading-[1.6] text-[#222222] font-medium max-w-2xl mb-8 mt-2 lg:mt-0">
            I'm <span className="font-bold text-black">JohnIssac</span>, a
            19-year-old Video Editor and Motion Designer building stories that{" "}
            <span className="border-b-[2px] border-[#B95D43]/40 pb-[2px]">
              capture attention
            </span>
            ,{" "}
            <span className="border-b-[2px] border-[#B95D43]/40 pb-[2px]">
              evoke emotion
            </span>
            , and{" "}
            <span className="border-b-[2px] border-[#B95D43]/40 pb-[2px]">
              leave a lasting impact
            </span>
            .
          </p>

          {/* Two Column Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* Approach */}
            <div>
              <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#B95D43] mb-3">
                My Approach
              </h3>
              <p className="text-sm md:text-[15px] leading-[1.8] text-[#555555]">
                I transform raw ideas into engaging visuals through{" "}
                <span className="font-bold text-[#333333]">
                  thoughtful pacing
                </span>
                ,{" "}
                <span className="font-bold text-[#333333]">
                  motion graphics
                </span>
                , and{" "}
                <span className="font-bold text-[#333333]">
                  attention to detail
                </span>
                . Every project is an opportunity to learn, improve, and create
                something meaningful.
              </p>
            </div>

            {/* Drives Me */}
            <div>
              <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#B95D43] mb-3">
                What Drives Me
              </h3>
              <p className="text-sm md:text-[15px] leading-[1.8] text-[#555555]">
                I believe great editing is more than just effects—it's about
                telling stories that connect. I approach each project with{" "}
                <span className="font-bold text-[#333333]">curiosity</span>,{" "}
                <span className="font-bold text-[#333333]">dedication</span>,
                and a commitment to delivering work that truly stands out.
              </p>
            </div>
          </div>

          {/* Quote Block */}
          <div className="bg-[#EBE7E8] rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 mb-8 shadow-sm border border-black/5">
            {/* Quote Icon */}
            <div className="flex-shrink-0 text-[#B95D43]">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
              </svg>
            </div>
            {/* Quote Text & Signature */}
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 w-full">
              <p className="text-[15px] md:text-[16px] text-[#4A4A4A] italic leading-relaxed flex-1 text-center md:text-left">
                Editing is not just what I do,
                <br />
                it's how I express, connect, and inspire.
              </p>
              <div className="hidden md:block w-[1px] h-12 bg-[#D2AEA3]/50"></div>
              {/* Signature */}
              <div className="flex-shrink-0">
                <span
                  className="font-[cursive] text-2xl text-[#1D1D1D] opacity-80"
                  style={{ fontFamily: "Brush Script MT, cursive" }}
                >
                  JohnIssac.
                </span>
              </div>
            </div>
          </div>

          {/* =========================================
              CONTACT INFO ROW
              ========================================= */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-center w-full gap-5 sm:gap-8 border-t border-black/10 pt-8 mt-2">
            {/* Email */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-[#EBE7E8] border border-black/5 flex items-center justify-center flex-shrink-0 text-gray-500 shadow-sm">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-gray-400">Email</span>
                <span className="text-[11px] font-semibold text-[#1D1D1D]">jijohnissac@gmail.com</span>
              </div>
            </div>

            <div className="hidden sm:block w-[1px] h-8 bg-black/10"></div>

            {/* Contact */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-[#EBE7E8] border border-black/5 flex items-center justify-center flex-shrink-0 text-gray-500 shadow-sm">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-gray-400">Contact</span>
                <span className="text-[11px] font-semibold text-[#1D1D1D]">+91 9345269742</span>
              </div>
            </div>

            <div className="hidden sm:block w-[1px] h-8 bg-black/10"></div>

            {/* Location */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-[#EBE7E8] border border-black/5 flex items-center justify-center flex-shrink-0 text-gray-500 shadow-sm">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-gray-400">Location</span>
                <span className="text-[11px] font-semibold text-[#1D1D1D]">India</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};