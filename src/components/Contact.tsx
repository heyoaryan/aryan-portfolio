import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
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
      href: 'mailto:iamaryan721@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 8384041061',
      href: 'tel:+918384041061'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Delhi, India',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/heyoaryan', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/aryan-singh-thakur-12a422281/', label: 'LinkedIn' },
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Ready to start your next project? Let's work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className={`lg:col-span-2 max-w-4xl mx-auto transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="bg-slate-800 rounded-2xl p-6 sm:p-8 hover:bg-slate-700 transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-slate-600/50">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Let's Connect</h3>
              <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 leading-relaxed">
                I'm always excited to work on new projects and collaborate with amazing people.
                Whether you have a project idea, want to discuss opportunities, or just want to connect, 
                feel free to reach out. Let's create something amazing together!
              </p>

              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={info.title} className="flex items-center space-x-3 sm:space-x-4">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2.5 sm:p-3 rounded-lg hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base text-white font-semibold hover:text-blue-400 transition-colors duration-300">{info.title}</h4>
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

              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-slate-700">
                <h4 className="text-sm sm:text-base text-white font-semibold mb-3 sm:mb-4">Follow Me</h4>
                <div className="flex space-x-3 sm:space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="p-2.5 sm:p-3 bg-slate-700 rounded-lg hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                      aria-label={social.label}
                    >
                      <social.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white hover:scale-110 transition-transform duration-300" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;