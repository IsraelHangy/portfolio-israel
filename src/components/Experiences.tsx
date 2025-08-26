import { useState } from "react";
import Title from "./Title";
import { motion } from "framer-motion";
import { CodeXml, Server, DatabaseBackup, LandPlot, Palette, Wrench } from "lucide-react";

// === Import images ===
import imgHTML from "../assets/techno/html.png";
import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgTS from "../assets/techno/typescript.svg";
import imgREACT from "../assets/techno/react.png";
import imgVUE from "../assets/techno/vue.png";
import imgTAILWIND from "../assets/techno/tailwind.png";

import imgNODE from "../assets/techno/node-js.png";
import imgADONIS from "../assets/techno/adonis.js.svg";
import imgPHP from "../assets/techno/php.png";
import imgWORDPRESS from "../assets/techno/wordpress.svg";

import imgPostgres from "../assets/techno/postgres.png";
import imgMysql from "../assets/techno/mysql.png";
import imgOracle from "../assets/techno/oracle.png";

import imgFIGMA from "../assets/techno/figma.svg";
import imgCANVA from "../assets/techno/canva.png";

import imgGit from "../assets/techno/git.svg";
import imgGithub from "../assets/techno/github.png";
import imgVscode from "../assets/techno/vscode.png";
import imgWindsurf from "../assets/techno/windsurf.svg";
import imgNetlify from "../assets/techno/netlify.svg";


// === Données des skills ===
const skills = [
  { id: 1, name: "HTML", image: imgHTML, category: "Frontend", color: "#E34F26", level: "Expert" },
  { id: 2, name: "CSS", image: imgCSS, category: "Frontend", color: "#2196f3", level: "Avancé" },
  { id: 3, name: "JavaScript", image: imgJS, category: "Frontend", color: "#FBBF24", level: "Intermédiaire" },
  { id: 4, name: "TypeScript", image: imgTS, category: "Frontend", color: "#3178C6", level: "Avancé" },
  { id: 5, name: "React.js", image: imgREACT, category: "Frontend", color: "#61DAFB", level: "Intermédiaire" },
  { id: 6, name: "Vue.js", image: imgVUE, category: "Frontend", color: "#42b883", level: "Intermédiaire" },
  { id: 7, name: "Tailwind CSS", image: imgTAILWIND, category: "Frontend", color: "#38BDF8", level: "Expert" },

  { id: 8, name: "Node.js", image: imgNODE, category: "Backend", color: "#68A063", level: "Avancé" },
  { id: 9, name: "Adonis.js", image: imgADONIS, category: "Backend", color: "#5a46ff", level: "Avancé" },
  { id: 10, name: "PHP", image: imgPHP, category: "Backend", color: "#777BB4", level: "Intermédiaire" },
  { id: 11, name: "WordPress", image: imgWORDPRESS, category: "Backend", color: "#21759B", level: "Intermédiaire" },

  { id: 12, name: "PostgreSQL", image: imgPostgres, category: "Bases de données", color: "#336791", level: "Avancé" },
  { id: 13, name: "MySQL", image: imgMysql, category: "Bases de données", color: "#00758F", level: "Avancé" },
  { id: 14, name: "Oracle", image: imgOracle, category: "Bases de données", color: "#ca4b39", level: "Intermédiaire" },

  { id: 15, name: "Figma", image: imgFIGMA, category: "Design", color: "#F24E1E", level: "Avancé" },
  { id: 16, name: "Canva", image: imgCANVA, category: "Design", color: "#00C4CC", level: "Avancé" },

  { id: 17, name: "Git", image: imgGit, category: "Outils", color: "#F1502F", level: "Avancé" },
  { id: 18, name: "Github", image: imgGithub, category: "Outils", color: "#000000", level: "Avancé" },
  { id: 19, name: "VS Code", image: imgVscode, category: "Outils", color: "#007ACC", level: "Expert" },
  { id: 20, name: "Windsurf", image: imgWindsurf, category: "Outils", color: "#58e5bb", level: "Expert" },
  { id: 21, name: "Netlify", image: imgNetlify, category: "Outils", color: "#05bdba", level: "Avancé" },
];

