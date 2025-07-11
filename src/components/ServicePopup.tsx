import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Sparkles, Code, Globe, Database } from 'lucide-react';

interface ServicePopupProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToServices: () => void;
}

const ServicePopup: React.FC<ServicePopupProps> = ({ isOpen, onClose, onNavigateToServices }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      // Stagger animations
      setTimeout(() => setAnimationStep(1), 200);
      setTimeout(() => setAnimationStep(2), 400);
      setTimeout(() => setAnimationStep(3), 600);
    } else {
      setIsVisible(false);
      setAnimationStep(0);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleViewServices = () => {
    onClose();
    onNavigateToServices();
  };

  const services = [
    { icon: Globe, text: 'Web Development', color: 'text-blue-400' },
    { icon: Code, text: 'Frontend Development', color: 'text-purple-400' },
    { icon: Database, text: 'MERN Stack Apps', color: 'text-green-400' }
  ];

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center overflow-hidden"
      onClick={handleBackdropClick}
      style={{ 
        padding: '12px',
        minHeight: '100vh',
        minWidth: '100vw'
      }}
    >
      {/* Floating particles - hidden on mobile for better performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div 
        className={`bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl transform transition-all duration-700 border border-slate-700/50 shadow-2xl relative overflow-hidden ${
          isVisible ? 'scale-100 opacity-100 translate-y-0 rotate-0' : 'scale-75 opacity-0 translate-y-8 rotate-3'
        }`}
        style={{
          width: '100%',
          maxWidth: '340px', // Smaller max width for mobile
          maxHeight: 'calc(100vh - 24px)', // Less padding for mobile
          margin: '0 auto',
          // Force mobile-specific sizing
          '@media (max-width: 640px)': {
            maxWidth: '320px',
            width: 'calc(100vw - 24px)'
          }
        }}
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 animate-gradient-x"></div>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-all duration-300 hover:bg-slate-700/50 rounded-lg hover:scale-110 z-10 touch-manipulation"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Content */}
        <div className="text-center relative z-10 p-4">
          {/* Animated Icon */}
          <div className={`mb-4 transform transition-all duration-700 ${animationStep >= 1 ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto animate-pulse shadow-lg">
              <Sparkles className="w-6 h-6 text-white animate-spin-slow" />
            </div>
          </div>

          {/* Title */}
          <div className={`mb-4 transform transition-all duration-700 delay-200 ${animationStep >= 1 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <h2 className="text-lg font-bold text-white mb-2">
              Explore My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 animate-gradient-x">Services</span>
            </h2>
            <p className="text-gray-400 text-xs">
              Professional web development solutions
            </p>
          </div>

          {/* Services Preview */}
          <div className={`space-y-2 mb-4 transform transition-all duration-700 delay-400 ${animationStep >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            {services.map((service, index) => (
              <div 
                key={index}
                className={`bg-slate-700/30 backdrop-blur-sm rounded-lg p-2.5 flex items-center space-x-2 transform transition-all duration-500 hover:bg-slate-700/50 hover:scale-105 border border-slate-600/30 touch-manipulation ${
                  animationStep >= 2 ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                }`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <div className="w-6 h-6 rounded-lg bg-gradient-to-r from-slate-600 to-slate-700 flex items-center justify-center flex-shrink-0">
                  <service.icon className={`w-3 h-3 ${service.color}`} />
                </div>
                <span className="text-white text-xs font-medium flex-1 text-left">{service.text}</span>
                <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse flex-shrink-0"></div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className={`space-y-2 transform transition-all duration-700 delay-600 ${animationStep >= 3 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <button
              onClick={handleViewServices}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2.5 px-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center group text-sm relative overflow-hidden touch-manipulation"
            >
              <span className="relative z-10 flex items-center">
                View All Services
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button
              onClick={onClose}
              className="w-full border border-slate-600 text-gray-300 py-2.5 px-4 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-400 hover:bg-blue-400/5 transition-all duration-300 text-sm hover:scale-105 touch-manipulation"
            >
              Maybe Later
            </button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-2 left-2 w-6 h-6 border-l border-t border-blue-400/20 rounded-tl-lg"></div>
        <div className="absolute bottom-2 right-2 w-6 h-6 border-r border-b border-purple-400/20 rounded-br-lg"></div>
      </div>
    </div>
  );
};

export default ServicePopup;