import "./App.css";
import { lazy, useRef, useState } from "react";
import Expertise from "./Components/Experties";
import ProductCameraPopup from "./Components/camera";
const About = lazy(() => import("./Components/About"));
const Experience = lazy(() => import("./Components/Experience"));
const Hero = lazy(() => import("./Components/Hero"));
const Header = lazy(() => import("./Components/Header"));
const Contact = lazy(() => import("./Components/Contact"));
const Projects = lazy(() => import("./Components/Projects"));
const Footer = lazy(() => import("./Components/Footer"));
function App() {
  const [open , setIsOpen] = useState(false)
  const targetRef = useRef(null);
  const scrollToView = () => {
    targetRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="h-auto bg-[#000] ">
      <Header onScroll={scrollToView} />
      <div
        className="h-full  "
        style={{
          backgroundImage: `url(/images/BackgroundPattern.png)`, // Wrap the imported image in `url()`
          backgroundSize: "cover", // Optional: Ensures the image covers the container
          backgroundPosition: "right", // Optional: Centers the image
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <button className="w-56 h-56 bg-white text-black"  onClick={()=> setIsOpen(!open)}>Open camera</button>
        <ProductCameraPopup open={open} setOpen={setIsOpen}/>
        <Hero onScroll={scrollToView} />
        <About />

        <Experience />
        <Expertise />
        <Projects />

        <Contact ref={targetRef} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
