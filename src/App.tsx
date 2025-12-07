import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/project";
import Project from "./components/project";
import Skills from "./components/Skills";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Project/>
      <Skills/>
    </>
  );
}

export default App;
