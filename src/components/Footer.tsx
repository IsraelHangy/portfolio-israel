import { motion, easeOut } from "framer-motion";
import { Flame, Facebook, Github, Linkedin, Twitter, ArrowUp, Mail, Phone, MapPin } from "lucide-react";

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
      className="px-5 md:px-[13%] md:mt-10 my-5 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={footerVariants}
    >
      <div className="flex flex-col md:flex-row justify-between w-full items-center md:items-start gap-6 md:gap-0 text-center md:text-left">
        
        {/* Logo + Contact */}
        <div className="flex flex-col items-center md:items-start">
          <a href="#">
            <div className="flex items-center pb-5 gap-1">
              <Flame
                className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]"
                strokeWidth={2}
                fill="white"
                color="white"
              />
              <p className="font-poppins font-extrabold text-xl md:text-2xl">
                GOOD<span className="text-red-500 pr-5">DEV</span>
              </p>
            </div>
          </a>

          <p className="font-poppins font-extrabold text-lg md:text-2xl">
            CONTACTEZ-MOI
          </p>
          <div className="flex flex-col md:pt-2 pt-1 gap-2 text-center md:text-left">
            <div className="text-sm md:text-xl font-poppins flex items-center gap-2 justify-center md:justify-start">
              <Mail className="hidden md:inline-block w-6 h-6 text-red-500" />
              israelngeve950@gmail.com
            </div>
            <div className="text-sm md:text-xl font-poppins flex items-center gap-2 justify-center md:justify-start">
              <Phone className="hidden md:inline-block w-6 h-6 text-red-500" />
              +243974115802
            </div>
            <div className="text-sm md:text-xl font-poppins flex items-center gap-2 justify-center md:justify-start">
              <MapPin className="hidden md:inline-block w-6 h-6 text-red-500" />
              Kinshasa, <span className="font-semibold text-red-500">RDC</span>
            </div>
          </div>
        </div>

        {/* Suivez-moi */}
        <div className="flex flex-col items-center md:items-end gap-1 md:pt-10">
          <p className="font-poppins font-extrabold text-lg md:text-2xl">
            SUIVEZ-MOI SUR
          </p>
          <div className="flex gap-6 md:pt-2 pt-1">
            <a href="https://x.com/IsraelNgeve?t=RSze1kboTwadGK35AsIcjg&s=09" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-6 h-6 md:w-8 md:h-8 hover:text-red-500 transition" />
            </a>
            <a href="https://github.com/IsraelHangy?tab=repositories" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6 md:w-8 md:h-8 hover:text-red-500 transition" />
            </a>
            <a href="https://www.facebook.com/israel.hangy" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-6 h-6 md:w-8 md:h-8 hover:text-red-500 transition" />
            </a>
            <a href="https://www.linkedin.com/in/israel-ngevessisse" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 md:w-8 md:h-8 hover:text-red-500 transition" />
            </a>
          </div>
        </div>
      </div>

      <div className="pt-8 md:pt-20 text-center font-poppins text-xs md:text-xl opacity-80">
        <p>Designed & Built by Israel Hangy</p>
        <p>Copyright © {new Date().getFullYear()}</p>
      </div>

      <button
        onClick={scrollToTop}
        aria-label="Remonter en haut"
        className="absolute right-3 bottom-0 md:right-20 md:bottom-30 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-red-600 text-white shadow-lg hover:bg-red-800 transition"
      >
        <ArrowUp className="w-6 h-6 md:w-7 md:h-7" />
      </button>
    </motion.footer>
  );
};

export default Footer;
