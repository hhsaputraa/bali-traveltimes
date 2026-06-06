"use client";

import { useState, useEffect } from "react";

/**
 * Custom hook to monitor window scroll Y-position.
 * Useful for triggering header transitions, scroll-to-top buttons, or scroll spying.
 * @returns {number} The current vertical scroll position in pixels.
 */
export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Initialize position
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollPosition;
}
