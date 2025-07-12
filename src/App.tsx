import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import ServiceLoadingScreen from './components/ServiceLoadingScreen';
import ServicePopup from './components/ServicePopup';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isServiceLoading, setIsServiceLoading] = useState(false);
  const [showServicePopup, setShowServicePopup] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handleServiceLoadingComplete = () => {
    setIsServiceLoading(false);
    setCurrentPage('services');
  };

  const handleNavigateToServices = () => {
    setIsServiceLoading(true);
    setCurrentPage('loading-services');
  };

  useEffect(() => {
    // Listen for custom service popup event
    const handleShowServicePopup = () => {
      setShowServicePopup(true);
    };

    window.addEventListener('showServicePopup', handleShowServicePopup);
    return () => window.removeEventListener('showServicePopup', handleShowServicePopup);
  }, []);

  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-slate-900">
      {isLoading ? (
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      ) : isServiceLoading ? (
        <ServiceLoadingScreen onLoadingComplete={handleServiceLoadingComplete} />
      ) : (
        <>
          {/* Backdrop blur when popup is open */}
          {showServicePopup && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />
          )}
          
          <ServicePopup 
            isOpen={showServicePopup} 
            onClose={() => setShowServicePopup(false)}
            onNavigateToServices={handleNavigateToServices}
          />
          
          <Navigation currentPage={currentPage} onNavigateToServices={handleNavigateToServices} />
          
          {currentPage === 'home' && (
            <>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </>
          )}
          
          {currentPage === 'services' && <Services />}
          
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;