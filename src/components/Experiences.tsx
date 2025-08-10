import Title from "./Title"
import { motion } from "framer-motion"

import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgHTML from "../assets/techno/html.png";
import imgFIGMA from "../assets/techno/figma.png";
import imgNODE from "../assets/techno/node-js.png";
import imgTYPE from "../assets/techno/typescript.svg";
import imgTAILWIND from "../assets/techno/tailwind.png";
import imgADONIS from "../assets/techno/adonis.js.svg";

import snel from "../assets/companies/snel.png";
import academy from "../assets/companies/academy.png";

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
    role: "Developper Intern",
    company: "SNEL",
    period: "Aug 2023 - Sept 2023",
    description: [
      "Analyse des besoins et des exigences en Entreprise.",
      "Modélisation d'une base des données avec Oracle 10g.",
      "Conception et gestion d'une base de données sur SQL Server avec Oracle",
      "Conception et développement de l'appli desktop pour la gestion du parc Informatique avec WINDEV.",
    ],
    image: snel,
  },
  {
    id: 2,
    role: "Fullstack Developer",
    company: "Kadea Academy",
    period: "June 2024 - April 2025",
    description: [
      "Création des interfaces utilisateur web statiques et responsives",
      "Création des interfaces utilisateur web dynamiques et responsives",
      "Modélisation et Conception d'une base de données avec PostgreSQL",
      "Déploiement d’une application web",
      "Gestion de projets et Gestion des taches avec Git et GitHub",
      "Maquetter une application avec Figma",
      "Réaliser une interface utilisateur avec une solution de gestion de contenu ou e-commerce avec WordPress",
    ],
    image: academy,
  },
];

const Experiences = () => {
  return (
    <div className="md:pb-20" id="Experiences">
      <div className="md:mt-10 mt-5 mb-8">
        <Title title="Expériences & Technologies" />
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
              className="flex flex-col bg-base-200 p-5 md:p-4 rounded-xl shadow-lg"
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.3, duration: 0.7, ease: "easeOut" }}
              variants={{
                initial: { opacity: 0, y: 40 },
                whileInView: { opacity: 1, y: 0 },
              }}
            >
              <div className="flex items-center">
                <img
                  src={experience.image}
                  alt={experience.company}
                  className="object-cover h-10 w-10"
                />
                <div className="ml-4">
                  <h1 className="text-xl text-red-500 font-bold">
                    {experience.role} , {experience.company}
                  </h1>
                  <span className="text-sm">{experience.period}</span>
                </div>
              </div>
              <ul className="list-disc ml-16 mt-2 font-poppins">
                {experience.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
