import Link from "next/link";

interface MobileMenuProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

export default function MobileMenu({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-0 w-full h-[100dvh] bg-[#ECE8E9] z-40 p-8 flex flex-col justify-between transition-transform duration-500 ease-in-out md:hidden ${
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Navigation Section */}
      <div className="flex flex-col gap-8 mt-24 font-serif text-4xl font-light tracking-tight text-zinc-900">
        <Link href="#work" onClick={() => setIsMobileMenuOpen(false)}>
          Work
        </Link>
        <Link href="#services" onClick={() => setIsMobileMenuOpen(false)}>
          Services
        </Link>
        <Link href="#about" onClick={() => setIsMobileMenuOpen(false)}>
          About
        </Link>
        <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
          Contact
        </Link>
      </div>

      {/* SWAPPED: Pure Social Links Block (Available indicator completely removed) */}
      <div className="border-t border-black/10 pt-8 pb-4 flex items-center justify-start gap-8 z-50">
        {/* Mail / Email Link */}
        <a
          href="mailto:jijohnissac@gmail.com"
          className="text-zinc-900/60 hover:text-zinc-900 transition-colors duration-300 select-none"
          aria-label="Email JohnIssac"
        >
          <svg
            className="w-4 h-4"
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

        {/* Instagram Link */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-900/60 hover:text-zinc-900 transition-colors duration-300 select-none"
          aria-label="Instagram"
        >
          <svg
            className="w-4 h-4"
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
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-900/60 hover:text-zinc-900 transition-colors duration-300 select-none"
          aria-label="LinkedIn"
        >
          <svg
            className="w-4 h-4"
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
  );
}
