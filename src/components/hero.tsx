const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fadeInUp">
            Hi, I'm a <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Frontend Developer</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed animate-fadeIn" style={{animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards'}}>
            Crafting modern web experiences with React, Next.js, and TypeScript. Passionate about building scalable applications that make a difference.
          </p>
          <div className="flex gap-4 justify-center md:justify-start animate-fadeIn" style={{animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards'}}>
            <a href="#projects" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50">
              View My Work
            </a>
            <a href="#contact" className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
              Get In Touch
            </a>
          </div>
        </div>
        <div className="flex justify-center animate-fadeIn" style={{animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards'}}>
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <img 
              src="/Boni.jpg" 
              alt="Bonifilda image" 
              className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-blue-500/30 shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
