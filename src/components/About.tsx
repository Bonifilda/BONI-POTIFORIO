const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12 animate-fadeInUp">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              I'm a passionate web developer with expertise in modern JavaScript frameworks and technologies. I love building interactive and responsive web applications that provide excellent user experiences.
            </p>
            <p>
              My journey in web development has equipped me with a strong foundation infrontend technologies. I'm constantly learning and staying updated with the latest industry trends.
            </p>
            <p>
              When I'm not coding, I enjoy contributing to open-source projects, learning new technologies, and sharing knowledge with the developer community.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-slate-700 p-6 rounded-lg hover:bg-slate-600 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl font-semibold text-white mb-2">Clean Code</h3>
              <p className="text-slate-300">Writing maintainable and scalable code following best practices</p>
            </div>
            <div className="bg-slate-700 p-6 rounded-lg hover:bg-slate-600 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl font-semibold text-white mb-2">Fast Learner</h3>
              <p className="text-slate-300">Quickly adapting to new technologies and frameworks</p>
            </div>
            <div className="bg-slate-700 p-6 rounded-lg hover:bg-slate-600 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl font-semibold text-white mb-2">Team Player</h3>
              <p className="text-slate-300">Collaborating effectively in diverse team environments</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
