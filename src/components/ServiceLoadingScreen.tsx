import React, { useEffect, useState } from 'react';
import { Code2, Globe, Database, Zap, Star, Sparkles, Cuboid as Cube, Box, Layers, Palette } from 'lucide-react';

interface ServiceLoadingScreenProps {
  onLoadingComplete: () => void;
}

const ServiceLoadingScreen: React.FC<ServiceLoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState('Loading FREE Services...');

  const loadingTexts = [
    'Loading FREE Services...',
    'Preparing Web Development...',
    'Setting up Frontend Tools...',
    'Initializing MERN Stack...',
    'Configuring FREE Offerings...',
    'Rendering Service Portal...',
    'Welcome to FREE Services!'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 12 + 3;
        
        // Update loading text based on progress
        if (newProgress > 90) setCurrentText(loadingTexts[6]);
        else if (newProgress > 75) setCurrentText(loadingTexts[5]);
        else if (newProgress > 60) setCurrentText(loadingTexts[4]);
        else if (newProgress > 45) setCurrentText(loadingTexts[3]);
        else if (newProgress > 30) setCurrentText(loadingTexts[2]);
        else if (newProgress > 15) setCurrentText(loadingTexts[1]);
        else setCurrentText(loadingTexts[0]);

        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoadingComplete(), 800);
          return 100;
        }
        return newProgress;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center z-50 overflow-hidden">
      {/* Enhanced 3D Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(window.innerWidth < 640 ? 25 : 50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-pulse transform-gpu"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1 + Math.random() * 2}s`,
              transform: `translate3d(0, 0, ${Math.random() * 80}px) rotateX(${Math.random() * 360}deg) rotateY(${Math.random() * 360}deg)`,
              boxShadow: '0 0 8px rgba(34, 197, 94, 0.4)'
            }}
          />
        ))}
      </div>

      {/* Enhanced 3D Floating Service Icons */}
      <div className="absolute inset-0">
        {[Globe, Code2, Database, Palette, Zap, Cube].map((Icon, i) => (
          <div
            key={i}
            className="absolute text-green-400/25 animate-bounce transform-gpu hidden sm:block"
            style={{
              left: `${8 + (i * 14)}%`,
              top: `${15 + Math.sin(i) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + Math.random()}s`,
              transform: `translate3d(0, 0, ${i * 20}px) rotateX(${i * 30}deg) rotateY(${i * 45}deg)`,
              filter: 'drop-shadow(0 0 10px rgba(34, 197, 94, 0.3))'
            }}
          >
            <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
          </div>
        ))}
      </div>

      {/* 3D "FREE" Text Floating */}
      <div className="absolute inset-0">
        {['F', 'R', 'E', 'E'].map((letter, i) => (
          <div
            key={i}
            className="absolute text-green-400/40 text-2xl sm:text-4xl font-bold animate-bounce transform-gpu"
            style={{
              left: `${15 + (i * 18)}%`,
              top: `${25 + Math.sin(i) * 15}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${2 + Math.random()}s`,
              transform: `translate3d(0, 0, ${i * 25}px) rotateX(${i * 20}deg) rotateY(${i * 30}deg)`,
              textShadow: '0 0 20px rgba(34, 197, 94, 0.6)'
            }}
          >
            {letter}
          </div>
        ))}
      </div>

      <div className="text-center relative z-10 px-4">
        {/* Enhanced 3D Main Loading Icon with Service Theme */}
        <div className="relative mb-6 sm:mb-8">
          <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-30 scale-125 sm:scale-150 transform-gpu" style={{ transform: 'rotateX(45deg) rotateY(45deg)' }}></div>
          <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20 scale-110 sm:scale-125 transform-gpu" style={{ animationDelay: '0.5s', transform: 'rotateX(30deg) rotateY(60deg)' }}></div>
          <div className="absolute inset-0 bg-purple-500 rounded-full animate-ping opacity-15 scale-95 sm:scale-110 transform-gpu" style={{ animationDelay: '1s', transform: 'rotateX(60deg) rotateY(30deg)' }}></div>
          
          <div className="relative bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 p-3 sm:p-4 md:p-5 rounded-full transform-gpu animate-gradient-x" 
               style={{ 
                 transform: 'perspective(400px) rotateX(15deg) rotateY(15deg)',
                 boxShadow: '0 0 40px rgba(34, 197, 94, 0.6), 0 0 80px rgba(59, 130, 246, 0.4), 0 0 120px rgba(139, 92, 246, 0.2)'
               }}>
            <Globe className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-white animate-pulse" 
                   style={{ filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))' }} />
          </div>
          
          {/* Enhanced 3D Orbiting Service Icons */}
          <div className="absolute inset-0 animate-spin transform-gpu" style={{ animationDuration: '4s', transform: 'perspective(300px) rotateX(20deg)' }}>
            <Code2 className="absolute w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-blue-400 -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2" 
                   style={{ filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))' }} />
          </div>
          <div className="absolute inset-0 animate-spin transform-gpu" style={{ animationDuration: '5s', animationDirection: 'reverse', transform: 'perspective(300px) rotateY(20deg)' }}>
            <Database className="absolute w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-purple-400 -bottom-2 sm:-bottom-3 left-1/2 transform -translate-x-1/2" 
                      style={{ filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.6))' }} />
          </div>
          <div className="absolute inset-0 animate-spin transform-gpu" style={{ animationDuration: '6s', transform: 'perspective(300px) rotateZ(20deg)' }}>
            <Palette className="absolute w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-pink-400 top-1/2 -left-2 sm:-left-3 transform -translate-y-1/2" 
                     style={{ filter: 'drop-shadow(0 0 8px rgba(236, 72, 153, 0.6))' }} />
          </div>
          
          {/* FREE Badge */}
          <div className="absolute -top-2 -right-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse transform-gpu"
               style={{ 
                 transform: 'perspective(200px) rotateX(10deg) rotateY(-10deg)',
                 boxShadow: '0 0 15px rgba(34, 197, 94, 0.6)'
               }}>
            FREE
          </div>
        </div>
        
        {/* Enhanced 3D Progress Bar */}
        <div className="mb-4 sm:mb-6">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto h-2 sm:h-2.5 md:h-3 bg-slate-800 rounded-full overflow-hidden relative shadow-lg transform-gpu" 
               style={{ 
                 transform: 'perspective(400px) rotateX(10deg)',
                 boxShadow: '0 0 20px rgba(0, 0, 0, 0.5), inset 0 0 10px rgba(34, 197, 94, 0.2)'
               }}>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
            <div 
              className="h-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 transition-all duration-300 ease-out relative overflow-hidden transform-gpu animate-gradient-x"
              style={{ 
                width: `${progress}%`,
                boxShadow: '0 0 20px rgba(34, 197, 94, 0.6), 0 0 40px rgba(59, 130, 246, 0.4), 0 0 60px rgba(139, 92, 246, 0.2)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
              <div className="absolute right-0 top-0 w-2 sm:w-3 md:w-4 h-full bg-white/50 blur-sm animate-pulse" 
                   style={{ filter: 'drop-shadow(0 0 5px rgba(255, 255, 255, 0.8))' }}></div>
            </div>
          </div>
        </div>
        
        {/* Enhanced 3D Loading Text */}
        <div className="mb-3 sm:mb-4">
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-medium animate-pulse transform-gpu" 
             style={{ 
               transform: 'perspective(300px) rotateX(5deg)',
               textShadow: '0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(34, 197, 94, 0.3)'
             }}>
            {currentText}
          </p>
          <div className="flex justify-center items-center mt-2 sm:mt-3">
            <span className="text-green-400 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold transform-gpu" 
                  style={{ 
                    textShadow: '0 0 15px rgba(34, 197, 94, 0.8)',
                    transform: 'perspective(200px) rotateX(10deg)'
                  }}>
              {Math.round(progress)}%
            </span>
            <div className="ml-2 sm:ml-3 flex space-x-1">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-bounce transform-gpu" 
                   style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.6)' }}></div>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-bounce transform-gpu" 
                   style={{ animationDelay: '0.1s', boxShadow: '0 0 10px rgba(59, 130, 246, 0.6)' }}></div>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full animate-bounce transform-gpu" 
                   style={{ animationDelay: '0.2s', boxShadow: '0 0 10px rgba(139, 92, 246, 0.6)' }}></div>
            </div>
          </div>
        </div>

        {/* Enhanced 3D Service Loading Messages */}
        <div className="text-left font-mono text-xs sm:text-sm text-gray-400 space-y-1 opacity-60 max-w-xs sm:max-w-sm md:max-w-md mx-auto transform-gpu" 
             style={{ transform: 'perspective(400px) rotateX(8deg)' }}>
          <div className="animate-pulse" style={{ animationDelay: '0s' }}>
            <span className="text-green-400" style={{ textShadow: '0 0 8px rgba(34, 197, 94, 0.5)' }}>→</span> <span className="text-blue-400" style={{ textShadow: '0 0 8px rgba(59, 130, 246, 0.5)' }}>Loading</span> FREE Web Development...
          </div>
          <div className="animate-pulse" style={{ animationDelay: '0.5s' }}>
            <span className="text-purple-400" style={{ textShadow: '0 0 8px rgba(139, 92, 246, 0.5)' }}>→</span> <span className="text-yellow-400" style={{ textShadow: '0 0 8px rgba(251, 191, 36, 0.5)' }}>Preparing</span> FREE MERN Stack...
          </div>
          <div className="animate-pulse" style={{ animationDelay: '1s' }}>
            <span className="text-pink-400" style={{ textShadow: '0 0 8px rgba(236, 72, 153, 0.5)' }}>→</span> <span className="text-cyan-400" style={{ textShadow: '0 0 8px rgba(6, 182, 212, 0.5)' }}>Initializing</span> FREE Frontend...
          </div>
          <div className="animate-pulse" style={{ animationDelay: '1.5s' }}>
            <span className="text-green-400" style={{ textShadow: '0 0 8px rgba(34, 197, 94, 0.5)' }}>// All services are FREE!</span>
          </div>
        </div>
      </div>

      {/* Enhanced 3D Corner Decorations */}
      <div className="absolute top-2 sm:top-4 left-2 sm:left-4 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border-l-2 border-t-2 border-green-400/30 animate-pulse transform-gpu" 
           style={{ 
             transform: 'perspective(200px) rotateX(45deg) rotateY(45deg)',
             boxShadow: '0 0 15px rgba(34, 197, 94, 0.3)'
           }}></div>
      <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border-r-2 border-t-2 border-blue-400/30 animate-pulse transform-gpu" 
           style={{ 
             animationDelay: '0.5s',
             transform: 'perspective(200px) rotateX(45deg) rotateY(-45deg)',
             boxShadow: '0 0 15px rgba(59, 130, 246, 0.3)'
           }}></div>
      <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border-l-2 border-b-2 border-purple-400/30 animate-pulse transform-gpu" 
           style={{ 
             animationDelay: '1s',
             transform: 'perspective(200px) rotateX(-45deg) rotateY(45deg)',
             boxShadow: '0 0 15px rgba(139, 92, 246, 0.3)'
           }}></div>
      <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border-r-2 border-b-2 border-green-400/30 animate-pulse transform-gpu" 
           style={{ 
             animationDelay: '1.5s',
             transform: 'perspective(200px) rotateX(-45deg) rotateY(-45deg)',
             boxShadow: '0 0 15px rgba(34, 197, 94, 0.3)'
           }}></div>
    </div>
  );
};

export default ServiceLoadingScreen;