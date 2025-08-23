import { FileText, Mail } from "lucide-react";
import image from "../assets/imageIsraelDev.png";
import cvPDF from "../assets/CV_Israel.pdf"; 

const Home = () => {
  return (
    <div
      id="Home"
      className="flex flex-col-reverse md:flex-row justify-center md:justify-between items-center my-20 md:my-32 opacity-0 animate-fadeIn  scroll-mt-28"
    >
      <div className="flex flex-col">
        <h1 className="text-4xl md:text-8xl font-extrabold font-poppins leading-tight text-center md:text-left mt-4">
          <span className="text-outline">
            Salut,
          </span>
          <br />
          <span className="text-outline">Je m'appelle{" "}</span>
          <br/>
          <span className="bg-gradient-moving bg-300 bg-clip-text text-transparent animate-gradient-move">
            Israel Hangy
          </span>
        </h1>

        <p className="mt-4 md:mt-8 text-md text-center md:text-left md:text-xl font-poppins w-full md:max-w-xl">
          "De la technologie au design, du concept au code : 
          je mets le développement au service de vos projets et transforme vos visions en réalité."
        </p>

        <div className="flex justify-center md:justify-start space-x-4 md:mt-8 mt-6">
          <a
            href="#Contact"
            className="btn btn-lg bg-red-500 hover:bg-red-600 text-black rounded-lg md:w-fit  shadow-[4px_5px_5px_rgba(0,0,0,0.30)]"
          >
            <Mail className="w-5 h-5" />
            Contactez-moi
          </a>

          <a
            href={cvPDF}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-lg bg-red-500 hover:bg-red-600 text-black rounded-lg md:w-fit flex items-center space-x-2  shadow-[4px_5px_5px_rgba(0,0,0,0.30)]"
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
          className="w-[26rem] h-[26rem] md:w-[32rem] md:h-[32rem] rounded-xl object-cover opacity-0 animate-fadeIn"
          loading="lazy"
        />
      </div>


    </div>
  );
};

export default Home;
