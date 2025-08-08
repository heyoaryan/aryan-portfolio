import React, { useEffect, useRef, useState } from 'react';
import { Code, Database, Palette, Cloud } from 'lucide-react';

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const [animatedSkills, setAnimatedSkills] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skills bars when visible
          setTimeout(() => {
            skillCategories[activeCategory].skills.forEach((_, index) => {
              setTimeout(() => {
                setAnimatedSkills(prev => [...prev, index]);
              }, index * 200);
            });
          }, 500);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Reset animated skills when category changes
  useEffect(() => {
    setAnimatedSkills([]);
    if (isVisible) {
      setTimeout(() => {
        skillCategories[activeCategory].skills.forEach((_, index) => {
          setTimeout(() => {
            setAnimatedSkills(prev => [...prev, index]);
          }, index * 200);
        });
      }, 300);
    }
  }, [activeCategory, isVisible]);
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      color: 'from-blue-500 to-cyan-500',
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
      color: 'from-green-500 to-emerald-500',
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
      color: 'from-purple-500 to-pink-500',
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
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Figma', level: 75 },
        { name: 'UI/UX Design', level: 80 },
        { name: 'Responsive Design', level: 95 },
        { name: 'User Experience', level: 85 }
      ]
    }
  ];

  const Icon = skillCategories[activeCategory].icon;

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 bg-slate-900 w-full overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            My <span className="text-blue-400">Skills</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Navigation Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12">
          {skillCategories.map((category, index) => (
            <button
              key={category.title}
              onClick={() => setActiveCategory(index)}
              className={`group relative p-4 sm:p-6 rounded-xl sm:rounded-2xl transition-all duration-500 hover:scale-105 transform-gpu ${
                activeCategory === index
                  ? `bg-gradient-to-r ${category.color} shadow-2xl`
                  : 'bg-slate-800 hover:bg-slate-700 border border-slate-700/50'
              } ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                transform: 'perspective(400px) rotateX(5deg)',
                boxShadow: activeCategory === index ? '0 20px 40px rgba(0, 0, 0, 0.3)' : '0 10px 20px rgba(0, 0, 0, 0.2)'
              }}
            >
              <div className="flex flex-col items-center text-center">
                <category.icon className={`w-6 h-6 sm:w-8 sm:h-8 mb-2 sm:mb-3 transition-all duration-300 ${
                  activeCategory === index ? 'text-white scale-110' : 'text-blue-400 group-hover:text-purple-400'
                }`} />
                <h3 className={`text-sm sm:text-base md:text-lg font-bold transition-colors duration-300 ${
                  activeCategory === index ? 'text-white' : 'text-white group-hover:text-blue-400'
                }`}>
                  {category.title}
                </h3>
              </div>
              
              {activeCategory === index && (
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-xl sm:rounded-2xl animate-pulse"></div>
              )}
            </button>
          ))}
        </div>

        {/* Active Skills Display */}
        <div className={`transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="bg-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-700/50 shadow-2xl transform-gpu"
               style={{ transform: 'perspective(600px) rotateX(3deg)' }}>
            <div className="flex items-center mb-6 sm:mb-8">
              <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-r ${skillCategories[activeCategory].color} p-3 sm:p-4 mr-4 sm:mr-6 transform-gpu`}
                   style={{ transform: 'rotateX(10deg) rotateY(10deg)' }}>
                <Icon className="w-full h-full text-white" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2">
                  {skillCategories[activeCategory].title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base">Click on different categories to explore my skills</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {skillCategories[activeCategory].skills.map((skill, skillIndex) => (
                <div
                  key={skill.name}
                  className="relative bg-slate-700/30 rounded-xl p-4 sm:p-6 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 transform-gpu"
                  style={{ 
                    transitionDelay: `${skillIndex * 100}ms`,
                    transform: 'perspective(300px) rotateX(2deg)'
                  }}
                >
                  <div className="flex justify-between items-center mb-3 sm:mb-4">
                    <span className="text-white font-semibold text-sm sm:text-base md:text-lg">{skill.name}</span>
                    <span className="text-blue-400 font-bold text-sm sm:text-base">{skill.level}%</span>
                  </div>
                  
                  <div className="w-full bg-slate-600 rounded-full h-2 sm:h-3 overflow-hidden">
                    <div
                      className={`bg-gradient-to-r ${skillCategories[activeCategory].color} h-full rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                      style={{
                        width: animatedSkills.includes(skillIndex) ? `${skill.level}%` : '0%',
                        transitionDelay: `${skillIndex * 200}ms`
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technologies Cloud */}
        <div className="text-center mt-12 sm:mt-16">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">All Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
            {[
              'React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'HTML5',
              'CSS3', 'Bootstrap', 'Tailwind CSS', 'Git', 'GitHub', 'Figma',
              'VS Code', 'Postman', 'Netlify', 'Vercel', 'JWT'
            ].map((tech, index) => (
              <span
                key={tech}
                className={`bg-slate-800 text-white px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300 hover:scale-110 hover:shadow-lg transform cursor-pointer border border-slate-600/50 hover:border-blue-400/50 text-xs sm:text-sm ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
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
