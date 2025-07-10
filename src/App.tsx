import About from "./components/About";
import Experiences from "./components/Experiences";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div>
      <div className="p-5 md:px-[15%]">
        <Navbar />
        <Home />
      </div>
      <About />
      <div className="p-5 md:px-[15%]">
        <Experiences />
        <Projects />
      </div>

    </div>
  );
}
