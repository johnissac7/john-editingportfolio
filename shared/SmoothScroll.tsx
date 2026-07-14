"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    // Enable HTML-level smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";

    // Intercept anchor link clicks for customized offset smooth scrolling
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (anchor) {
        const href = anchor.getAttribute("href");
        if (href && href.startsWith("#")) {
          const targetElement = document.querySelector(href);
          if (targetElement) {
            e.preventDefault();
            
            // Calculate position with offset (to account for header bar height)
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = targetElement.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });

            // Update URL hash without jumping
            window.history.pushState(null, "", href);
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick, { capture: true });

    return () => {
      document.documentElement.style.scrollBehavior = "";
      document.removeEventListener("click", handleAnchorClick, { capture: true });
    };
  }, []);

  return null;
}
