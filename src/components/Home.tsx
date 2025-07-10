import { FileText, Mail } from "lucide-react"
import image from "../assets/imageIsrael.webp";

const Home = () => {
  return (
    <div id="Home" className="flex flex-col-reverse md:flex-row justify-center md:justify-between  items-center my-10 md:my-32">
      <div className="flex flex-col">
        <h1 className="text-4xl md:text-5xl font-bold text-center md:text-left mt-4 md:mt-0">
          Salut !, <br /> je m'appelle {" "} <span className="text-red-500">IsraelHangy</span>
        </h1>
        <p className="mt-3 md:mt-7 text-md text-center md:text-left font-poppins w-full md:max-w-xl">
          Je suis un développeur web full stack avec une forte appétence sur le UI/UX Design.
          Passionné par la création d'applications web modernes et performantes.
          J'aime relever des défis techniques et apprendre de nouvelles technologies telles
          que React, Tailwind CSS, TypeScript et Node.js pour améliorer mes compétences.
        </p>


        <div className="flex justify-center md:justify-start space-x-4 mt-4">
          <a href="#" className="btn btn-lg bg-red-500 hover:bg-red-800 text-black rounded-lg md:w-fit">
            <Mail className="w-5 h-5" />
            Contactez-moi
          </a>
          <a href="#" className="btn btn-lg bg-red-500 hover:bg-red-800 text-black rounded-lg md:w-fit">
            <FileText className="w-5 h-5" />
            Mon CV
          </a>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <img src={image} alt="Photo de profil" className="w-[26rem] h-[26rem]  rounded-xl object-cover" />
      </div>
    </div>
  )
}

export default Home