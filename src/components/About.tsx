import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT SIDE: IMAGE */}
        <div className="flex justify-center">
          <img
            src="/profile.png"
            alt="About Me"
            className="w-64 h-64 rounded-full object-cover shadow-lg"
          />
        </div>

        {/* RIGHT SIDE: TEXT */}
        <div>
          <h2 className="text-4xl font-bold text-blue-600">About Me</h2>
          <p className="text-gray-600 mt-4">
            Hello! I'm Bonifilda, a passionate Frontend Developer specializing in building beautiful and responsive web applications using React, TypeScript, and TailwindCSS. I focus on creating smooth user experiences and clean, modern designs.
          </p>
          <p className="text-gray-600 mt-3">
            I enjoy learning new technologies, solving problems, and constantly improving my skills to deliver high-quality projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
