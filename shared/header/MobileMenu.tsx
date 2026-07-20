"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

export default function MobileMenu({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 w-full h-[100dvh] bg-[#ECE8E9] z-50 p-8 flex flex-col justify-between md:hidden"
        >
          {/* =========================================
              ADDED: Absolute Floating Close (X) Button
              ========================================= */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 w-11 h-11 flex items-center justify-center rounded-full bg-white/40 hover:bg-white/60 active:scale-95 transition-all border border-black/[0.04] shadow-sm z-50 focus:outline-none"
            aria-label="Close Menu"
          >
            <svg 
              className="w-5 h-5 text-zinc-900" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation Section */}
          <ol className="flex flex-col gap-8 mt-24 font-serif text-4xl font-light tracking-tight text-zinc-900">
            <li>
              <a 
                href="#about" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-baseline gap-4 hover:text-[#B95D43] transition-colors duration-300"
              >
                <span className="text-sm font-sans font-bold tracking-[0.2em] text-[#B95D43] font-mono">01</span>
                <span>About</span>
              </a>
            </li>
            <li>
              <a 
                href="#work" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-baseline gap-4 hover:text-[#B95D43] transition-colors duration-300"
              >
                <span className="text-sm font-sans font-bold tracking-[0.2em] text-[#B95D43] font-mono">02</span>
                <span>Work</span>
              </a>
            </li>
            <li>
              <a 
                href="#services" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-baseline gap-4 hover:text-[#B95D43] transition-colors duration-300"
              >
                <span className="text-sm font-sans font-bold tracking-[0.2em] text-[#B95D43] font-mono">03</span>
                <span>Services</span>
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-baseline gap-4 hover:text-[#B95D43] transition-colors duration-300"
              >
                <span className="text-sm font-sans font-bold tracking-[0.2em] text-[#B95D43] font-mono">04</span>
                <span>Contact</span>
              </a>
            </li>
          </ol>

          {/* Social Links Block */}
          <div className="border-t border-black/10 pt-8 pb-6 flex flex-col gap-4">
            <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-zinc-500">
              Connect
            </span>
            {/* UPDATED: Increased gap and sized all icons to a bold w-6 h-6 */}
            <div className="flex items-center justify-start gap-8 z-50">
              {/* Mail / Email Link */}
              <a
                href="mailto:jijohnissac@gmail.com"
                className="text-zinc-900/60 hover:text-zinc-900 transition-colors duration-300 select-none"
                aria-label="Email JohnIssac"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>

              {/* WhatsApp Link */}
              <a
                href="https://wa.me/919345269742"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-900/60 hover:text-zinc-900 transition-colors duration-300 select-none"
                aria-label="WhatsApp"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                </svg>
              </a>

              {/* Instagram Link */}
              <a
                href="https://www.instagram.com/_spi.d.er?igsh=bnd5N3luZHZhODN6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-900/60 hover:text-zinc-900 transition-colors duration-300 select-none"
                aria-label="Instagram"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              {/* LinkedIn Link */}
              <a
                href="https://www.linkedin.com/in/john-issac-3a916041a?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-900/60 hover:text-zinc-900 transition-colors duration-300 select-none"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}