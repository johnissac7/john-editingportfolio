export default function DesktopSocials() {
  return (
    <div className="hidden md:flex items-center gap-6 border-l border-zinc-900/10 pl-6 h-5 font-mono text-[11px] font-medium tracking-[0.15em] uppercase">
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-zinc-900/60 hover:text-zinc-900 transition-colors duration-300"
      >
        Instagram
      </a>
      <a
        href="https://vimeo.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-zinc-900/60 hover:text-zinc-900 transition-colors duration-300"
      >
        X
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-zinc-900/60 hover:text-zinc-900 transition-colors duration-300"
      >
        LinkedIn
      </a>
    </div>
  );
}
