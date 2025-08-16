import { useState } from "react";
import { Flame } from "lucide-react";

const Navbar = () => {
  const [active, setActive] = useState<string>("Home");

  const links = [
    { name: "Accueil", href: "#Home" },
    { name: "A propos", href: "#About" },
    { name: "Compétences", href: "#Experiences" },
    { name: "Oeuvres", href: "#Projects" },
  ];

  return (
    <div className="md:fixed md:top-0 md:left-0 md:w-full z-50 bg-base-100">
      <div className="max-w-7xl mx-auto flex justify-center md:justify-between items-center p-2 md:p-4">
        <a href="#" className="flex items-center font-extrabold text-xl md:text-2xl md:pt-2">
          <Flame className="mr-2 w-[30px] h-[30px] md:w-[40px] md:h-[40px]" strokeWidth={2} fill="white" color="white" />
          BAKI<span className="font-extrabold text-red-500">DEV</span>
        </a>

        <ul className="hidden md:flex space-x-3 font-poppins">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`btn btn-lg btn-ghost text-xl ${
                  active === link.name ? "text-red-500" : ""
                }`}
                onClick={() => setActive(link.name)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
