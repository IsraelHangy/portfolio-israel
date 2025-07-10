import Title from "./Title"
import image from "../assets/imageIsraelToge.webp";
import { CalendarSync, LetterText, Paintbrush } from "lucide-react";

const aboutSections = [
  {
    id: 1,
    title: "Développeur Frontend",
    description: "Je suis un développeur frontend avec une bonne expérience et spécialisé dans la création d'intrterfaces web modernes, fluides et réactives.",
    icon: <LetterText className="text-red-500 scale-150" />,
  },
  {
    id: 2,
    title: "Développeur Backend",
    description: "Je maîtrise les bases du développement backend axé sur la conception de systèmes robustes, la gestion efficace des données et la logique du métier claire et évolutive.",
    icon: <CalendarSync className="text-red-500 scale-150" />,
  },
  {
    id: 3,
    title: "Passionné par l'UI/UX",
    description: "Créer des interfaces utilisateurs à la fois intuitives, attrayantes et fonctionnelles est ma priorité.Avec une maitrise visuelle forte",
    icon: <Paintbrush className="text-red-500 scale-150" />,
  },
];

const About = () => {
  return (
    <div className="bg-base-300 p-10 md:pb-20 " id="About">
      <div className=" mb-8">
        <Title title="A propos" />
      </div>
      
      <div className=" flex justify-center items-center">
        <div className="hidden md:block ">
          <img src={image} alt="Photo de profil" className="w-[29rem] h-[29rem] md: mr-20  rounded-xl object-cover" />
        </div>
        <div className="ml-4 space-y-4 md:mr-20">
          {aboutSections.map((section) => (
            <div key={section.id} className=" flex flex-col md:flex-row items-center bg-base-100 p-5 rounded-xl md:w-96 shadow-xl">
              <div className="mb-3 md:mb-2">
                {section.icon}
              </div>
              <div className="md:ml-4 text-center md:text-left font-poppins ">
                <h2 className="text-xl font-bold mb-1">
                  {section.title}
                </h2>
                <p className="text-sm font-poppins">
                  {section.description}
                </p>
              </div>
            </div>
          ))
          }
        </div>
      </div>
    </div>
  )
}

export default About