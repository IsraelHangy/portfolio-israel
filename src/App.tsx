import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

export default function App() {
  return (
   <div>
    <div className="p-5 md:px-[15%]">
      <Navbar />
      <Home />
    </div>
    <About />
   </div>
  );
}
