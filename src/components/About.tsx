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
        className="bg-base-300 relative 
                  bg-no-repeat bg-center
                  bg-[length:280px] md:bg-[length:350px] 
                  pb-10 md:pt-5 md:pb-20"
        style={{
          backgroundImage: "url(/graduationCap.svg)",
        }}
      >
        {/* Titre principal */}
        <div className="pt-10 justify-center">
          <Title title="À PROPOS DE MOI" />
        </div>

        {/* guillemets décoratives */}

        <span className="absolute top-12 left-[2%] text-[7rem] md:top-20 md:left-[12%] md:text-[10rem] text-white font-extrabold opacity-70 select-none leading-none z-0">
          "
        </span>
        <span className="absolute text-[7rem] right-[5%] -bottom-5 md:-bottom-10 md:right-[12%] md:text-[10rem] text-white font-extrabold opacity-70 select-none leading-none z-0">
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
