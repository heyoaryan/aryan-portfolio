import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Code, Briefcase, Mail, Zap } from 'lucide-react';

interface NavigationProps {
  currentPage?: string;
  onNavigateToServices?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage = 'home', onNavigateToServices }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Projects', href: '#projects', icon: Briefcase },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  const handleNavClick = (item: any) => {
    if (item.name === 'Services') {
      if (onNavigateToServices) {
        onNavigateToServices();
      }
    } else if (currentPage === 'services') {
      // If we're on services page and clicking other nav items, reload the page to go back to home
      window.location.href = item.href;
    } else {
      // Smooth scroll to section on home page
      const targetElement = document.querySelector(item.href);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${
      scrolled 
        ? 'bg-slate-900/95 backdrop-blur-md shadow-2xl border-b border-slate-800/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Enhanced Logo */}
          <div className="flex items-center group">
            <div className="relative">
              <Code className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-400 group-hover:rotate-180 transition-transform duration-500" />
              <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-20 group-hover:opacity-40"></div>
            </div>
            <span className="ml-2 sm:ml-3 text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
              Aryan Singh Thakur
            </span>
          </div>

          {/* Desktop Navigation with Enhanced Effects */}
          <div className="hidden lg:block">
            {currentPage === 'home' && (
              <div className="ml-6 lg:ml-10 flex items-baseline space-x-1">
                {navItems.map(({ name, href, icon: Icon }) => (
                  <button
                    key={name}
                    onClick={() => handleNavClick({ name, href })}
                    className={`group relative px-3 lg:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                      activeSection === name.toLowerCase()
                        ? 'text-white bg-gradient-to-r from-blue-500/20 to-purple-500/20 shadow-lg'
                        : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    <Icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    <span>{name}</span>
                    {activeSection === name.toLowerCase() && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="lg:hidden">
            {currentPage === 'home' && (
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="group relative p-1.5 sm:p-2 text-gray-300 hover:text-white focus:outline-none focus:text-white transition-all duration-300 hover:bg-slate-800/50 rounded-lg"
              >
                <div className="relative">
                  {isOpen ? (
                    <X className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-90 transition-transform duration-300" />
                  ) : (
                    <Menu className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" />
                  )}
                </div>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Navigation */}
      {currentPage === 'home' && (
        <div className={`lg:hidden transition-all duration-500 ease-in-out ${
          isOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-slate-800/95 backdrop-blur-md border-t border-slate-700/50">
            <div className="px-3 sm:px-4 pt-2 pb-3 space-y-1">
              {navItems.map(({ name, href, icon: Icon }, index) => (
                <button
                  key={name}
                  onClick={() => handleNavClick({ name, href })}
                  className={`group flex items-center space-x-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 transform ${
                    activeSection === name.toLowerCase()
                      ? 'text-white bg-gradient-to-r from-blue-500/20 to-purple-500/20 translate-x-2'
                      : 'text-gray-300 hover:text-white hover:bg-slate-700/50 hover:translate-x-2'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>{name}</span>
                  <div className="flex-1"></div>
                  {activeSection === name.toLowerCase() && (
                    <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 animate-pulse" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;