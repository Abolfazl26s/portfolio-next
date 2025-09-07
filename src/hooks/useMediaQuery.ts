"use client";

import { useState, useEffect } from "react";

/**
 * A custom hook to check if a CSS media query matches the current screen size.
 * It listens for changes and updates the component accordingly.
 * @param query The media query string to match (e.g., '(max-width: 768px)').
 * @returns A boolean indicating whether the query matches.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    // Ensure window object is available (runs only on the client)
    const mediaQueryList = window.matchMedia(query);

    // Handler to update state when the media query match status changes
    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Set the initial state
    setMatches(mediaQueryList.matches);

    // Add listener for changes
    mediaQueryList.addEventListener("change", handleChange);

    // Cleanup function to remove the listener when the component unmounts
    return () => {
      mediaQueryList.removeEventListener("change", handleChange);
    };
  }, [query]); // Re-run the effect only if the query string changes

  return matches;
}