const experiences = [
  {
    id: 1, title: "Développeur Frontend",
    description: "Je suis un développeur frontend passionné, spécialisé dans la création d’interfaces web modernes, fluides et réactives. J’accorde une grande importance à l’expérience utilisateur en concevant des designs qui allient esthétisme et performance.",
    icon: <CodeXml className="text-red-500 scale-150 md:w-7 md:h-7" />
  },
  {
    id: 2, title: "Développeur Backend",
    description: "Je maîtrise les fondamentaux du développement backend, avec un focus sur la conception de systèmes robustes, fiables et scalables. J’optimise la gestion des données pour assurer performance et sécurité tout en garantissant une logique métier claire et évolutive.",
    icon: <Server className="text-red-500 scale-150 md:w-7 md:h-7" />
  },
  {
    id: 3,
    title: "Gestion de Bases de données",
    description: "Capable de concevoir, gérer et optimiser des bases de données relationnelles telles que PostgreSQL, MySQL et Oracle. J’assure la structuration efficace des données, la sécurité et la performance, tout en garantissant leur intégrité et leur scalabilité.",
    icon: <DatabaseBackup className="text-red-500 scale-150 md:w-7 md:h-7" />
  },
  {
    id: 4, title: "Design & Prototypage",
    description: "Je crée des maquettes et prototypes interactifs pour donner vie aux idées avant le développement. J’utilise des outils comme Figma et Canva pour concevoir des interfaces esthétiques et ergonomiques, en mettant l’accent sur l’expérience utilisateur et la cohérence visuelle.",
    icon: <Palette className="text-red-500 scale-150 md:w-7 md:h-7" />
  },
  {
    id: 5, title: "Gestion de Projet",
    description: "Capable de gérer efficacement des projets en solo ou en équipe en appliquant les méthodologies agiles Scrum et Kanban. Grâce à Git pour le suivi des versions et GitHub Projects pour organiser et prioriser les tâches, je planifie, m’adapte aux imprévus et assure une progression continue tout en gardant une traçabilité complète du projet.",
    icon: <LandPlot className="text-red-500 scale-150 md:w-7 md:h-7" />
  },
  {
    id: 6, title: "Outils de développement",
    description: "J'utilise des outils modernes pour le développement, le versioning et le déploiement. Cela inclut VSCode et Windsurf pour coder efficacement, Git et GitHub pour le suivi des versions, Vite pour le bundling rapide et Netlify/Vercel pour le déploiement continu et performant des applications web.",
    icon: <Wrench className="text-red-500 scale-150 md:w-7 md:h-7" />
  },
];


const categories = ["Toutes", "Frontend", "Backend", "Bases de données", "Design", "Projet", "Outils"];

