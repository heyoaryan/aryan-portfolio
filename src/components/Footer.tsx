import React from 'react';
import { Heart, Code, ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/heyoaryan', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/aryan-singh-thakur-12a422281/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:iamaryan721@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 border-t border-slate-700/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-2 sm:p-3 rounded-full hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl group transform-gpu"
        style={{ transform: 'perspective(200px) rotateX(10deg)' }}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4 sm:mb-6 group">
              <div className="relative">
                <Code className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 group-hover:rotate-180 transition-transform duration-500" />
                <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-20 group-hover:opacity-40"></div>
              </div>
              <span className="ml-2 sm:ml-3 text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                Aryan Singh Thakur
              </span>
            </div>
            <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 leading-relaxed">
              Full Stack Developer passionate about creating innovative web solutions and beautiful user experiences. 
              Building the future, one line of code at a time.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="group p-2 sm:p-2.5 bg-slate-700/50 rounded-lg hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300 hover:scale-110 hover:shadow-lg transform-gpu"
                  aria-label={social.label}
                  style={{ transform: 'perspective(200px) rotateX(5deg)' }}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="sm:col-span-1">
            <h4 className="text-base sm:text-lg text-white font-semibold mb-4 sm:mb-6 flex items-center">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full mr-3"></div>
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((item, index) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm sm:text-base text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block group"
                  >
                    <span className="group-hover:text-blue-400 transition-colors duration-300">→</span> {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-base sm:text-lg text-white font-semibold mb-4 sm:mb-6 flex items-center">
              <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full mr-3"></div>
              Get In Touch
            </h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-3 group">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                <a 
                  href="mailto:iamaryan721@gmail.com" 
                  className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors duration-300"
                >
                  iamaryan721@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-pulse"></div>
                <span className="text-sm sm:text-base text-gray-400">Delhi, India</span>
              </div>
            </div>
            
            {/* Status */}
            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-lg">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-xs sm:text-sm font-semibold">Available for freelance work</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700/50 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center text-gray-400 text-xs sm:text-sm">
              <span>© {currentYear} Aryan Singh Thakur. All rights reserved.</span>
            </div>
            
            <div className="flex items-center text-gray-400 text-xs sm:text-sm">
              <span>Made with</span>
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 mx-1 animate-pulse" />
              <span>and</span>
              <Code className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 mx-1 animate-bounce" />
              <span>by Aryan Singh Thakur</span>
            </div>
          </div>
          
          {/* Privacy Notice */}
          <div className="mt-4 sm:mt-6 text-center">
            <p className="text-xs text-gray-500">
              This website is protected by advanced security measures. Unauthorized recording, screenshots, or downloads are prohibited.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-2xl"></div>
    </footer>
  );
};

export default Footer;