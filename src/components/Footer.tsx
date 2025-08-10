import { motion, easeOut } from "framer-motion";
import { Container, Facebook, Github, Linkedin, Twitter } from "lucide-react";

const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: easeOut }  // <-- ici
  },
};

const Footer = () => {
  return (
    <motion.footer
      className="footer footer-center px-5 pb-5 py-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={footerVariants}
    >
      <aside>
        <Container className="w-8 h-8 md:w-10 md:h-10 " />
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
    </motion.footer>
  );
};

export default Footer;
