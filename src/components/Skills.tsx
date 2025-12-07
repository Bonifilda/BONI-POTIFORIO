import React from "react";

const skills = [
  { name: "HTML", level: 90, category: "Frontend" },
  { name: "CSS", level: 85, category: "Frontend" },
  { name: "JavaScript", level: 88, category: "Frontend" },
  { name: "React", level: 85, category: "Frontend" },
  { name: "TypeScript", level: 80, category: "Frontend" },
  { name: "Next.js", level: 75, category: "Frontend" },
  { name: "Tailwind CSS", level: 85, category: "Styling" },
  { name: "Responsive Design", level: 90, category: "Styling" },
  { name: "Git & GitHub", level: 80, category: "Tools" },
];

const Skills = () => {
  const categories = [...new Set(skills.map(s => s.category))];

  return (
    <section id="skills" className="py-20 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12 animate-fadeInUp">Skills & Expertise</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map(category => (
            <div key={category} className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">{category}</h3>
              <div className="space-y-4">
                {skills.filter(s => s.category === category).map(skill => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-300">{skill.name}</span>
                      <span className="text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
