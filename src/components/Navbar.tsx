import { useState } from "react";
import { Flame } from "lucide-react";

const Navbar = () => {
  const [active, setActive] = useState<string>("Home");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const links = [
    { name: "Accueil", href: "#Home" },
    { name: "A propos", href: "#About" },
    { name: "Compétences", href: "#Experiences" },
    { name: "Oeuvres", href: "#Projects" },
  ];

  return (
    <div className="md:fixed md:top-0 md:left-0 md:w-full z-50 bg-base-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-2 md:p-4">
        <a href="#" className="flex items-center font-extrabold text-xl md:text-2xl">
          <Flame className="mr-2 w-[30px] h-[30px] md:w-[40px] md:h-[40px]" strokeWidth={2} fill="white" color="white" />
          BAKI<span className="font-extrabold text-red-500">DEV</span>
        </a>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-3 font-poppins">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`btn btn-lg btn-ghost text-xl ${active === link.name ? "text-red-500" : ""}`}
                onClick={() => setActive(link.name)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col justify-center items-center w-8 h-8 space-y-1"
          >
            <span className={`block w-8 h-0.5 bg-black transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block w-8 h-0.5 bg-black transition-opacity ${menuOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-8 h-0.5 bg-black transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col space-y-2 p-4 font-poppins bg-base-100">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`btn btn-lg btn-ghost w-full text-left ${active === link.name ? "text-red-500" : ""}`}
                onClick={() => {
                  setActive(link.name);
                  setMenuOpen(false); 
                }}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
