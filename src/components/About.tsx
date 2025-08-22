import Title from "./Title";
import { motion } from "framer-motion";

const aboutSections = [
  {
    id: 1,
    description: (
      <>
        <span className="text-red-500 font-semibold">Développeur Web Fullstack</span> passionné pour la création des solutions numériques innovantes et utiles, avec une forte appétence sur le UX/UI design et gestion de bases de données, j’apporte curiosité, adaptabilité et une forte passion pour la technologie avec une envie avide d’apprendre et de comprendre comment les choses fonctionnent.
      </>
    ),
  },
];

const About = () => {
  return (
    <section id="About" className="scroll-mt-28">
      <div
        className="bg-base-300 relative pb-10 md:pt-5 md:pb-20
                   before:content-[''] before:absolute before:inset-0
                   before:bg-[url('/graduationCap.svg')] 
                   before:bg-no-repeat before:bg-center 
                   before:bg-[length:280px] md:before:bg-[length:350px] 
                   before:opacity-25 md:before:opacity-20 before:z-0"
      >
        {/* Titre principal */}
        <div className="pt-10 justify-center relative z-10">
          <Title title="À PROPOS DE MOI" />
        </div>

        {/* Guillemets décoratives */}
        <span className="absolute top-12 left-[2%] text-[7rem] md:top-20 md:left-[13%] md:text-[10rem]  font-extrabold font-poppins opacity-70 select-none leading-none z-0">
          "
        </span>
        <span className="absolute text-[7rem] right-[5%] -bottom-10 md:-bottom-10 md:right-[13%] md:text-[10rem]  font-extrabold font-poppins opacity-70 select-none leading-none z-0">
          "
        </span>

        {/* Contenu principal */}
        <div className="p-10 relative z-10 flex justify-center">
          <div className="flex flex-col items-center md:w-1/2 space-y-6">
            {aboutSections.map((section) => (
              <motion.div
                key={section.id}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="font-poppins text-sm md:text-xl">
                  {section.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

