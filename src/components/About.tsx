import Title from "./Title";
import image from "../assets/imageIsraelToge.webp";
import { ScanFace } from "lucide-react";
import { motion } from "framer-motion";

const aboutSections = [
  {
    id: 1,
    title: "Qui suis-je ?",
    description: (
      <>
        <span className="text-red-500 font-semibold">Développeur Web Fullstack</span> passionné pour la création des solutions numériques innovantes et utiles, avec une forte appétence sur le UX/UI design et gestion de bases de données, j’apporte curiosité, adaptabilité et une forte passion pour la technologie avec une envie avide d’apprendre et de comprendre comment les choses fonctionnent. Avec un esprit pratique et collaboratif, je contribue avec énergie, rigueur et créativité à chaque projet dans lequel je m’investis.
      </>
    ),
    icon: <ScanFace className="text-red-500 scale-150" />,
  },
];

const About = () => {
  return (
    <div
      className="bg-base-300 p-10 md:pb-20 relative scroll-mt-28"
      id="About"
    >

      {/* Grandes guillemets décoratives */}
      <span className="hidden md:block absolute top-20 left-[12%] text-[10rem] text-white font-extrabold opacity-70 select-none leading-none z-0">
        “
      </span>
      <span className="hidden md:block absolute -bottom-10 right-[8%] text-[10rem] text-white font-extrabold opacity-70 select-none leading-none z-0">
        ”
      </span>

      <div className="mb-8 relative z-10">
        <Title title="À PROPOS DE MOI" />
      </div>

      <div className="flex justify-center items-center relative z-10">
        {/* Image */}
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <img
            src={image}
            alt="Photo de profil"
            className="w-[32rem] h-[32rem] mr-20 rounded-xl object-cover"
          />
        </motion.div>

        {/* Carte About avec icône animée */}
        <div className="md:ml-4 flex flex-col space-y-4 md:w-1/3">
          {aboutSections.map((section, index) => (
            <motion.div
              key={section.id}
              className="flex flex-col items-center bg-base-100 p-5 rounded-xl shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Icône animée */}
              <motion.div
                className="mb-3 flex justify-center"
                animate={{
                  rotate: [0, 15, -15, 15, 0],
                  scale: [1, 1.1, 1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              >
                {section.icon}
              </motion.div>

              {/* Texte */}
              <div className="text-center font-poppins">
                <h2 className="text-xl md:text-2xl font-bold mb-3">{section.title}</h2>
                <p className="text-sm md:text-lg font-poppins">{section.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
