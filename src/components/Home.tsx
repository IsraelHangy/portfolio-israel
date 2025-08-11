import { FileText, Mail } from "lucide-react"
import image from "../assets/imageIsrael.webp";
import cvPDF from "../assets/CV_Israel.pdf"; 

const Home = () => {
  return (
   <div
  id="Home"
  className="flex flex-col-reverse md:flex-row justify-center md:justify-between items-center my-10 md:my-32 opacity-0 animate-fadeIn">
      <div className="flex flex-col">
      <h1 className="text-4xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
   
        <span className="text-outline">Salut !,</span>
        <br />
        <span>Je m'appelle{" "}</span>
        <br className="block md:hidden" /> 
        <span className="bg-gradient-moving bg-300 bg-clip-text text-transparent animate-gradient-move">
          Israel Hangy
        </span>

      </h1>
        <p className="mt-4 md:mt-8 text-md text-center md:text-left md:text-xl font-poppins w-full md:max-w-xl">
          Je suis un développeur web full stack avec une forte appétence sur le UI/UX Design.
          Passionné par la création d'applications web modernes et performantes.
          J'aime relever des défis techniques et apprendre de nouvelles technologies telles
          que React, Tailwind CSS, TypeScript et Node.js pour améliorer mes compétences.
        </p>


        <div className="flex justify-center md:justify-start space-x-4 md:mt-8 mt-6">
          <a href="#Contact" className="btn btn-lg bg-red-500 hover:bg-red-800 text-black rounded-lg md:w-fit">
            <Mail className="w-5 h-5" />
            Contactez-moi
          </a>
         <a
            href={cvPDF}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-lg bg-red-500 hover:bg-red-800 text-black rounded-lg md:w-fit flex items-center space-x-2"
          >
            <FileText className="w-5 h-5" />
            <span>Mon CV</span>
          </a>

        </div>
      </div>

      <div className="flex justify-center items-center">
      <img
      src={image}
      alt="Photo de profil"
      className="w-[26rem] h-[26rem] md:w-[32rem] md:h-[32rem]  rounded-xl object-cover opacity-0 animate-fadeIn"
      loading="lazy"
      />

    </div>

    </div>
  )
}

export default Home