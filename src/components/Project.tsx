const projects = [
  {
    name: "E-Commerce -flower",
    description: "A full-featured e-commerce platform with flower management, shopping cart, and secure checkout. Built with React and TypeScript.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    image: "/project1.png"
  },
  {
    name: "React--movie",
    description: "  MovieFlix - React Movie Explorer A single-page application (SPA) built with React that allows users to explore movies, view details, search, filter by category, and save favorites..",
    tags: ["Next.js", "React", "JavaScript"],
    image: "/project2.png"
  },
  {
   name: "Dashboaddevelopment",
description: "A beautiful weather dashboard that displays current weather conditions and forecasts for multiple locations with interactive charts.",
tags: ["React", "API Integration", "CSS"],
image: "/project3.png"

  },
  {
    name: "book-capstone",
    description: "  Book Explorer Book Explorer is a responsive, interactive web application that allows users to browse books, search for titles, and save their favorite books. ",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/project4.png"
  },
  {
    name: "work-firebase",
    description: "This project demonstrates the fundamentals of integrating a frontend application with Firebase services, including Firestore, Authentication, and real-time database updates. ",
    tags: ["Next.js", "TypeScript", "React"],
    image: "/project5.png"
  },
  {
    name: "Freelance Dashboard",
    description: "Amodern, type-safe freelance management dashboard that helps freelancers track clients, projects, and payments with a clean UI, dark mode, and real-time state management..",
    tags: ["React", "TypeScript", "next.jpg"],
    image: "/project6.png"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-4 animate-fadeInUp">Featured Projects</h2>
        <p className="text-slate-300 text-center mb-12">Here are some of my recent projects that showcase my skills and creativity</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.name} className="bg-slate-700 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
              <img src={project.image} alt={project.name} className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.name}</h3>
                <p className="text-slate-300 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-slate-600 text-blue-400 px-3 py-1 rounded-full text-xs">{tag}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button className="text-blue-400 hover:text-blue-300 text-sm font-semibold">Code</button>
                  <button className="text-blue-400 hover:text-blue-300 text-sm font-semibold">Demo</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
