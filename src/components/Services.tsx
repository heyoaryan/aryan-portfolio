import React, { useEffect, useRef, useState } from 'react';
import { Code, Palette, Database, Globe, ArrowRight, CheckCircle, Star, Zap, Home, X, Mail, CreditCard, Clock, Shield } from 'lucide-react';

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [showServiceModal, setShowServiceModal] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      subtitle: 'Complete Website Solutions',
      description: 'I create modern, responsive websites that deliver exceptional user experiences. From simple landing pages to complex web applications, I build solutions that help your business grow online.',
      features: [
        'Responsive Design for all devices',
        'SEO Optimized websites',
        'Fast loading performance',
        'Cross-browser compatibility',
        'Modern UI/UX design',
        'Content Management Systems'
      ],
      pricing: 'Starting from ₹4,999',
      deliveryTime: '15-20 days',
      color: 'from-blue-500 to-cyan-500',
      popular: false
    },
    {
      icon: Code,
      title: 'Frontend Development',
      subtitle: 'React.js & Modern Frameworks',
      description: 'Specialized in creating interactive and dynamic user interfaces using React.js and modern frontend technologies. I build fast, scalable, and maintainable frontend applications.',
      features: [
        'React.js Development',
        'Interactive User Interfaces',
        'State Management (Redux/Context)',
        'API Integration',
        'Component-based Architecture',
        'Performance Optimization'
      ],
      pricing: 'Starting from ₹2,999',
      deliveryTime: '5-10 days',
      color: 'from-purple-500 to-pink-500',
      popular: true
    },
    {
      icon: Database,
      title: 'MERN Stack Development',
      subtitle: 'Full-Stack Web Applications',
      description: 'Complete full-stack development using MongoDB, Express.js, React.js, and Node.js. I build scalable web applications with robust backend systems and beautiful frontends.',
      features: [
        'MongoDB Database Design',
        'Express.js Backend Development',
        'React.js Frontend',
        'Node.js Server Development',
        'RESTful API Development',
        'Authentication & Authorization',
        'Deployment on Cloud Platforms'
      ],
      pricing: 'Starting from ₹7,999',
      deliveryTime: '15-25 days',
      color: 'from-green-500 to-emerald-500',
      popular: false
    }
  ];

  const whyChooseMe = [
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising quality'
    },
    {
      icon: Star,
      title: 'Quality Assured',
      description: 'Clean, maintainable code following best practices'
    },
    {
      icon: CheckCircle,
      title: 'Support Included',
      description: '30 days free support and maintenance included'
    }
  ];

  const handleGetQuote = (serviceName: string) => {
    const subject = `Quote Request for ${serviceName}`;
    const body = `Hi Aryan,\n\nI'm interested in your ${serviceName} service. Could you please provide me with a detailed quote?\n\nProject Details:\n- \n\nThank you!`;
    window.open(`mailto:iamaryan721@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  };

  const handleServiceClick = (service: any) => {
    setSelectedService(service);
    setShowServiceModal(true);
  };

  const handleSendEmail = () => {
    if (!selectedService) return;
    
    const subject = `Service Inquiry - ${selectedService.title}`;
    const body = `Hi Aryan,

I'm interested in your ${selectedService.title} service.

Service Details:
- Service: ${selectedService.title}
- Starting Price: ${selectedService.pricing}
- Delivery Time: ${selectedService.deliveryTime}
- Payment Terms: 30% advance, 70% after completion

Project Requirements:
[Please describe your project requirements here]

Budget: ${selectedService.pricing}
Timeline: ${selectedService.deliveryTime}

Looking forward to working with you!

Best regards`;
    
    window.open(`mailto:iamaryan721@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    setShowServiceModal(false);
  };

  return (
    <section id="services" className="py-20 bg-slate-900 min-h-screen" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Home Button */}
        <div className="fixed top-4 right-4 z-50">
          <button
            onClick={() => {
              // Trigger service loading and then navigate to home
              window.location.href = '/';
            }}
            className="group bg-slate-800/90 backdrop-blur-sm hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-slate-700/50 hover:border-blue-400/50"
            title="Back to Home"
          >
            <Home className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
          </button>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Services</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I offer comprehensive web development services to help bring your digital vision to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              onClick={() => handleServiceClick(service)}
              className={`relative bg-slate-800 rounded-2xl p-8 transform transition-all duration-1000 hover:scale-105 hover:shadow-2xl border border-slate-700/50 group cursor-pointer ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-bold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Service Icon */}
              <div className="mb-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} p-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-full h-full text-white" />
                </div>
              </div>

              {/* Service Content */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-blue-400 font-semibold mb-4">{service.subtitle}</p>
                <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing & Delivery */}
                <div className="border-t border-slate-700 pt-6 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400">Starting Price:</span>
                    <span className="text-white font-bold">{service.pricing}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Delivery Time:</span>
                    <span className="text-blue-400 font-semibold">{service.deliveryTime}</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => handleServiceClick(service)}
                className={`w-full bg-gradient-to-r ${service.color} text-white py-3 px-6 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center group-hover:shadow-lg`}
              >
                View Details
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          ))}
        </div>

        {/* Why Choose Me Section */}
        <div className="bg-slate-800 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">
            Why Choose <span className="text-blue-400">Me?</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseMe.map((item, index) => (
              <div
                key={item.title}
                className={`text-center transform transition-all duration-1000 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${(index + 3) * 200}ms` }}
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Want to Collaborate on a Project with Me?
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's work together and create something amazing! I'm excited to collaborate on your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:iamaryan721@gmail.com?subject=Collaboration%20Inquiry%20-%20Let's%20Work%20Together&body=Hi%20Aryan%2C%0A%0AI'm%20interested%20in%20collaborating%20with%20you%20on%20a%20project.%0A%0AProject%20Details%3A%0A-%20Project%20Type%3A%20%0A-%20Budget%3A%20%0A-%20Timeline%3A%20%0A-%20Requirements%3A%20%0A%0ALet's%20discuss%20how%20we%20can%20work%20together%21%0A%0ABest%20regards"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Get Collaborate
            </a>
            <a
              href="#contact"
              className="border-2 border-blue-400 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 hover:scale-105"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      {showServiceModal && selectedService && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-700/50 shadow-2xl relative">
            {/* Close Button */}
            <button
              onClick={() => setShowServiceModal(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors duration-300 hover:bg-slate-700/50 rounded-lg z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="p-6 sm:p-8">
              {/* Header */}
              <div className="text-center mb-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${selectedService.color} p-4 mx-auto mb-4`}>
                  <selectedService.icon className="w-full h-full text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{selectedService.title}</h2>
                <p className="text-blue-400 font-semibold">{selectedService.subtitle}</p>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-3">Service Overview</h3>
                <p className="text-gray-400 leading-relaxed">{selectedService.description}</p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-4">What's Included</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {selectedService.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing & Terms */}
              <div className="bg-slate-700/30 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                  <CreditCard className="w-5 h-5 mr-2 text-blue-400" />
                  Pricing & Payment Terms
                </h3>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Star className="w-4 h-4 text-yellow-400 mr-2" />
                      <span className="text-gray-400 text-sm">Starting Price</span>
                    </div>
                    <span className="text-white font-bold text-lg">{selectedService.pricing}</span>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Clock className="w-4 h-4 text-blue-400 mr-2" />
                      <span className="text-gray-400 text-sm">Delivery Time</span>
                    </div>
                    <span className="text-blue-400 font-semibold">{selectedService.deliveryTime}</span>
                  </div>
                </div>
                
                {/* Payment Terms */}
                <div className="border-t border-slate-600/50 pt-4">
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <Shield className="w-4 h-4 mr-2 text-green-400" />
                    Payment Structure
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Advance Payment (30%)</span>
                      <span className="text-green-400 font-semibold">Required to start</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Final Payment (70%)</span>
                      <span className="text-blue-400 font-semibold">After completion</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose This Service */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-3">Why Choose This Service?</h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="text-center">
                    <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">Fast Delivery</p>
                  </div>
                  <div className="text-center">
                    <Star className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">Quality Assured</p>
                  </div>
                  <div className="text-center">
                    <Shield className="w-8 h-8 text-green-400 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">30 Days Support</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={handleSendEmail}
                className={`w-full bg-gradient-to-r ${selectedService.color} text-white py-4 px-6 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center group relative overflow-hidden`}
              >
                <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                <span>Send Inquiry Email</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;