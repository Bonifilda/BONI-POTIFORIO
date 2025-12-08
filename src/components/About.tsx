const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-green-600 text-center mb-12 animate-fadeInUp">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Hi! I'm Bonifilda, a frontend developer in training. I studied Biology and Chemistry with Education, and now I'm using my problem-solving and creative skills to build modern websites.
            </p>
            <p>
              I enjoy designing beautiful interfaces, writing clean code, and learning new technologies like React, CSS, and JavaScript. My goal is to grow into a skilled frontend developer and create websites that are useful and enjoyable for everyone.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-white border-2 border-green-200 p-6 rounded-lg hover:border-green-600 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl font-semibold text-green-600 mb-2">Clean Code</h3>
              <p className="text-gray-700">Writing maintainable and scalable code following best practices</p>
            </div>
            <div className="bg-white border-2 border-green-200 p-6 rounded-lg hover:border-green-600 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl font-semibold text-green-600 mb-2">Fast Learner</h3>
              <p className="text-gray-700">Quickly adapting to new technologies and frameworks</p>
            </div>
            <div className="bg-white border-2 border-green-200 p-6 rounded-lg hover:border-green-600 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl font-semibold text-green-600 mb-2">Team worker</h3>
              <p className="text-gray-700">Collaborating effectively in diverse team environments</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
