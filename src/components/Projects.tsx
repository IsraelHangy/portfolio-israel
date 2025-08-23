import Title from "./Title";
import { motion, easeOut } from "framer-motion";
import type { Variants } from "framer-motion";


import img1 from '../assets/projects/1.jpg';
import img2 from '../assets/projects/2.png';
import img3 from '../assets/projects/3.png';
import img4 from '../assets/projects/4.jpg';
import img5 from '../assets/projects/5.png';
import img7 from '../assets/projects/7.jpg';
import { Github, Telescope } from "lucide-react";

const projects = [
  {
    id: 1,
    title: 'Projet Portfolio',
    description: 'Création d’un site web statique en HTML et CSS dans le cadre de mes premières semaines de formation à Kadea. Ce projet m’a permis d’apprendre à structurer une page web et à la styliser, en mettant en pratique les bases du développement front-end',
    technologies: ['HTML', 'CSS', 'Responsive'],
    demoLink: 'https://israelhangy.github.io/portfolio-project-Israel/',
    repoLink: 'https://github.com/IsraelHangy/portfolio-project-Israel',
    image: img1,
  },
  {
    id: 2,
    title: 'Projet Sunnyside',
    description: 'Création d’un site web statique en HTML et CSS dans le cadre de mes premières semaines de formation à Kadea. Ce projet m’a permis d’apprendre à structurer une page web et à la styliser, en mettant en pratique les bases du développement front-end',
    technologies: ['HTML', 'CSS', 'Responsive'],
    demoLink: 'https://israelhangy.github.io/agence-sunnyside/',
    repoLink: 'https://github.com/IsraelHangy/agence-sunnyside',
    image: img2,
  },
  {
    id: 3,
    title: 'Gestion de Projet Twitter Clone',
    description: 'Mise en place et réalisation d’un clone de X (Twitter) en solo, en appliquant la méthodologie agile. Utilisation d’outils de gestion de projet GitHub Projects pour suivre les tâches, assurer la collaboration et garantir une progression continue et structurée.',
    technologies: ['Github', 'kanban', 'Agile', 'Scrum'],
    demoLink: 'https://tweeter-clone-with-adonis-js-isr-production.up.railway.app',
    repoLink: 'https://github.com/kadea-academy-learners/tweeter-clone-with-adonis-js-IsraelHangy/issues?q=is%3Aissue%20state%3Aclosed',
    image: img4,
  },
  {
    id: 4,
    title: 'Application Clone Twitter X',
    description: 'Réalisation d’un clone de X (anciennement Twitter) avec le framework AdonisJS. Le projet comprend la création d’interfaces utilisateur statiques, l’intégration de données dynamiques via des contrôleurs et modèles.',
    technologies: ['HTML', 'Tailwind', 'Node js', 'Typescript', 'Adonis js'],
    demoLink: 'https://tweeter-clone-with-adonis-js-isr-production.up.railway.app',
    repoLink: 'https://github.com/kadea-academy-learners/tweeter-clone-with-adonis-js-IsraelHangy',
    image: img3,
  },
  {
    id: 5,
    title: 'Fashion Boutique WordPress',
    description: 'Refonte du design d’une boutique en ligne sous WordPress à partir d’une maquette fournie par la cliente. Personnalisation des pages Contact et À propos, et création complète d’une page Équipe avec un design moderne et cohérent.',
    technologies: ['WordPress', 'Elementor', 'Woocommerce', 'Pantheon'],
    demoLink: 'https://dev-fashion-israel.pantheonsite.io/',
    repoLink: 'https://dev-fashion-israel.pantheonsite.io/wp-admin/',
    image: img5,
  },
  {
    id: 6,
    title: 'Maquettes Figma',
    description: 'Création de  maquettes interactives sous Figma, présentant des interfaces modernes et cohérentes. Travail sur la mise en page, la palette de couleurs et l’expérience utilisateur pour offrir un design clair et attrayant.',
    technologies: ['Figma', 'Responsive', 'UI/UX', 'Design', 'Prototypage'],
    demoLink: 'https://www.figma.com/design/aya1EheBRTHxcXb11ixzrv/Mes-Projets---Realisations?node-id=0-1&t=HbnSuFcUoaBdFDLh-1',
    repoLink: 'https://www.figma.com/design/aya1EheBRTHxcXb11ixzrv/Mes-Projets---Realisations?node-id=0-1&t=HbnSuFcUoaBdFDLh-1',
    image: img7,
  },
];

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};


const Projects = () => {
  return (
    <div className="my-10 md:my-20  scroll-mt-28" id="Projects">
      <div className="mt-20 md:mt-0 md:mb-20 mb-8">
        <Title title="Mes Oeuvres" />
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-base-300 p-5 h-fit rounded-xl
             shadow-[5px_7px_8px_rgba(0,0,0,0.50)] 
             md:hover:shadow-[10px_10px_10px_rgba(0,0,0,0.50)] 
             transition-shadow duration-500 md:cursor-pointer "
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeInUp}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full rounded-xl h-56 object-cover"
            />

            <div>
              <h1 className="my-2 font-bold font-poppins">{project.title}</h1>
              <p className="text-sm font-poppins">{project.description}</p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 my-3">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="badge bg-[#c22e23] md:bg-[#b51c11] badge-sm text-white
                   shadow-[2px_4px_4px_rgba(0,0,0,0.20)] "
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Boutons */}
            <div className="flex">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lg bg-[#c22e23] md:bg-[#b51c11]
                 hover:bg-[#79140f] text-white   
                 active:scale-95 transition-transform duration-150 
                 w-2/3 shadow-[3px_5px_5px_rgba(0,0,0,0.30)]"
              >
                Visitez le site <Telescope className="w-4 ml-2" />
              </a>
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-neutral w-1/3 ml-2 mt-1
                shadow-[4px_5px_5px_rgba(0,0,0,0.30)]"
              >
                <Github className="w-4" />
              </a>
            </div>
          </motion.div>


        ))}
      </div>
    </div>
  );
};

export default Projects;
