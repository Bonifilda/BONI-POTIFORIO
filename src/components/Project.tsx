const projects = [
  {
    name: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with product management, shopping cart, and secure checkout. Built with React and TypeScript.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    image: "/project1.jpg"
  },
  {
    name: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    tags: ["Next.js", "React", "JavaScript"],
    image: "/project2.jpg"
  },
  {
    name: "Weather Dashboard",
    description: "A beautiful weather dashboard that displays current weather conditions and forecasts for multiple locations with interactive charts.",
    tags: ["React", "API Integration", "CSS"],
    image: "/project3.jpg"
  },
  {
    name: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations and professional design.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/project4.jpg"
  },
  {
    name: "Blog Platform",
    description: "A full-stack blog platform with markdown support, comments, and user authentication. Features a clean, minimalist design.",
    tags: ["Next.js", "TypeScript", "React"],
    image: "/project5.jpg"
  },
  {
    name: "Social Media Dashboard",
    description: "An analytics dashboard for tracking social media metrics across multiple platforms with data visualization and insights.",
    tags: ["React", "TypeScript", "Charts"],
    image: "/project6.jpg"
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
              <div className="h-48 bg-slate-600 flex items-center justify-center">
                <span className="text-slate-400 text-sm">{project.name}</span>
              </div>
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
