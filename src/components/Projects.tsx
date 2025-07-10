import Title from "./Title"

import img1 from '../assets/projects/1.png';
import img2 from '../assets/projects/2.png';
import img3 from '../assets/projects/3.png';
import img4 from '../assets/projects/4.png';
import {FolderSymlink, Video } from "lucide-react";


const projects = [
  {
    id: 1,
    title: 'Projet Portfolio',
    description:'Création d’un site web statique en HTML et CSS dans le cadre de mes premières semaines de formation à Kadea. Ce projet m’a permis d’apprendre à structurer une page web et à la styliser, en mettant en pratique les bases du développement front-end',
    technologies: ['HTML', 'CSS', 'Responsive'],
    demoLink: '#',
    repoLink: '#',
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
    title: 'Gestion de Projet & Gestion des taches Twitter Clone',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur',
    technologies: ['Git', 'Github', 'kanban', 'Scrum', 'Agile'],
    demoLink: 'tweeter-clone-with-adonis-js-isr-production.up.railway.app',
    repoLink: 'https://github.com/kadea-academy-learners/tweeter-clone-with-adonis-js-IsraelHangy/issues?q=is%3Aissue%20state%3Aclosed',
    image: img3,
  },
  {
    id: 4,
    title: 'Application Clone Twitter X',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur',
    technologies: ['HTML', 'Tailwind', 'Node js', 'Typescript', 'Adonis js','Railway'],
    demoLink: 'tweeter-clone-with-adonis-js-isr-production.up.railway.app',
    repoLink: 'https://github.com/kadea-academy-learners/tweeter-clone-with-adonis-js-IsraelHangy',
    image: img3,
  },
   {
    id: 5,
    title: 'Fashion Boutique WordPress',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur',
    technologies: ['WordPress', 'WooCommerce', 'Elementor', 'Pantheon'],
    demoLink: 'https://dev-fashion-israel.pantheonsite.io/',
    repoLink: 'https://dev-fashion-israel.pantheonsite.io/wp-admin/',
    image: img4,
  },
];

const Projects = () => {
  return (
    <div className="my-10" id="Projects">
      <div className="mt-20 md:mt-0 mb-8">
        <Title title="Mes Projets & Réalisations" />
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div key={project.id} className="bg-base-300 p-5 h-fit rounded-xl shadow-lg ">
            <img
              src={project.image}
              alt={project.title}
              className="w-full rounded-xl h-56 object-cover"
            />
            <div>
              <h1 className="my-2 font-bold  font-poppins">
                {project.title}
              </h1>
              <p className="text-sm font-poppins">{project.description}</p>

            </div>
            <div className="flex flex-wrap gap-2 my-3">
              {project.technologies.map((tech) => (
                <span className="badge bg-red-800 badge-sm">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex">
              <a
                className="btn btn-lg bg-red-800  hover:bg-red-900 active:scale-95 transition-transform duration-150 w-2/3 text-white"
                href={project.demoLink}
              >
                Demo
                <Video className="w-4 ml-2" />
              </a>


              <a className="btn btn-neutral w-1/3 ml-2 mt-1" href={project.repoLink}>
                <FolderSymlink  className="w-4"/>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects