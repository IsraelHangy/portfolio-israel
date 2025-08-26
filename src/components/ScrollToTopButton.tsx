import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          aria-label="Remonter en haut"
          className="fixed right-5 bottom-7 md:right-10 md:bottom-10 
                     flex items-center justify-center 
                     w-[3rem] h-[3rem] md:w-16 md:h-16 
                     bg-transparent border border-gray-400 
                     shadow-[1px_1px_2px_rgba(0,0,0,0.30)] 
                     text-gray-700 hover:text-red-500 
                     hover:border-red-500 rounded-md"  // carré avec coins légèrement arrondis
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
        <ChevronUp className="text-red-500 w-[3rem] h-[3rem] md:w-12 md:h-12"/>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
