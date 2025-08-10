import Title from "./Title"
import { motion } from "framer-motion"
import { DatabaseBackup, Paintbrush, Palette } from "lucide-react";


import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgHTML from "../assets/techno/html.png";
import imgFIGMA from "../assets/techno/figma.png";
import imgNODE from "../assets/techno/node-js.png";
import imgTYPE from "../assets/techno/typescript.svg";
import imgTAILWIND from "../assets/techno/tailwind.png";
import imgADONIS from "../assets/techno/adonis.js.svg";

const skills = [
  { id: 1, name: "HTML", image: imgHTML },
  { id: 2, name: "CSS", image: imgCSS },
  { id: 3, name: "JavaScript", image: imgJS },
  { id: 4, name: "React", image: imgREACT },
  { id: 5, name: "Node.js", image: imgNODE },
  { id: 6, name: "Tailwind CSS", image: imgTAILWIND },
  { id: 7, name: "TypeScript", image: imgTYPE },
  { id: 8, name: "Figma", image: imgFIGMA },
  { id: 9, name: "Adonis.js", image: imgADONIS },
];

const experiences = [

    {
    id: 1,
    title: "Développeur Frontend",
    description: "Je suis un développeur frontend passionné, spécialisé dans la création d’interfaces web modernes, fluides et réactives. J’accorde une grande importance à l’expérience utilisateur en concevant des designs qui allient esthétisme et performance.",
    icon: <Palette className="text-red-500 scale-150" />,
  },
  {
    id: 2,
    title: "Développeur Backend",
    description: "Je maîtrise les fondamentaux du développement backend, avec un focus sur la conception de systèmes robustes, fiables et scalables. J’optimise la gestion des données pour assurer performance et sécurité tout en garantissant une logique métier claire et évolutive.",
    icon: <DatabaseBackup  className="text-red-500 scale-150" />,
  },
  {
    id: 3,
    title: "Passionné par l'UI/UX",
    description: "je m’efforce de concevoir des interfaces utilisateurs à la fois intuitives, esthétiques et fonctionnelles. Mon objectif est de créer des expériences qui captivent l’utilisateur dès le premier regard tout en assurant une navigation fluide et naturelle, grâce à une forte maîtrise des principes visuels et ergonomiques.",
    icon: <Paintbrush className="text-red-500 scale-150" />,
  },
  
];



const Experiences = () => {
  return (
    <div className="md:pb-20" id="Experiences">
      <div className="md:mt-10 mt-5 mb-8">
        <Title title="MES COMPÉTENCES" />
      </div>

      <div className="flex flex-col-reverse md:flex-row">
        <div className="flex flex-wrap gap-4 md:w-1/3 mt-4 md:mt-0">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              className="flex justify-center items-center flex-col"
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              variants={{
                initial: { opacity: 0, scale: 0.8 },
                whileInView: { opacity: 1, scale: 1 },
              }}
            >
              <div className="w-24 h-24 p-2 rounded-full justify-center items-center border-2 border-red-500">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="object-cover rounded-full h-full w-full"
                />
              </div>
              <span className="mt-2 text-sm">{skill.name}</span>
            </motion.div>
          ))}
        </div>

       <div className="md:ml-4 flex flex-col space-y-4 md:w-2/3">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            className="flex bg-base-200 p-5 md:p-4 rounded-xl shadow-lg items-center"
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: index * 0.3, duration: 0.7, ease: "easeOut" }}
            variants={{
              initial: { opacity: 0, y: 40 },
              whileInView: { opacity: 1, y: 0 },
            }}
          >
            <div className="mr-4 md:mr-6 text-3xl md:text-4xl">{experience.icon}</div>
            <div className="flex flex-col text-left font-poppins">
              <h2 className="text-xl font-bold mb-2">{experience.title}</h2>
              <p className="text-sm md:text-base text-justify leading-relaxed hyphens-auto">{experience.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      </div>
    </div>
  );
};

export default Experiences;
