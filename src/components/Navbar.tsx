import {  Flame} from "lucide-react"

const Navbar = () => {
    return (
        <div className="md:fixed md:top-0 md:left-0 md:w-full z-50 bg-base-100">
            <div className="max-w-7xl mx-auto flex justify-center md:justify-between items-center p-2 md:p-4">
             <a
                href="#"
                className="flex items-center font-extrabold text-xl md:text-2xl md:pt-2"
                >
             <Flame
                className="mr-2 w-[30px] h-[30px] md:w-[40px] md:h-[40px]"
                strokeWidth={2}
                fill="white"
                color="white"
                />

                BAKI
                <span className="font-extrabold text-red-500">DEV</span>
            </a>

                <ul className="hidden md:flex space-x-3 font-poppins">
                    <li>
                        <a href="#Home" className="btn btn-lg btn-ghost text-xl">Accueil</a>
                    </li>
                    <li>
                        <a href="#About" className="btn btn-lg btn-ghost text-xl">A propos</a>
                    </li>
                    <li>
                        <a href="#Experiences" className="btn btn-lg btn-ghost text-xl">Compétences</a>
                    </li>
                    <li>
                        <a href="#Projects" className="btn btn-lg btn-ghost text-xl">Oeuvres</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
