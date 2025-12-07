import React from "react";

const skills = [
  { name: "HTML", color: "text-orange-500", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS", color: "text-blue-500", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "JavaScript", color: "text-yellow-500", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "React", color: "text-cyan-500", link: "https://react.dev/" },
  { name: "TypeScript", color: "text-blue-600", link: "https://www.typescriptlang.org/docs/" },
  { name: "Next.js", color: "text-gray-700", link: "https://nextjs.org/docs" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-10">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill) => (
            <a
              key={skill.name}
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow-lg rounded-xl px-6 py-4 w-40 flex items-center justify-center hover:scale-105 transform transition"
            >
              <span className={`font-bold text-xl ${skill.color}`}>
                {skill.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
