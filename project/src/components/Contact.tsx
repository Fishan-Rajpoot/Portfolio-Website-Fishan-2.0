import React, { useState } from 'react';
import { Send, Linkedin, Github, Mail, Globe } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formState.name || !formState.email || !formState.message) {
      setFormStatus({
        type: 'error',
        message: 'All fields are required!',
      });
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      setFormStatus({
        type: 'error',
        message: 'Please enter a valid email address.',
      });
      return;
    }
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.',
      });
      
      setFormState({
        name: '',
        email: '',
        message: '',
      });
      
      setTimeout(() => {
        setFormStatus({
          type: null,
          message: '',
        });
      }, 5000);
    }, 1500);
  };
  
  return (
    <section 
      id="contact" 
      className="py-20 bg-background relative"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <div className="h-px w-12 bg-neon-cyan"></div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mx-4">
            MULTIPLAYER <span className="text-neon-cyan">MODE</span>
          </h2>
          <div className="h-px w-12 bg-neon-cyan"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Contact info */}
          <div className="card backdrop-blur-md">
            <h3 className="text-xl font-heading font-bold text-neon-cyan mb-6">
              CONNECT WITH ME
            </h3>
            
            <div className="space-y-6">
              <a 
                href="mailto:fishanqaisar@gmail.com" 
                className="flex items-center text-text-secondary hover:text-neon-cyan transition-colors duration-300"
              >
                <Mail className="w-5 h-5 mr-3" />
                <span>fishanqaisar@gmail.com</span>
              </a>
              
              <a 
                href="https://github.com/FishanQaisar" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center text-text-secondary hover:text-neon-cyan transition-colors duration-300"
              >
                <Github className="w-5 h-5 mr-3" />
                <span>github.com/FishanQaisar</span>
              </a>
              
              <a 
                href="https://linkedin.com/in/muhammad-fishan-qaisar-0b6a9422b" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center text-text-secondary hover:text-neon-cyan transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5 mr-3" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
          
          {/* Contact form */}
          <div className="card backdrop-blur-md">
            <h3 className="text-xl font-heading font-bold text-neon-cyan mb-6">
              SEND MESSAGE
            </h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-white mb-2 font-heading text-sm">
                  YOUR NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-neon-cyan/30 rounded-md text-white focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan transition-colors duration-300"
                  placeholder="Enter your name"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-white mb-2 font-heading text-sm">
                  YOUR EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-neon-cyan/30 rounded-md text-white focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan transition-colors duration-300"
                  placeholder="Enter your email"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-white mb-2 font-heading text-sm">
                  YOUR MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-neon-cyan/30 rounded-md text-white focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan transition-colors duration-300 resize-none"
                  placeholder="Type your message here..."
                ></textarea>
              </div>
              
              {formStatus.type && (
                <div 
                  className={`mb-4 p-3 rounded-md ${
                    formStatus.type === 'success' 
                      ? 'bg-neon-green/20 text-neon-green' 
                      : 'bg-red-500/20 text-red-400'
                  }`}
                >
                  {formStatus.message}
                </div>
              )}
              
              <button
                type="submit"
                className="cybr-btn w-full"
              >
                SEND MESSAGE
                <Send className="w-4 h-4 ml-2 inline-block" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};