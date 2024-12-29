import "./App.css";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import { useRef } from "react";

function App() {
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
        }}
      >
        <Hero onScroll={scrollToView} />
        <About />

        <Experience />
        <Projects />

        <Contact ref={targetRef} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
