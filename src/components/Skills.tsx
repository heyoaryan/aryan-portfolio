import React, { useEffect, useRef, useState } from 'react';
import { Code, Database, Palette, Cloud, Shield, Zap } from 'lucide-react';

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'JavaScript/ES6+', level: 85 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Bootstrap/Tailwind', level: 80 }
      ]
    },
    {
      icon: Database,
      title: 'Backend Development',
      skills: [
        { name: 'Node.js/Express.js', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'REST APIs', level: 85 },
        { name: 'Authentication/JWT', level: 75 }
      ]
    },
    {
      icon: Cloud,
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git/GitHub', level: 85 },
        { name: 'VS Code', level: 90 },
        { name: 'Postman', level: 80 },
        { name: 'Netlify/Vercel', level: 75 }
      ]
    },
    {
      icon: Palette,
      title: 'Design & UX',
      skills: [
        { name: 'Figma', level: 75 },
        { name: 'UI/UX Design', level: 80 },
        { name: 'Responsive Design', level: 95 },
        { name: 'User Experience', level: 85 }
      ]
    }
  ];

  const technologies = [
    'React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'HTML5',
    'CSS3', 'Bootstrap', 'Tailwind CSS', 'Git', 'GitHub', 'Figma',
    'VS Code', 'Postman', 'Netlify', 'Vercel', 'JWT'
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            My <span className="text-blue-400">Skills</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`bg-slate-800 rounded-2xl p-6 sm:p-8 transform transition-all duration-1000 delay-${index * 200} hover:bg-slate-700 hover:scale-105 hover:shadow-2xl border border-slate-600/50 group ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
            >
              <div className="flex items-center mb-6">
                <category.icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 mr-3 group-hover:text-purple-400 group-hover:scale-110 transition-all duration-300" />
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium text-sm sm:text-base">{skill.name}</span>
                      <span className="text-blue-400 text-xs sm:text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-1.5 sm:h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-1.5 sm:h-2 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(index * 200) + (skillIndex * 100)}ms`
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technologies Cloud */}
        <div className="text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
            {technologies.map((tech, index) => (
              <span
                key={tech}
                className={`bg-slate-800 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300 hover:scale-110 hover:shadow-lg transform cursor-pointer border border-slate-600/50 hover:border-blue-400/50 text-xs sm:text-sm ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;