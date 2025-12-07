import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 mt-10">
      <div className="max-w-5xl grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT SIDE TEXT */}
        <div>
          <h1 className="text-5xl font-extrabold leading-tight">
            Hello, I'm <span className="text-blue-600">Bonifilda</span>
          </h1>

          <h2 className="text-2xl text-gray-600 mt-3">
            Frontend Developer & UI Designer
          </h2>

          <p className="text-gray-500 mt-4">
            I build beautiful, responsive, and user-friendly websites using
            React, TypeScript, and modern tools.
          </p>

          <div className="mt-6 flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Hire Me
            </button>

            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white">
              Download CV
            </button>
          </div>
        </div>

        {/* RIGHT SIDE: IMAGE */}
        <div className="flex justify-center">
          <img
            src="/profile.png"
            alt="Profile"
            className="w-64 h-64 rounded-full object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
