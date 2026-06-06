"use client";

import { useSyncExternalStore } from "react";

/**
 * Custom hook to detect if a CSS media query matches (e.g. '(max-width: 768px)').
 * Uses React's useSyncExternalStore for subscription to prevent hydration mismatches and lint errors.
 * @param {string} query - The media query string to evaluate.
 * @returns {boolean} True if the media query matches, false otherwise.
 */
export function useMediaQuery(query) {
  return useSyncExternalStore(
    (callback) => {
      if (typeof window === "undefined") return () => {};
      const media = window.matchMedia(query);
      
      if (media.addEventListener) {
        media.addEventListener("change", callback);
      } else {
        media.addListener(callback);
      }
      
      return () => {
        if (media.removeEventListener) {
          media.removeEventListener("change", callback);
        } else {
          media.removeListener(callback);
        }
      };
    },
    () => {
      if (typeof window === "undefined") return false;
      return window.matchMedia(query).matches;
    },
    () => false // Server-side fallback snapshot
  );
}
