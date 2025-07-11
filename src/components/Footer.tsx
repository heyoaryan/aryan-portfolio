import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-3 sm:mb-4">
              <Code className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
              <span className="ml-2 text-lg sm:text-xl font-bold text-white">Aryan Singh Thakur</span>
            </div>
            <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">
              Full Stack Developer passionate about creating innovative web solutions and beautiful user experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm sm:text-base text-white font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-1 sm:space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm sm:text-base text-white font-semibold mb-3 sm:mb-4">Services</h4>
            <ul className="space-y-1 sm:space-y-2">
              {['Web Development', 'MERN Stack Development', 'Frontend Development', 'UI/UX Design'].map((service) => (
                <li key={service}>
                  <a 
                    href="#services" 
                    className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs sm:text-sm mb-3 md:mb-0">
            © 2025 All rights reserved.
          </p>
          <div className="flex items-center text-gray-400 text-xs sm:text-sm">
            <span>Made with</span>
            <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 mx-1" />
            <span>and</span>
            <Code className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 mx-1" />
            <span>by Aryan Singh Thakur</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;