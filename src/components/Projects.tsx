import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects: React.FC = () => {
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

  const projects = [
    {
      title: 'Zero Waste Delhi',
      description: 'A comprehensive waste management platform for Delhi, enabling users to report waste issues, track collection schedules, and access recycling resources.',
      image: 'https://wasteadvantagemag.com/wp-content/uploads/2021/01/Food-waste.jpeg',
      technologies: ['HTML', 'Node.js', 'MongoDB', 'Express.js', 'JWT'],
      github: 'https://github.com/heyoaryan/zero-waste-delhi',
      live: 'https://github.com/heyoaryan/zero-waste-delhi',
      featured: true
    },
    {
      title: 'Mind Mitra',
      description: 'A mental health platform that connects users with mental health professionals, offering resources, articles, and a community for support.',
      image: 'https://cdn-thumbnails.huggingface.co/social-thumbnails/spaces/williakn3/Mental_Health_Chatbot.png',
      technologies: ['React.js', 'Node.js', 'API', 'Responsive Design'],
      github: 'https://github.com/heyoaryan/mind-mitra',
      live: 'https://github.com/heyoaryan/mind-mitra',
      featured: true
    },
    {
      title: 'Task Flow Tracker',
      description: 'A task management application that helps users organize their tasks, set deadlines, and track progress with a user-friendly interface.',
      image: 'https://static.vecteezy.com/system/resources/previews/005/187/462/original/task-completed-icon-in-flat-design-vector.jpg',
      technologies: ['React.js', 'Local Storage', 'CSS3'],
      github: 'https://github.com/heyoaryan/taskflow-tracker',
      live: 'https://taskflow-intern-demo.netlify.app/',
      featured: false
    },
    {
      title: 'Tic Tac Toe',
      description: 'A classic Tic Tac Toe game built with React, featuring a simple and intuitive interface for players to enjoy this timeless game.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['HTML', 'CSS3', 'JavaScript'],
      github: 'https://github.com/heyoaryan/Tic-Tac-Toe',
      live: 'https://heyoaryan.github.io/Tic-Tac-Toe/',
      featured: false
    }
    // Add more projects as needed

  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 bg-slate-800 w-full overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            My <span className="text-blue-400">Projects</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            A collection of projects that showcase my skills and experience
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-12 lg:mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={project.title}
                className={`group bg-slate-900 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-500 hover:shadow-2xl border border-slate-700/50 hover:border-blue-400/50 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex space-x-1 sm:space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.github}
                      className="p-1.5 sm:p-2 bg-slate-800/80 rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                    >
                      <Github className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </a>
                    <a
                      href={project.live}
                      className="p-1.5 sm:p-2 bg-slate-800/80 rounded-full hover:bg-purple-600 transition-all duration-300 hover:scale-110"
                    >
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </a>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{project.title}</h4>
                  <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm hover:scale-110 transition-transform duration-300 cursor-pointer">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">Other Projects</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={project.title}
                className={`group bg-slate-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-500 hover:shadow-xl border border-slate-700/50 hover:border-blue-400/30 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${(index + 2) * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-28 sm:h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-1.5 sm:top-2 right-1.5 sm:right-2 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.github}
                      className="p-1 sm:p-1.5 bg-slate-800/80 rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                    >
                      <Github className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                    </a>
                    <a
                      href={project.live}
                      className="p-1 sm:p-1.5 bg-slate-800/80 rounded-full hover:bg-purple-600 transition-all duration-300 hover:scale-110"
                    >
                      <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                    </a>
                  </div>
                </div>
                <div className="p-3 sm:p-4">
                  <h4 className="text-base sm:text-lg font-bold text-white mb-2">{project.title}</h4>
                  <p className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs hover:scale-110 transition-transform duration-300 cursor-pointer">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;