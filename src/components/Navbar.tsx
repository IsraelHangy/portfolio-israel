import { useState, useEffect } from "react";
import { Flame, Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [active, setActive] = useState<string>("Home");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const links = [
    { name: "Accueil", href: "#Home", id: "Home" },
    { name: "A propos", href: "#About", id: "About" },
    { name: "Compétences", href: "#Experiences", id: "Experiences" },
    { name: "Oeuvres", href: "#Projects", id: "Projects" },
    { name: "Contact", href: "#Contact", id: "Contact" },
  ];


  // Bloquer le scroll quand menu ouvert
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  // Appliquer le thème
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // ScrollSpy pour activer auto la section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120; // marge top pour compenser la navbar
      for (const link of links) {
        const section = document.querySelector(link.href) as HTMLElement;
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActive(link.name);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // activer au chargement
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-base-200 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center pt-2 p-2 md:p-4">
        {/* Logo */}
        <a href="#" className="flex items-center font-extrabold text-xl md:text-2xl">
          <div className="flex items-center gap-1 md:-ml-20">
            <Flame className="w-[30px] h-[30px]" strokeWidth={2} fill="currentColor" />
            <p className="font-poppins font-extrabold text-xl md:text-2xl text-base-content">
              GOOD<span className="text-red-500">DEV</span>
            </p>
          </div>
        </a>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-3 font-poppins md:-mr-20 items-center">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`btn btn-lg btn-ghost text-2xl font-poppins ${
                  active === link.name ? "text-red-500" : "text-base-content"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}

          {/* Interrupteur dark/light */}
          <li>
            <label className="swap swap-rotate md:ml-20">
              <input
                type="checkbox"
                onChange={() => setTheme(theme === "light" ? "dark" : "light")}
                checked={theme === "dark"}
              />
              <Sun className="swap-off fill-current w-9 h-9 text-base-content" />
              <Moon className="swap-on fill-current w-9 h-9 text-base-content" />
            </label>
          </li>
        </ul>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-2">
          <label className="swap swap-rotate mr-3">
            <input
              type="checkbox"
              onChange={() => setTheme(theme === "light" ? "dark" : "light")}
              checked={theme === "dark"}
            />
            <Sun className="swap-off fill-current w-7 h-7 text-base-content" />
            <Moon className="swap-on fill-current w-7 h-7 text-base-content" />
          </label>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col justify-center items-center w-10 h-10 gap-1 p-2"
          >
            <span
              className={`block w-8 h-2 bg-base-content transform transition-all duration-300 ease-in-out ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-8 h-2 bg-base-content transform transition-all duration-300 ease-in-out ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
