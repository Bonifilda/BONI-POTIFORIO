import React from "react";

const projects = [
  {
    name: "Portfolio Website",
    description: "My personal portfolio built with React, TypeScript, and TailwindCSS.",
    link: "https://github.com/yourusername/portfolio",
  },
  {
    name: "E-commerce App",
    description: "A full-stack e-commerce app built with Next.js and React.",
    link: "https://github.com/yourusername/ecommerce-app",
  },
  {
    name: "Todo App",
    description: "A simple and interactive todo app using React and TypeScript.",
    link: "https://github.com/yourusername/todo-app",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-10">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transform transition"
            >
              <h3 className="text-2xl font-bold text-gray-800">{project.name}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
