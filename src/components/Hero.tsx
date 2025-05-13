import React, { useEffect, useRef } from 'react';
import { MoveDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    // Simple glitch effect for the title
    if (titleRef.current) {
      const glitchEffect = () => {
        const title = titleRef.current;
        if (!title) return;
        
        title.style.textShadow = '2px 0 #00F0FF, -2px 0 #9D00FF';
        setTimeout(() => {
          if (title) title.style.textShadow = '-2px 0 #00F0FF, 2px 0 #9D00FF';
        }, 100);
        setTimeout(() => {
          if (title) title.style.textShadow = '0 0 8px #00F0FF';
        }, 200);
      };
      
      const interval = setInterval(glitchEffect, 3000);
      return () => clearInterval(interval);
    }
  }, []);
  
  const handlePressStart = () => {
    // Play sound effect if sound is enabled
    // Scroll to About section
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section 
      id="home" 
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Hero content */}
      <div className="container mx-auto px-4 text-center z-10">
        <h1 
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-4 animate-fade-in"
          data-text="UNITY GAME DEVELOPER"
        >
          UNITY GAME <span className="text-neon-cyan">DEVELOPER</span>
        </h1>
        
        <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-8 animate-fade-in-up">
          Crafting immersive gaming experiences & virtual worlds through code, art, and imagination
        </p>
        
        <button 
          onClick={handlePressStart}
          className="cybr-btn animate-fade-in-up delay-300"
          aria-label="Press start to explore"
        >
          PRESS START
          <span aria-hidden>_</span>
        </button>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <MoveDown className="w-8 h-8 text-neon-cyan" />
      </div>
    </section>
  );
};