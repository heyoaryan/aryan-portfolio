import React, { useEffect, useState } from 'react';
import { Code2, Zap, Star, Sparkles } from 'lucide-react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState('Initializing...');

  const loadingTexts = [
    'Initializing...',
    'Loading Components...',
    'Compiling Code...',
    'Optimizing Performance...',
    'Almost Ready...',
    'Welcome!'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 12;
        
        // Update loading text based on progress
        if (newProgress > 80) setCurrentText(loadingTexts[5]);
        else if (newProgress > 65) setCurrentText(loadingTexts[4]);
        else if (newProgress > 50) setCurrentText(loadingTexts[3]);
        else if (newProgress > 35) setCurrentText(loadingTexts[2]);
        else if (newProgress > 20) setCurrentText(loadingTexts[1]);
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
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Floating Code Symbols */}
      <div className="absolute inset-0">
        {['<', '>', '{', '}', '(', ')', '[', ']'].map((symbol, i) => (
          <div
            key={i}
            className="absolute text-blue-400/20 text-2xl font-mono animate-bounce"
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${20 + Math.sin(i) * 30}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${2 + Math.random()}s`
            }}
          >
            {symbol}
          </div>
        ))}
      </div>

      <div className="text-center relative z-10">
        {/* Main Loading Icon with Glow Effect */}
        <div className="relative mb-6 sm:mb-8">
          <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-30 scale-150"></div>
          <div className="absolute inset-0 bg-purple-500 rounded-full animate-ping opacity-20 scale-125" style={{ animationDelay: '0.5s' }}></div>
          <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 p-3 sm:p-4 rounded-full">
            <Code2 className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white animate-pulse" />
          </div>
          
          {/* Orbiting Icons */}
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '3s' }}>
            <Zap className="absolute w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 -top-1.5 sm:-top-2 left-1/2 transform -translate-x-1/2" />
          </div>
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '4s', animationDirection: 'reverse' }}>
            <Star className="absolute w-3 h-3 sm:w-4 sm:h-4 text-blue-400 -bottom-1.5 sm:-bottom-2 left-1/2 transform -translate-x-1/2" />
          </div>
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '5s' }}>
            <Sparkles className="absolute w-3 h-3 sm:w-4 sm:h-4 text-purple-400 top-1/2 -left-1.5 sm:-left-2 transform -translate-y-1/2" />
          </div>
        </div>
        
        {/* Progress Bar with Glow */}
        <div className="mb-4 sm:mb-6 px-4">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto h-2 sm:h-2.5 md:h-3 bg-slate-800 rounded-full overflow-hidden relative shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
            <div 
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 ease-out relative overflow-hidden"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
              <div className="absolute right-0 top-0 w-2 sm:w-3 md:w-4 h-full bg-white/50 blur-sm animate-pulse"></div>
            </div>
          </div>
        </div>
        
        {/* Loading Text with Typewriter Effect */}
        <div className="mb-3 sm:mb-4 px-4">
          <p className="text-white text-sm sm:text-base md:text-lg font-medium animate-pulse">{currentText}</p>
          <div className="flex justify-center items-center mt-1 sm:mt-2">
            <span className="text-blue-400 text-lg sm:text-xl md:text-2xl font-bold">{Math.round(progress)}%</span>
            <div className="ml-1 sm:ml-2 flex space-x-0.5 sm:space-x-1">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-bounce"></div>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        </div>

        {/* Animated Code Lines */}
        <div className="text-left font-mono text-xs sm:text-sm text-gray-400 space-y-0.5 sm:space-y-1 opacity-60 px-4 max-w-xs sm:max-w-sm md:max-w-md mx-auto">
          <div className="animate-pulse" style={{ animationDelay: '0s' }}>
            <span className="text-purple-400">const</span> <span className="text-blue-400">portfolio</span> = <span className="text-green-400">new</span> <span className="text-yellow-400">Developer</span>();
          </div>
          <div className="animate-pulse" style={{ animationDelay: '0.5s' }}>
            portfolio.<span className="text-blue-400">initialize</span>();
          </div>
          <div className="animate-pulse" style={{ animationDelay: '1s' }}>
            portfolio.<span className="text-blue-400">loadSkills</span>(<span className="text-green-400">'awesome'</span>);
          </div>
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-2 sm:top-4 left-2 sm:left-4 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border-l-2 border-t-2 border-blue-400/30 animate-pulse"></div>
      <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border-r-2 border-t-2 border-purple-400/30 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border-l-2 border-b-2 border-pink-400/30 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border-r-2 border-b-2 border-blue-400/30 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
    </div>
  );
};

export default LoadingScreen;