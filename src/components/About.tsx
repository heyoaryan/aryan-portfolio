import React, { useEffect, useRef, useState } from 'react';
import { Calendar, Award, Coffee, Users } from 'lucide-react';

const About: React.FC = () => {
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

  const stats = [
    { icon: Calendar, label: 'Years Experience', value: '2+' },
    { icon: Award, label: 'Projects Completed', value: '5' },
    { icon: Coffee, label: 'Cups of Coffee', value: '1000+' },
    { icon: Users, label: 'Happy Clients', value: '01' }
  ];

  const timeline = [
    {
      year: '2023 - Present',
      title: 'Bachelor of Computer Application',
      company: 'Guru Gobind Singh Indraprastha University',
      description: 'Currently pursuing BCA with focus on computer science fundamentals, programming languages, and software development.'
    },
    {
      year: '2023',
      title: '12th Commerce with Maths',
      company: 'CBSE - Sant Sujan Singh Ji International School',
      description: 'Completed higher secondary education with Commerce and Mathematics, building strong analytical and problem-solving skills.'
    },
    {
      year: '2021',
      title: '10th Standard',
      company: 'CBSE - Sant Sujan Singh Ji International School',
      description: 'Completed secondary education with excellent grades, laying the foundation for my academic and professional journey.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            About <span className="text-blue-400">Me</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Passionate developer with a love for creating digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
          {/* About Content */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="bg-slate-900 rounded-2xl p-6 sm:p-8 hover:bg-slate-800 transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-slate-700/50">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">My Story</h3>
              <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                I'm Aryan Singh Thakur, a passionate full-stack developer with 2+ years of experience creating
                innovative digital solutions. My journey started with a fascination for technology and
                how it can solve real-world problems, which led me to dive deep into web development.
              </p>
              <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js) and modern
                web technologies. I'm passionate about creating responsive, user-friendly applications
                that provide exceptional user experiences. I love learning new technologies and
                staying updated with the latest trends in web development.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {['JavaScript', 'React.js', 'Node.js', 'MongoDB', 'Express.js', 'HTML/CSS'].map((tech) => (
                  <span key={tech} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm hover:scale-110 transition-transform duration-300 cursor-pointer">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map(({ icon: Icon, label, value }, index) => (
                <div key={label} className="bg-slate-900 rounded-xl p-4 sm:p-6 text-center hover:bg-slate-800 transition-all duration-500 hover:scale-105 hover:shadow-xl border border-slate-700/50 group">
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 mx-auto mb-2 sm:mb-3 group-hover:scale-110 group-hover:text-purple-400 transition-all duration-300" />
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">{value}</div>
                  <div className="text-gray-400 text-xs sm:text-sm">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center mb-8 sm:mb-12">My Journey</h3>
          <div className="relative">
            {/* Desktop Timeline */}
            <div className="hidden md:block">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-400"></div>
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className={`bg-slate-900 rounded-lg p-6 transform transition-all duration-1000 delay-${index * 200} hover:bg-slate-800 hover:scale-105 hover:shadow-xl border border-slate-700/50 group ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                      <div className="text-blue-400 font-semibold mb-2">{item.year}</div>
                      <h4 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">{item.title}</h4>
                      <p className="text-gray-400 text-sm mb-3">{item.company}</p>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full border-4 border-slate-800 animate-pulse"></div>
                </div>
              ))}
            </div>
            
            {/* Mobile Timeline */}
            <div className="md:hidden">
              <div className="absolute left-4 top-0 w-0.5 h-full bg-blue-400"></div>
              {timeline.map((item, index) => (
                <div key={index} className="relative mb-8 pl-12">
                  <div className={`bg-slate-900 rounded-lg p-4 sm:p-6 transform transition-all duration-1000 delay-${index * 200} hover:bg-slate-800 hover:scale-105 hover:shadow-xl border border-slate-700/50 group ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                    <div className="text-blue-400 font-semibold mb-2 text-sm sm:text-base">{item.year}</div>
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">{item.title}</h4>
                    <p className="text-gray-400 text-xs sm:text-sm mb-3">{item.company}</p>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{item.description}</p>
                  </div>
                  <div className="absolute left-0 top-6 transform -translate-x-1/2 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full border-2 border-slate-800 animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;