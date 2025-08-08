import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle, User, AtSign } from 'lucide-react';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Create mailto link
    const subject = `Portfolio Contact: Message from ${formData.name}`;
    const body = `Hi Aryan,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`;
    window.open(`mailto:iamaryan721@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'iamaryan721@gmail.com',
      href: 'mailto:iamaryan721@gmail.com',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 8384041061',
      href: 'tel:+918384041061',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Delhi, India',
      href: '#',
      color: 'from-blue-500 to-purple-500'
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/heyoaryan', label: 'GitHub', color: 'hover:bg-gray-700' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/aryan-singh-thakur-12a422281/', label: 'LinkedIn', color: 'hover:bg-blue-600' },
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-slate-900 w-full overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Ready to start your next project? Let's work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 border border-slate-700/50 transform-gpu"
                 style={{ transform: 'perspective(600px) rotateY(5deg)' }}>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center">
                <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 mr-3" />
                Let's Connect
              </h3>
              <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 leading-relaxed">
                I'm always excited to work on new projects and collaborate with amazing people.
                Whether you have a project idea, want to discuss opportunities, or just want to connect, 
                feel free to reach out. Let's create something amazing together!
              </p>

              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                {contactInfo.map((info, index) => (
                  <div key={info.title} className="group flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 transform-gpu">
                    <div className={`bg-gradient-to-r ${info.color} p-2.5 sm:p-3 rounded-lg group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <info.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base text-white font-semibold group-hover:text-blue-400 transition-colors duration-300">{info.title}</h4>
                      <a
                        href={info.href}
                        className="text-xs sm:text-sm text-gray-400 hover:text-blue-400 transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-700/50 shadow-2xl transform-gpu"
                 style={{ transform: 'perspective(600px) rotateY(-5deg)' }}>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 flex items-center">
                <Send className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 mr-3" />
                Send Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="relative group">
                  <User className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-focus-within:text-blue-400 transition-colors duration-300" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-xl pl-10 sm:pl-12 pr-4 py-3 sm:py-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-slate-700 transition-all duration-300 text-sm sm:text-base"
                  />
                </div>
                
                <div className="relative group">
                  <AtSign className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-focus-within:text-blue-400 transition-colors duration-300" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-xl pl-10 sm:pl-12 pr-4 py-3 sm:py-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-slate-700 transition-all duration-300 text-sm sm:text-base"
                  />
                </div>
                
                <div className="relative group">
                  <MessageCircle className="absolute left-3 sm:left-4 top-4 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-focus-within:text-blue-400 transition-colors duration-300" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    rows={5}
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-xl pl-10 sm:pl-12 pr-4 py-3 sm:py-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-slate-700 transition-all duration-300 resize-none text-sm sm:text-base"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 sm:py-4 px-6 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center group transform-gpu"
                  style={{ transform: 'perspective(400px) rotateX(5deg)' }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                      Send Message
                    </>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;