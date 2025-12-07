import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
    </>
  );
}

export default App;
