import { useState, useEffect } from "react";
import { Flame, Moon, Sun } from "lucide-react";
import cvPDF from "../assets/CV_Israel.pdf";

const Navbar = () => {
  const [active, setActive] = useState<string>("Home");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");


  const links = [
    { name: "Accueil", href: "#Home" },
    { name: "A propos", href: "#About" },
    { name: "Compétences", href: "#Experiences" },
    { name: "Oeuvres", href: "#Projects" },
  ];

  const mobileLinks = [
    { name: "A propos", href: "#About" },
    { name: "Compétences", href: "#Experiences" },
    { name: "Oeuvres", href: "#Projects" },
    { name: "Obtenir mon CV", href: cvPDF, external: true },
    { name: "Contactez-moi", href: "#Contact" },
  ];

  // Bloquer le scroll 
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  // Appliquer le thème 
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-base-200 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center pt-2 p-2 md:p-4">
        {/* Logo */}
        <a href="#" className="flex items-center font-extrabold text-xl md:text-2xl">
          <div className="flex items-center gap-1 md:-ml-20">
            <Flame
              className="w-[30px] h-[30px] "
              strokeWidth={2}
              fill="currentColor"
              color="currentColor"
            />
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
                className={`btn btn-lg btn-ghost text-2xl font-poppins ${active === link.name ? "text-red-500" : "text-base-content"}`}
                onClick={() => setActive(link.name)}
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
              {/* Soleil = light */}
              <Sun
                className="swap-off fill-current w-9 h-9 text-base-content"
              />

              {/* Lune = dark */}
              <Moon
                className="swap-on fill-current w-9 h-9 text-base-content"
              />

            </label>
          </li>
        </ul>

        {/* Mobile : interrupteur + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <label className="swap swap-rotate mr-3">
            <input
              type="checkbox"
              onChange={() => setTheme(theme === "light" ? "dark" : "light")}
              checked={theme === "dark"}
            />
            <Sun
              className="swap-off fill-current w-7 h-7 text-base-content"
            />

            <Moon
              className="swap-on fill-current w-7 h-7 text-base-content"
            />
          </label>

          {/* Hamburger mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col justify-center items-center w-10 h-10 gap-1 p-2"
          >
            <span
              className={`block w-8 h-2 bg-base-content transform transition-all duration-300 ease-in-out ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            ></span>
            <span
              className={`block w-8 h-2 bg-base-content transform transition-all duration-300 ease-in-out ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            ></span>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        className={`md:hidden fixed top-50 left-0 w-full h-[calc(100%-40px)] bg-base-200 flex flex-col items-center justify-center transform transition-all duration-500 ease-in-out ${menuOpen ? "translate-y-0 opacity-100 visible" : "-translate-y-full opacity-0 invisible"}`}
      >
        <ul className="flex flex-col space-y-8 font-poppins text-3xl font-bold text-center">
          {mobileLinks.map((link) => (
            <li key={link.name}>
              {link.external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition text-base-content hover:text-red-400"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              ) : (
                <a
                  href={link.href}
                  className={`transition ${active === link.name ? "text-red-500" : "text-base-content"} hover:text-red-400`}
                  onClick={() => {
                    setActive(link.name);
                    setMenuOpen(false);

                    const section = document.querySelector(link.href);
                    if (section) {
                      const yOffset = 70;
                      const y =
                        section.getBoundingClientRect().top +
                        window.pageYOffset -
                        yOffset;
                      window.scrollTo({ top: y, behavior: "smooth" });
                    }
                  }}
                >
                  {link.name}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
