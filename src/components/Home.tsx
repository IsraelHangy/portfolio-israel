import { Mail } from "lucide-react"

const Home = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center my-10 md:my-32">
      <div className="flex flex-col">
        <h1 className="text-4xl md:text-5xl font-bold text-center md:text-left mt-4 md:mt-0">
          Bonjour, <br /> je m'appelle {" "} <span className="text-red-500">IsraelHangy</span>
        </h1>
        <p className="my-4 text-md text-center md:text-left">
          Je suis un développeur web full stack avec une fort appétence sur le UI/UX Design<br /> passionné  par la création d'applications web modernes et performantes.<br />
          J'aime relever des défis techniques et apprendre de nouvelles technologies telles<br /> que React , Tailwind css, Typescript et Node.js pour améliorer mes compétences.
        </p>
        <a href="" className="btn btn-error  text-black md:w-fit">
          <Mail className="w-5 h-5"/>
          Contactez-moi
        </a>

      </div>

      <div>

      </div>
    </div>
  )
}

export default Home