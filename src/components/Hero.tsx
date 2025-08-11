import React, { useEffect, useState, useRef } from 'react';
import { Github, Linkedin, Briefcase, ArrowDown, Code, Zap, Star, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const texts = [
    "Full Stack Developer",
    "MERN Stack Developer", 
    "React.js Developer",
    "Node.js Developer",
    "Hackathon Enthusiast",
    "Problem Solver",
    "Tech Innovator",
    "Web Developer"
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let index = 0;
    let isDeleting = false;
    const currentText = texts[currentTextIndex];
    
    const interval = setInterval(() => {
      if (!isDeleting && index < currentText.length) {
        setText(currentText.slice(0, index + 1));
        index++;
      } else if (!isDeleting && index === currentText.length) {
        setTimeout(() => {
          isDeleting = true;
        }, 1500);
      } else if (isDeleting && index > 0) {
        setText(currentText.slice(0, index - 1));
        index--;
      } else if (isDeleting && index === 0) {
        isDeleting = false;
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setIsTyping(false);
        setTimeout(() => {
          setIsTyping(true);
        }, 300);
      }
    }, isDeleting ? 30 : 80);

    return () => clearInterval(interval);
  }, [currentTextIndex, texts]);

  // Mouse tracking for cursor light effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () => heroElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const handleServiceClick = () => {
    // Trigger service navigation
    window.dispatchEvent(new CustomEvent('navigateToServices'));
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/heyoaryan', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/aryan-singh-thakur-12a422281/', label: 'LinkedIn' }
  ];

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
    >
      {/* Cursor Light Effect */}
      <div 
        className="absolute pointer-events-none z-10 transition-opacity duration-300"
        style={{
          left: mousePosition.x - 150,
          top: mousePosition.y - 150,
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(139, 92, 246, 0.1) 30%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(20px)',
          transform: 'translate3d(0, 0, 0)',
        }}
      />

      {/* Enhanced 3D Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            <div className="w-1 h-1 bg-blue-400 rounded-full opacity-60 animate-pulse" />
          </div>
        ))}
      </div>

      {/* Floating Code Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {[Code, Zap, Star].map((Icon, index) => (
          <Icon
            key={index}
            className="absolute text-purple-400/20 animate-float-slow"
            size={24}
            style={{
              left: `${20 + index * 30}%`,
              top: `${20 + index * 20}%`,
              animationDelay: `${index * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-6 sm:space-y-8">
          {/* Greeting */}
          <div className="animate-fade-in-up">
            <p className="text-blue-400 text-lg sm:text-xl font-medium mb-2 tracking-wide">
              Hello, I'm
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
                Aryan Singh Thakur
              </span>
            </h1>
          </div>

          {/* Animated Typing Effect */}
          <div className="animate-fade-in-up animation-delay-300">
            <div className="h-16 sm:h-20 flex items-center justify-center">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-gray-300">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {text}
                </span>
                <span className={`inline-block w-1 h-8 sm:h-12 bg-blue-500 ml-1 ${isTyping ? 'animate-pulse' : ''}`} />
              </h2>
            </div>
          </div>

          {/* Description */}
          <div className="animate-fade-in-up animation-delay-600">
            <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Crafting digital experiences with modern technologies. 
              Passionate about creating scalable, user-friendly applications 
              that make a difference.
            </p>
          </div>

          {/* Enhanced Social Links */}
          <div className="animate-fade-in-up animation-delay-900">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              {socialLinks.map((social, index) => (
                <div key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 sm:p-4 bg-slate-800/50 rounded-xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300 hover:scale-110 hover:shadow-2xl border border-slate-700/50 hover:border-blue-400/50 flex items-center space-x-2 sm:space-x-3 transform-gpu"
                    style={{ transform: 'perspective(400px) rotateX(5deg)' }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                    <span className="text-gray-400 group-hover:text-white font-medium text-sm sm:text-base transition-colors duration-300">
                      {social.label}
                    </span>
                  </a>
                </div>
              ))}
            </div>

            {/* View Services Button */}
            <div className="mt-8 sm:mt-10">
              <button
                onClick={handleServiceClick}
                className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-2xl flex items-center space-x-2 mx-auto transform-gpu"
                style={{ transform: 'perspective(400px) rotateX(5deg)' }}
              >
                <Briefcase className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>View My Services</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-blue-400 text-xs sm:text-sm font-medium">Scroll Down</span>
          <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;