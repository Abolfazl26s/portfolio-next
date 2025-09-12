"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // This function toggles the button's visibility based on the scroll position.
  const toggleVisibility = () => {
    // Show the button if the user has scrolled down more than 300px.
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // This function scrolls the page to the top smoothly.
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This enables the smooth scrolling animation.
    });
  };

  useEffect(() => {
    // Add a scroll event listener when the component mounts.
    window.addEventListener("scroll", toggleVisibility);

    // Clean up the event listener when the component unmounts.
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          // Animation properties
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-cyan-500 text-white rounded-full shadow-lg
                     hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400
                     transition-colors duration-200 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
