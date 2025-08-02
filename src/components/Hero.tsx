import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Code, Terminal, Zap, Briefcase } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const roles = [
    'Full Stack Developer',
    'MERN Stack Developer',
    'React Developer',
    'UI/UX Designer',
    'Frontend Developer',
    'Web Developer'
  ];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    
    if (isTyping) {
      if (displayText.length < currentRole.length) {
        setTimeout(() => {
          setDisplayText(currentRole.substring(0, displayText.length + 1));
        }, 80);
      } else {
        setTimeout(() => {
          setIsTransitioning(true);
          setTimeout(() => setIsTyping(false), 300);
        }, 1800);
      }
    } else {
      if (displayText.length > 0) {
        setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, 40);
      } else {
        setIsTransitioning(false);
        setIsTyping(true);
        setCurrentIndex((prev) => (prev + 1) % roles.length);
      }
    }
  }, [displayText, currentIndex, isTyping, isTransitioning, roles]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced 3D Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        {/* 3D Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-gradient-x"></div>
        
        {/* 3D Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-float transform-gpu" style={{ transform: 'rotateX(45deg) rotateY(45deg)' }}></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-lg blur-lg animate-bounce-slow transform-gpu" style={{ transform: 'rotateX(30deg) rotateZ(45deg)' }}></div>
          <div className="absolute bottom-32 left-20 w-40 h-40 bg-gradient-to-r from-green-500/15 to-blue-500/15 rounded-full blur-2xl animate-pulse transform-gpu" style={{ transform: 'rotateY(60deg) rotateX(30deg)' }}></div>
        </div>
      </div>

      {/* Enhanced 3D Interactive Mouse Follower */}
      <div 
        className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl transition-all duration-300 ease-out pointer-events-none transform-gpu"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          transform: `translate3d(${(mousePosition.x - window.innerWidth / 2) * 0.02}px, ${(mousePosition.y - window.innerHeight / 2) * 0.02}px, 0) rotateX(${(mousePosition.y - window.innerHeight / 2) * 0.01}deg) rotateY(${(mousePosition.x - window.innerWidth / 2) * 0.01}deg)`,
        }}
      />

      {/* Enhanced 3D Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float transform-gpu"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              transform: `translate3d(0, 0, ${Math.random() * 100}px) rotateX(${Math.random() * 360}deg) rotateY(${Math.random() * 360}deg)`
            }}
          >
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse shadow-lg" style={{ boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' }}></div>
          </div>
        ))}
      </div>

      {/* 3D Floating Code Elements */}
      <div className="absolute inset-0">
        {['<div>', '</div>', '{...}', '( )', '[ ]', '< />', 'fn()', '{}'].map((code, i) => (
          <div
            key={i}
            className="absolute text-blue-400/30 font-mono text-lg animate-float-slow transform-gpu"
            style={{
              left: `${10 + (i * 11)}%`,
              top: `${15 + Math.sin(i) * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
              transform: `translate3d(0, 0, ${i * 10}px) rotateX(${i * 15}deg) rotateY(${i * 20}deg)`,
              textShadow: '0 0 10px rgba(59, 130, 246, 0.5)'
            }}
          >
            {code}
          </div>
        ))}
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        {/* Enhanced 3D Main Title */}
        <div className="mb-6 sm:mb-8">
          <div className="flex justify-center items-center mb-4">
            <div className="relative transform-gpu" style={{ transform: 'rotateX(15deg) rotateY(15deg)' }}>
              <Code className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-400 animate-spin-slow" />
              <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-20"></div>
              <div className="absolute inset-0 bg-purple-400 rounded-full animate-ping opacity-10" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
          
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 animate-fade-in-up leading-tight transform-gpu" 
              style={{ 
                textShadow: '0 0 30px rgba(59, 130, 246, 0.5), 0 0 60px rgba(139, 92, 246, 0.3)',
                transform: 'perspective(1000px) rotateX(5deg)'
              }}>
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x"
                  style={{ filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.5))' }}>
              Aryan Singh Thakur
            </span>
          </h1>
          
          <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-6 sm:mb-8 h-12 sm:h-14 md:h-16 flex items-center justify-center px-4">
            <span className="mr-2 sm:mr-3">I'm a</span>
            <div className="relative transform-gpu" style={{ transform: 'perspective(800px) rotateX(10deg)' }}>
              <span className={`text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-bold min-w-[200px] xs:min-w-[250px] sm:min-w-[300px] md:min-w-[350px] text-left inline-block transition-all duration-300 ${
                isTransitioning ? 'opacity-80 scale-95' : 'opacity-100 scale-100'
              }`} style={{ 
                textShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
                filter: 'drop-shadow(0 0 15px rgba(139, 92, 246, 0.4))'
              }}>
                {displayText}
                <span className={`text-blue-400 transition-all duration-200 ${
                  isTyping ? 'animate-pulse opacity-100' : 'animate-blink opacity-80'
                }`} style={{ textShadow: '0 0 10px rgba(59, 130, 246, 0.8)' }}>|</span>
              </span>
              <div className={`absolute -inset-1 bg-gradient-to-r from-blue-400/20 to-purple-500/20 blur-sm transition-all duration-500 ${
                isTransitioning 
                  ? 'animate-pulse opacity-60 scale-110' 
                  : isTyping 
                    ? 'opacity-40 scale-100' 
                    : 'opacity-30 scale-95'
              }`}></div>
            </div>
          </div>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-8 sm:mb-10 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed animate-fade-in-up px-4 transform-gpu" 
             style={{ 
               animationDelay: '0.5s',
               transform: 'perspective(600px) rotateX(5deg)',
               textShadow: '0 0 10px rgba(156, 163, 175, 0.3)'
             }}>
            I'm a passionate{' '}
            <span className="text-blue-400 font-semibold" style={{ textShadow: '0 0 10px rgba(59, 130, 246, 0.5)' }}>Full Stack Developer</span> and{' '}
            <span className="text-purple-400 font-semibold" style={{ textShadow: '0 0 10px rgba(139, 92, 246, 0.5)' }}>UI/UX Designer</span> who loves creating{' '}
            <span className="text-pink-400 font-semibold" style={{ textShadow: '0 0 10px rgba(236, 72, 153, 0.5)' }}>innovative digital solutions</span> that make a difference.
          </p>
        </div>

        {/* Enhanced 3D Social Links */}
        <div className="flex justify-center space-x-4 sm:space-x-6 md:space-x-8 mb-8 sm:mb-12">
          {[
            { icon: Github, href: 'https://github.com/heyoaryan', color: 'hover:bg-gray-700' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/aryan-singh-thakur-12a422281/', color: 'hover:bg-blue-600' },
            { icon: Mail, href: 'mailto:iamaryan721@gmail.com', color: 'hover:bg-red-600' },
            { icon: Briefcase, href: '#services', color: 'hover:bg-purple-600', isService: true, label: 'My Services', isSpecial: true }
          ].map(({ icon: Icon, href, color }, index) => (
            <a
              key={index}
              href={href}
              onClick={href === '#services' ? (e) => {
                e.preventDefault();
                const event = new CustomEvent('showServicePopup');
                window.dispatchEvent(event);
              } : undefined}
              className={`group relative p-3 sm:p-4 backdrop-blur-sm rounded-full transition-all duration-500 hover:scale-125 hover:shadow-2xl animate-fade-in-up transform-gpu ${
                href === '#services' 
                  ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 ring-2 ring-purple-400/50 animate-bounce hover:from-purple-500/40 hover:to-pink-500/40 hover:ring-purple-300 hover:shadow-purple-500/50' 
                  : `bg-slate-800/50 ${color}`
              }`}
              style={{ 
                animationDelay: `${0.7 + index * 0.1}s`,
                transform: 'perspective(400px) rotateX(10deg) rotateY(5deg)',
                boxShadow: href === '#services' 
                  ? '0 0 30px rgba(168, 85, 247, 0.4), 0 10px 20px rgba(0, 0, 0, 0.3)' 
                  : '0 10px 20px rgba(0, 0, 0, 0.3)'
              }}
              title={href === '#services' ? 'View My Services' : ''}
            >
              <Icon className={`w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-125 transition-all duration-300 ${
                href === '#services' ? 'text-purple-300 animate-pulse' : ''
              }`} style={{ filter: 'drop-shadow(0 0 5px rgba(255, 255, 255, 0.3))' }} />
              
              {href === '#services' && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full animate-ping"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full animate-pulse"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-sm animate-pulse"></div>
                </>
              )}
              
              <div className={`absolute inset-0 bg-gradient-to-r ${href === '#services' ? 'from-purple-400/30 to-pink-400/30' : 'from-blue-400/20 to-purple-400/20'} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </a>
          ))}
        </div>

        {/* Enhanced 3D CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 px-4">
          <a
            href="#projects"
            className="group relative bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-2xl animate-fade-in-up overflow-hidden text-sm sm:text-base transform-gpu"
            style={{ 
              animationDelay: '1s',
              transform: 'perspective(600px) rotateX(8deg)',
              boxShadow: '0 0 30px rgba(59, 130, 246, 0.4), 0 15px 25px rgba(0, 0, 0, 0.3)'
            }}
          >
            <span className="relative z-10 flex items-center justify-center">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              View My Work
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <a
            href="#contact"
            className="group relative border-2 border-blue-400 text-blue-400 px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-xl font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 hover:scale-105 shadow-2xl animate-fade-in-up overflow-hidden text-sm sm:text-base transform-gpu"
            style={{ 
              animationDelay: '1.1s',
              transform: 'perspective(600px) rotateX(8deg)',
              boxShadow: '0 0 20px rgba(59, 130, 246, 0.3), 0 15px 25px rgba(0, 0, 0, 0.2)'
            }}
          >
            <span className="relative z-10 flex items-center justify-center">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Get In Touch
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>

      </div>

      {/* Enhanced 3D Decorative Elements */}
      <div className="hidden sm:block absolute top-20 left-4 sm:left-10 md:left-20 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 border border-blue-400/20 rounded-full animate-spin-slow transform-gpu" 
           style={{ 
             transform: 'perspective(400px) rotateX(45deg) rotateY(45deg)',
             boxShadow: '0 0 20px rgba(59, 130, 246, 0.2)'
           }}></div>
      <div className="hidden sm:block absolute bottom-20 right-4 sm:right-10 md:right-20 w-12 sm:w-18 md:w-24 h-12 sm:h-18 md:h-24 border border-purple-400/20 rounded-full animate-spin-slow transform-gpu" 
           style={{ 
             animationDirection: 'reverse',
             transform: 'perspective(400px) rotateX(30deg) rotateZ(45deg)',
             boxShadow: '0 0 15px rgba(139, 92, 246, 0.2)'
           }}></div>
      <div className="hidden md:block absolute top-1/2 left-4 sm:left-6 md:left-10 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 border border-pink-400/20 rounded-full animate-pulse transform-gpu"
           style={{ 
             transform: 'perspective(300px) rotateY(60deg) rotateX(30deg)',
             boxShadow: '0 0 10px rgba(236, 72, 153, 0.2)'
           }}></div>
    </section>
  );
};

export default Hero;