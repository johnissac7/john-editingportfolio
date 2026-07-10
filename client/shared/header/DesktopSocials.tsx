export default function DesktopSocials() {
  return (
    
    <div className="hidden md:flex items-center gap-5 border-l border-zinc-900/10 pl-5 h-5">
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
  );
}