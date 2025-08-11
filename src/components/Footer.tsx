import { motion, easeOut } from "framer-motion";
import { Flame, Facebook, Github, Linkedin, Twitter, ArrowUp } from "lucide-react";

const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: easeOut }
  },
};

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      className="footer footer-center px-5 pb-5 md:my-10 my-5  relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={footerVariants}
    >
    <aside>
      <Flame
        size={30} 
        strokeWidth={2}
        fill="white" 
        color="white" 
      />
      <p className="font-bold text-xl md:text-2xl">
        BAKI
        <span className="text-red-500">DEV</span>
      </p>
      <p className="font-poppins md:text-base text-xs">
        Copyright © {new Date().getFullYear()} - Tous droits réservés
      </p>
    </aside>


      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://x.com/IsraelNgeve?t=RSze1kboTwadGK35AsIcjg&s=09" target="_blank" rel="noopener noreferrer">
            <Twitter className="w-6 h-6 md:w-8 md:h-8 text-current hover:text-red-500" />
          </a>
          <a href="https://github.com/IsraelHangy?tab=repositories" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6 md:w-8 md:h-8 text-current hover:text-red-500" />
          </a>
          <a href="https://www.facebook.com/israel.hangy" target="_blank" rel="noopener noreferrer">
            <Facebook className="w-6 h-6 md:w-8 md:h-8 text-current hover:text-red-500" />
          </a>
          <a href="https://www.linkedin.com/in/israel-ngevessisse?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6 md:w-8 md:h-8 text-current hover:text-red-500" />
          </a>
        </div>
      </nav>

      {/* Bouton flèche remonter */}
      <button
        onClick={scrollToTop}
        aria-label="Remonter en haut"
        className="absolute right-3 bottom-0 md:right-14 md:bottom-14 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-red-600 md:bg-red-700 text-white shadow-lg hover:bg-red-900 transition"
      >
        <ArrowUp className="w-5 h-5 md:w-6 md:h-6" />
      </button>
    </motion.footer>
  );
};

export default Footer;
