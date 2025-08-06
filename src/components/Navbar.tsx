import { Container } from "lucide-react"

const Navbar = () => {
    return (
        <div className="flex justify-center md:justify-between items-center p-4 ">
            <a href="#"
                className="flex items-center font-bold text-2xl pt-2">
                <Container className="mr-2" />
                BAKI
                <span className="text-red-500">DEV</span>
            </a>
            <ul className="hidden md:flex space-x-3 font-poppins">
                <li>
                    <a href="#Home" className="btn btn-lg btn-ghost text-xl">Accueil</a>
                </li>
                <li>
                    <a href="#About" className="btn btn-lg btn-ghost text-xl">A propos</a>
                </li>
                <li>
                    <a href="#Experiences" className="btn btn-lg btn-ghost text-xl">Mes Expériences</a>
                </li>
                 <li>
                    <a href="#Projects" className="btn btn-lg btn-ghost text-xl">Mes Projets</a>
                </li>

            </ul>
        </div>
    )
}

export default Navbar