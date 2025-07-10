import Title from "./Title"

import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgHTML from "../assets/techno/html.png";
import imgFIGMA from "../assets/techno/figma.png";
import imgNODE from "../assets/techno/node-js.png";
import imgTYPE from "../assets/techno/typescript.svg";
import imgTAILWIND from "../assets/techno/tailwind.png";
import imgADONIS from "../assets/techno/adonis.js.svg";

import google from "../assets/companies/google.png";
import meta from "../assets/companies/meta.webp";

const skills = [
    { id: 1, name: "HTML", image: imgHTML },
    { id: 2, name: "CSS", image: imgCSS },
    { id: 3, name: "JavaScript", image: imgJS },
    { id: 4, name: "React", image: imgREACT },
    { id: 5, name: "Node.js", image: imgNODE },
    { id: 6, name: "Tailwind CSS", image: imgTAILWIND },
    { id: 7, name: "TypeScript", image: imgTYPE },
    { id: 8, name: "figma", image: imgFIGMA },
    { id: 9, name: "adonis.js", image: imgADONIS },
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
        image: google,
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
            "Réaliser une interface utilisateur avec une solution de gestion de contenu ou e-commerce avec WordPress"
            ,
        ],
        image: meta,
    },
];

const Experiences = () => {
    return (
        <div >
             <div className="md:mt-10 mt-5 mb-8">
                <Title title="Expériences & Technologies" />
             </div>
            
            <div className="flex flex-col-reverse md:flex-row ">
                <div className="flex flex-wrap gap-4 justify-center items-center md:w-1/3 mt-4 md:mt-0">
                    {
                        skills.map((skill) => (
                            <div key={skill.id} className="flex justify-center items-center flex-col">
                                <div className="w-24 h-24 p-2 rounded-full border-2 border-red-500 ">
                                    <img src={skill.image} alt={skill.name} className="object-cover rounded-full h-full w-full" />
                                </div>
                                <span className="mt-2 text-sm">
                                    {skill.name}
                                </span>
                            </div>
                        ))
                    }
                </div>
            
                <div className="md:ml-4 flex flex-col space-y-4">
                    {
                        experiences.map((experience) => (
                            <div key={experience.id} className="flex flex-col bg-base-200 p-5 md:p-4 rounded-xl shadow-lg">
                                <div className="flex items-center">
                                    <img src={experience.image} alt="{experience.name}" className="object-cover h-10 w-10" />
                                    <div className="ml-4">
                                        <h1 className="text-xl text-red-500 font-bold">
                                            {experience.role} , {experience.company}
                                        </h1>
                                        <span className="text-sm"> {experience.period} </span>
                                    </div>
                                </div>
                                <ul className="list-disc ml-16 mt-2 font-poppins">
                                    {
                                        experience.description.map((desc, index) => (
                                            <li key={index}>  {desc} </li>       
                                        ))      
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Experiences