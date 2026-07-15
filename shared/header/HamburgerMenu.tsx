interface HamburgerMenuProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

export default function HamburgerMenu({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: HamburgerMenuProps) {
  return (
    <button
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      className="flex flex-col justify-center items-end gap-[5px] w-6 h-6 z-50 focus:outline-none cursor-pointer"
      aria-label="Toggle Menu"
    >
      <span
        className={`w-6 h-[1.5px] bg-zinc-900 transition-transform duration-300 ${
          isMobileMenuOpen ? "rotate-45 translate-y-[3.5px]" : ""
        }`}
      />
      <span
        className={`w-4 h-[1.5px] bg-zinc-900 transition-transform duration-300 ${
          isMobileMenuOpen ? "-rotate-45 -translate-y-[3.5px] w-6" : ""
        }`}
      />
    </button>
  );
}