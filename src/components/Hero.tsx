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
      {/* Dynamic Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
      </div>

      {/* Interactive Mouse Follower */}
      <div 
        className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl transition-all duration-300 ease-out pointer-events-none"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
          </div>
        ))}
      </div>

      {/* Floating Code Elements */}
      <div className="absolute inset-0">
        {['<div>', '</div>', '{...}', '( )', '[ ]', '< />', 'fn()', '{}'].map((code, i) => (
          <div
            key={i}
            className="absolute text-blue-400/20 font-mono text-lg animate-float-slow"
            style={{
              left: `${10 + (i * 11)}%`,
              top: `${15 + Math.sin(i) * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          >
            {code}
          </div>
        ))}
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        {/* Enhanced Main Title */}
        <div className="mb-6 sm:mb-8">
          <div className="flex justify-center items-center mb-4">
            <div className="relative">
              <Code className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-400 animate-spin-slow" />
              <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-20"></div>
            </div>
          </div>
          
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 animate-fade-in-up leading-tight">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x">
              Aryan Singh Thakur
            </span>
          </h1>
          
          <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-6 sm:mb-8 h-12 sm:h-14 md:h-16 flex items-center justify-center px-4">
            <span className="mr-2 sm:mr-3">I'm a</span>
            <div className="relative">
              <span className={`text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-bold min-w-[200px] xs:min-w-[250px] sm:min-w-[300px] md:min-w-[350px] text-left inline-block transition-all duration-300 ${
                isTransitioning ? 'opacity-80 scale-95' : 'opacity-100 scale-100'
              }`}>
                {displayText}
                <span className={`text-blue-400 transition-all duration-200 ${
                  isTyping ? 'animate-pulse opacity-100' : 'animate-blink opacity-80'
                }`}>|</span>
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
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-8 sm:mb-10 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed animate-fade-in-up px-4" style={{ animationDelay: '0.5s' }}>
            I'm a passionate{' '}
            <span className="text-blue-400 font-semibold">Full Stack Developer</span> and{' '}
            <span className="text-purple-400 font-semibold">UI/UX Designer</span> who loves creating{' '}
            <span className="text-pink-400 font-semibold">innovative digital solutions</span> that make a difference.
          </p>
        </div>

        {/* Enhanced Social Links */}
        <div className="flex justify-center space-x-4 sm:space-x-6 md:space-x-8 mb-8 sm:mb-12">
          {[
            { icon: Github, href: 'https://github.com/heyoaryan', color: 'hover:bg-gray-700' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/aryan-singh-thakur-12a422281/', color: 'hover:bg-blue-600' },
            { icon: Mail, href: 'mailto:iamaryan721@gmail.com', color: 'hover:bg-red-600' },
            { icon: Briefcase, href: '#services', color: 'hover:bg-purple-600', isService: true, label: 'My Services' }
          ].map(({ icon: Icon, href, color }, index) => (
            <a
              key={index}
              href={href}
              onClick={href === '#services' ? (e) => {
                e.preventDefault();
                // Show the service popup
                const event = new CustomEvent('showServicePopup');
                window.dispatchEvent(event);
              } : undefined}
              className={`group relative p-3 sm:p-4 bg-slate-800/50 backdrop-blur-sm rounded-full ${color} transition-all duration-300 hover:scale-110 hover:shadow-2xl animate-fade-in-up ${href === '#services' ? 'ring-2 ring-purple-400/30 animate-pulse' : ''}`}
              style={{ animationDelay: `${0.7 + index * 0.1}s` }}
              title={href === '#services' ? 'View My Services' : ''}
            >
              <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform duration-300" />
              <div className={`absolute inset-0 bg-gradient-to-r ${href === '#services' ? 'from-purple-400/20 to-pink-400/20' : 'from-blue-400/20 to-purple-400/20'} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              {href === '#services' && (
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-slate-800/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  My Services
                </div>
              )}
            </a>
          ))}
        </div>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 px-4">
          <a
            href="#projects"
            className="group relative bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-2xl animate-fade-in-up overflow-hidden text-sm sm:text-base"
            style={{ animationDelay: '1s' }}
          >
            <span className="relative z-10 flex items-center justify-center">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              View My Work
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <a
            href="#contact"
            className="group relative border-2 border-blue-400 text-blue-400 px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-xl font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 hover:scale-105 shadow-2xl animate-fade-in-up overflow-hidden text-sm sm:text-base"
            style={{ animationDelay: '1.1s' }}
          >
            <span className="relative z-10 flex items-center justify-center">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Get In Touch
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>

      </div>

      {/* Decorative Elements */}
      <div className="hidden sm:block absolute top-20 left-4 sm:left-10 md:left-20 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 border border-blue-400/20 rounded-full animate-spin-slow"></div>
      <div className="hidden sm:block absolute bottom-20 right-4 sm:right-10 md:right-20 w-12 sm:w-18 md:w-24 h-12 sm:h-18 md:h-24 border border-purple-400/20 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
      <div className="hidden md:block absolute top-1/2 left-4 sm:left-6 md:left-10 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 border border-pink-400/20 rounded-full animate-pulse"></div>
    </section>
  );
};

export default Hero;