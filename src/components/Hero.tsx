const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20 bg-white">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 animate-fadeInUp">
            Hi, I'm a <span className="text-green-600">MANRADUKUNDA Bonifida</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed animate-fadeIn" style={{animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards'}}>
            Crafting modern web experiences with React, Next.js, and TypeScript. Passionate about building scalable applications that make a difference.
          </p>
          <div className="flex gap-4 justify-center md:justify-start animate-fadeIn" style={{animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards'}}>
            <a href="#projects" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
              View My Work
            </a>
            <a href="#contact" className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
              Get In Touch
            </a>
          </div>
        </div>
        <div className="flex justify-center animate-fadeIn" style={{animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards'}}>
          <div className="relative">
            <div className="absolute inset-0 bg-green-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <img 
              src="/Boni.jpg" 
              alt="Bonifilda image" 
              className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover object-top border-4 border-green-600 shadow-2xl hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                e.currentTarget.src = 'https://via.placeholder.com/400/22c55e/ffffff?text=Boni';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