// === Experiences Component ===
const Experiences = () => {
  const [activeCategory, setActiveCategory] = useState("Toutes");

  const filteredSkills =
    activeCategory === "Toutes"
      ? skills
      : activeCategory === "Projet"
        ? skills.filter(skill => ["Git", "Github"].includes(skill.name))
        : skills.filter(skill => skill.category === activeCategory);

  const filteredExperiences =
    activeCategory === "Toutes"
      ? experiences
      : experiences.filter((exp) => categories.includes(activeCategory) && exp.title.includes(activeCategory));

  return (
    <div className="md:pb-20 scroll-mt-28" id="Experiences">
      <div className="md:mt-10 md:mb-20 mt-5 mb-8">
        <Title title="MES COMPÉTENCES" />
      </div>

      {/* === Filtres === */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`md:px-5 md:py-3 px-3 py-2 rounded-lg text-sm sm:text-lg  font-poppins font-medium shadow-[2px_2px_4px_rgba(0,0,0,0.35)] hover:shadow-[3px_3px_4px_rgba(0,0,0,0.40)]  transition-all duration-300
              ${activeCategory === cat
                ? "bg-red-500 text-white shadow-lg"
                : "bg-base-300 dark:bg-gray-800 text-base-content dark:text-base-content border hover:bg-base-300 dark:hover:bg-base-300"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex flex-col-reverse md:flex-row gap-10">

        {/* === Skills === */}
        <div
          id="Skills"
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 gap-4 md:gap-4 flex-1 scroll-mt-24"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative flex flex-col items-center p-3  
              bg-base-300 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 
              rounded-xl shadow-[3px_3px_3px_rgba(0,0,0,0.30)] 
              hover:-translate-y-2 hover:shadow-[4px_4px_5px_rgba(0,0,0,0.40)] hover:scale-110
              transition-all duration-500 cursor-pointer md:h-[140px]"
              >
              {/* Cercle avec logo */}
              <div
                className="p-4 rounded-full relative transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${skill.color}20` }}
              >
                <img src={skill.image} alt={skill.name} className="w-[48px] h-[48px]" />
                {/* Petit rond couleur officielle */}
                <div
                  className="absolute -top-1 -right-2 w-3 h-3 rounded-full border-2 border-white dark:border-gray-900"
                  style={{ backgroundColor: skill.color }}
                />
              </div>

              <span className="mt-2 text-sm font-poppins font-medium">{skill.name}</span>
              <span
                className="mt-1 px-2 py-1 md:mt-2 text-xs font-medium font-poppins text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: skill.color }}
              >
                {skill.level}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Bloc des expériences */}
        <div className="md:ml-20 flex flex-col space-y-4 md:w-[51%] w-full">
          {filteredExperiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              className="flex flex-col md:flex-row items-center bg-base-300 p-5 rounded-xl 
              shadow-[3px_3px_4px_rgba(0,0,0,0.30)] hover:shadow-[4px_4px_6px_rgba(0,0,0,0.40)] 
              transition-shadow duration-500 md:cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-3 md:mt-10">{experience.icon}</div>
              <div className="md:ml-4 text-center md:text-left font-poppins">
                <h2 className="text-xl md:text-2xl font-extrabold md:font-bold font-poppins mb-2">{experience.title}</h2>
                <p className="text-sm md:text-lg font-poppins">{experience.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* === Bloc Résumé / Stats === */}
      <div className="max-w-5xl mx-auto mt-20 md:mt-28 text-center">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 ">
          <div className="bg-base-300 border border-gray-200
              dark:bg-blue-900/50 p-4 rounded-lg
              shadow-[3px_3px_3px_rgba(0,0,0,0.30)] 
              hover:-translate-y-1 hover:shadow-[4px_4px_5px_rgba(0,0,0,0.40)]
              transition-all duration-500 cursor-pointer">
            <a href="#Skills">
              <div className="text-2xl md:text-4xl font-bold  font-poppins text-blue-600 dark:text-blue-400">15+</div>
              <div className="text-base text-base-content font-medium md:font-semibold font-poppins dark:text-gray-300">Technologies</div>
            </a>
          </div>

          <div className="bg-base-300 border border-gray-200 dark:bg-green-900/50 p-4 rounded-lg
              shadow-[3px_3px_3px_rgba(0,0,0,0.30)] 
              hover:-translate-y-1 hover:shadow-[4px_4px_5px_rgba(0,0,0,0.40)]
              transition-all duration-500 cursor-pointer">
            <a href="#Home">
              <div className="text-2xl md:text-4xl font-bold  font-poppins text-green-600 dark:text-green-400">4+</div>
              <div className="text-base text-base-content font-medium md:font-semibold font-poppins dark:text-gray-300">Années d'expériences</div>
            </a>
          </div>

          <div className="bg-base-300 border border-gray-200 dark:bg-purple-900/50 p-4 rounded-lg
           shadow-[3px_3px_3px_rgba(0,0,0,0.30)] 
              hover:-translate-y-1 hover:shadow-[4px_4px_5px_rgba(0,0,0,0.40)]
              transition-all duration-500 cursor-pointer">
            <a href="#Experiences">
              <div className="text-2xl md:text-4xl font-bold  font-poppins text-red-600 dark:text-purple-400">6</div>
              <div className="text-base text-base-content font-medium md:font-semibold font-poppins dark:text-gray-300">Catégories</div>
            </a>
          </div>

          <div className="bg-base-300 border border-gray-200 dark:bg-orange-900/50 p-4 rounded-lg
             shadow-[3px_3px_3px_rgba(0,0,0,0.30)] 
              hover:-translate-y-1 hover:shadow-[4px_4px_5px_rgba(0,0,0,0.40)]
              transition-all duration-500 cursor-pointer">
            <a href="#Projects">
              <div className="text-2xl md:text-4xl font-bold  font-poppins text-orange-600 dark:text-orange-400">4+</div>
              <div className="text-base text-base-content font-medium md:font-semibold font-poppins dark:text-gray-300">Projets livrés</div>
            </a>

          </div>
        </div>
      </div>
    </div>


  );
};

export default Experiences;
