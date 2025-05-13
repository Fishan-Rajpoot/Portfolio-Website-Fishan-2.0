import React, { useState, useEffect } from 'react';
import { Cpu, TowerControl as Controller, Gauge, FileText, Users, Info } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/90 backdrop-blur-md py-2 shadow-lg border-b border-neon-cyan/30' 
          : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Cpu className="w-8 h-8 text-neon-cyan mr-2" />
          <span className="text-2xl font-heading font-bold text-white">
            UNITY<span className="text-neon-cyan">.DEV</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6">
            {[
              { name: 'Home', icon: <Controller className="w-4 h-4" />, href: '#home' },
              { name: 'Stats', icon: <Gauge className="w-4 h-4" />, href: '#about' },
              { name: 'Quests', icon: <FileText className="w-4 h-4" />, href: '#experience' },
              { name: 'Inventory', icon: <Info className="w-4 h-4" />, href: '#skills' },
              { name: 'Achievements', icon: <Controller className="w-4 h-4" />, href: '#projects' },
              { name: 'Multiplayer', icon: <Users className="w-4 h-4" />, href: '#contact' },
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="flex items-center px-3 py-2 text-text-secondary hover:text-neon-cyan transition-colors duration-300"
                >
                  {item.icon}
                  <span className="ml-1">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 bg-background/95 backdrop-blur-md transition-transform duration-300 transform ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-white focus:outline-none"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col items-center h-full justify-center">
          <ul className="flex flex-col space-y-8">
            {[
              { name: 'Home', icon: <Controller className="w-5 h-5" />, href: '#home' },
              { name: 'Stats', icon: <Gauge className="w-5 h-5" />, href: '#about' },
              { name: 'Quests', icon: <FileText className="w-5 h-5" />, href: '#experience' },
              { name: 'Inventory', icon: <Info className="w-5 h-5" />, href: '#skills' },
              { name: 'Achievements', icon: <Controller className="w-5 h-5" />, href: '#projects' },
              { name: 'Multiplayer', icon: <Users className="w-5 h-5" />, href: '#contact' },
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="flex items-center text-xl text-text-secondary hover:text-neon-cyan transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.icon}
                  <span className="ml-2">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};