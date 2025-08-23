import Title from "./Title";
import { motion } from "framer-motion";
import { CodeXml, DatabaseBackup, LandPlot, Palette } from "lucide-react";


import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgHTML from "../assets/techno/html.png";
import imgFIGMA from "../assets/techno/figma.png";
import imgNODE from "../assets/techno/node-js.png";
import imgTYPE from "../assets/techno/typescript.svg";
import imgTAILWIND from "../assets/techno/tailwind.png";
import imgWORDPRESS from "../assets/techno/wordpress.svg";
import imgVUE from "../assets/techno/vue.png";
import imgCANVA from "../assets/techno/canva.png";
import imgADONIS from "../assets/techno/adonis.js.svg";
import imgGit from "../assets/techno/git.png";
import imgGithub from "../assets/techno/github.png";
import imgVscode from "../assets/techno/vscode.png";

const skills = [
  { id: 1, name: "HTML", image: imgHTML },
  { id: 2, name: "CSS", image: imgCSS },
  { id: 3, name: "JavaScript", image: imgJS },
  { id: 4, name: "Tailwind CSS", image: imgTAILWIND },
  { id: 5, name: "Vue.js", image: imgVUE },
  { id: 6, name: "React.js", image: imgREACT },
  { id: 7, name: "TypeScript", image: imgTYPE },
  { id: 8, name: "Adonis.js", image: imgADONIS },
  { id: 9, name: "Node.js", image: imgNODE },
  { id: 10, name: "Wordpress", image: imgWORDPRESS },
  { id: 11, name: "Figma", image: imgFIGMA },
  { id: 12, name: "Canva", image: imgCANVA },
  { id: 13, name: "Git", image: imgGit },
  { id: 14, name: "Github", image: imgGithub },
  { id: 15, name: "Vscode", image: imgVscode },
];

const experiences = [
  {
    id: 1,
    title: "Développeur Frontend",
    description:
      "Je suis un développeur frontend passionné, spécialisé dans la création d’interfaces web modernes, fluides et réactives. J’accorde une grande importance à l’expérience utilisateur en concevant des designs qui allient esthétisme et performance.",
    icon: <CodeXml className="text-red-500 scale-150" />,
  },
  {
    id: 2,
    title: "Développeur Backend",
    description:
      "Je maîtrise les fondamentaux du développement backend, avec un focus sur la conception de systèmes robustes, fiables et scalables. J’optimise la gestion des données pour assurer performance et sécurité tout en garantissant une logique métier claire et évolutive.",
    icon: <DatabaseBackup className="text-red-500 scale-150" />,
  },
  {
    id: 3,
    title: "Passionné par l'UI/UX",
    description:
      "Je m’efforce de concevoir des interfaces utilisateurs à la fois intuitives, esthétiques et fonctionnelles. Mon objectif est de créer des expériences qui captivent l’utilisateur dès le premier regard tout en assurant une navigation fluide et naturelle, grâce à une forte maîtrise des principes visuels et ergonomiques.",
    icon: <Palette className="text-red-500 scale-150" />,
  },
  {
    id: 4,
    title: "Gestion de projet",
    description:
      "Capable de gérer efficacement des projets en solo ou en équipe en appliquant les méthodologies agiles Scrum et Kanban. Mon utilisation de GitHub Projects me permet de planifier, définir les priorités, m’adapter aux imprévus, m'organiser et suivre les tâches avec rigueur tout en assurant une progression continue.",
    icon: <LandPlot className="text-red-500 scale-150" />,
  },
];

const Experiences = () => {
  return (
    <div className="md:pb-20 scroll-mt-28" id="Experiences">
      <div className="md:mt-10 md:mb-20 mt-5 mb-8">
        <Title title="MES COMPÉTENCES" />
      </div>

      <div className="flex flex-col-reverse md:flex-row">
        {/* Bloc des skills */}
        <div className="flex flex-wrap gap-4 md:w-1/3 mt-4 md:mt-0">
          <p className="text-center font-normal text-xl w-full my-4 block md:hidden">
            Voici quelques technologies avec lesquelles j'ai travaillé <br /> récemment
          </p>

          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              className="flex justify-center items-center flex-col 
             hover:-translate-y-2 transition-transform duration-500 ease-in-out"
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: "easeOut",
              }}
              variants={{
                initial: { opacity: 0, scale: 0.8 },
                whileInView: { opacity: 1, scale: 1 },
              }}
            >
              <div
                className="w-20 h-20 md:w-24 md:h-24 rounded-full flex justify-center items-center 
               overflow-hidden cursor-pointer 
               shadow-[6px_3px_3px_rgba(0,0,0,0.35)] md:shadow-[5px_2px_6px_rgba(0,0,0,0.55)]
               transition-shadow "
              >
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="object-cover rounded-full  h-full w-full 
                 transition-transform duration-400 ease-in"
                />
              </div>

              <span className="mt-2 text-sm font-poppins font-medium  md:font-semibold">{skill.name}</span>
            </motion.div>

          ))}
        </div>

        {/* Bloc des expériences */}
        <div className="md:ml-20 flex flex-col space-y-4 md:w-[60%] w-full">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              className="flex flex-col md:flex-row items-center 
             bg-base-300 p-5 rounded-xl 
             shadow-[5px_5px_5px_rgba(0,0,0,0.35)] 
             md:hover:shadow-[10px_10px_10px_rgba(0,0,0,0.35)] 
             transition-shadow duration-500 md:cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Icône */}
              <div className="mb-3 md:mt-10">{experience.icon}</div>

              {/* Texte */}
              <div className="md:ml-4 text-center md:text-left font-poppins">
                <h2 className="text-xl md:text-2xl font-extrabold mb-2">{experience.title}</h2>
                <p className="text-sm md:text-xl font-poppins">{experience.description}</p>
              </div>
            </motion.div>

          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
