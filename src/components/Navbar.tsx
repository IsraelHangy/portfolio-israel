import { Container } from "lucide-react"

const Navbar = () => {
    return (
        <div className="flex justify-center md:justify-between items-center p-4 ">
            <a href="#"
                className="flex items-center font-bold text-xl md:text-2xl">
                <Container className="mr-2" />
                BAKI
                <span className="text-red-500">DEV</span>
            </a>
            <ul className="hidden md:flex space-x-4">
                <li>
                    <a href="#" className="btn btn-lg btn-ghost">Accueil</a>
                </li>
                <li>
                    <a href="#" className="btn btn-lg btn-ghost">A propos</a>
                </li>
                <li>
                    <a href="#" className="btn btn-lg btn-ghost">Mes Expériences</a>
                </li>
                 <li>
                    <a href="#" className="btn btn-lg btn-ghost">Mes Projets</a>
                </li>

            </ul>
        </div>
    )
}

export default Navbar