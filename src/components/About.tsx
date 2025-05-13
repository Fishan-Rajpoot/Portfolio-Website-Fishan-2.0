import React, { useEffect, useRef } from 'react';
import { ShieldCheck, Trophy, Code, Terminal } from 'lucide-react';

export const About: React.FC = () => {
  const bioRef = useRef<HTMLParagraphElement>(null);
  
  useEffect(() => {
    if (bioRef.current) {
      const text = bioRef.current.textContent || '';
      bioRef.current.textContent = '';
      
      let i = 0;
      const typeText = () => {
        if (i < text.length && bioRef.current) {
          bioRef.current.textContent += text.charAt(i);
          i++;
          setTimeout(typeText, 30);
        }
      };
      
      setTimeout(typeText, 500);
    }
  }, []);
  
  const skills = [
    { name: 'Unity Development', level: 85 },
    { name: 'C# Programming', level: 80 },
    { name: 'Game Design', level: 75 },
    { name: 'Adobe Illustrator', level: 70 },
  ];
  
  const achievements = [
    { name: 'Unity Essentials Certified', icon: <ShieldCheck className="w-5 h-5" /> },
    { name: 'Game Dev Lead at GDG', icon: <Trophy className="w-5 h-5" /> },
    { name: 'Multiple Published Games', icon: <Code className="w-5 h-5" /> },
    { name: 'Active Developer at Euphoria XR', icon: <Terminal className="w-5 h-5" /> },
  ];
  
  return (
    <section 
      id="about" 
      className="py-20 bg-background relative"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <div className="h-px w-12 bg-neon-purple"></div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mx-4">
            PLAYER <span className="text-neon-purple">STATS</span>
          </h2>
          <div className="h-px w-12 bg-neon-purple"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Bio section */}
          <div className="card backdrop-blur-md">
            <h3 className="text-xl font-heading font-bold text-neon-cyan mb-4">
              CHARACTER INFO
            </h3>
            
            <div className="h-px w-full bg-neon-cyan/30 mb-6"></div>
            
            <p ref={bioRef} className="text-text-secondary mb-6">
              Hey, I'm Muhammad Fishan Qaisar, a passionate game developer currently pursuing my Bachelor's in Computer Science at Lahore Garrison University. With 1-2 years of hands-on experience in game development, I've worked on various exciting projects from hyper-casual games to immersive simulations.
            </p>
            
            <p className="text-text-secondary">
              My mission is to establish Pakistan's first AAA game development studio, pushing the boundaries of what's possible in our local gaming industry while creating unforgettable gaming experiences.
            </p>
          </div>
          
          {/* Stats section */}
          <div className="card backdrop-blur-md">
            <h3 className="text-xl font-heading font-bold text-neon-green mb-4">
              CORE SKILLS
            </h3>
            
            <div className="h-px w-full bg-neon-green/30 mb-6"></div>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-heading">{skill.name}</span>
                    <span className="text-neon-green font-mono">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-neon-green animate-fade-in-right"
                      style={{ 
                        width: `${skill.level}%`, 
                        animationDelay: `${index * 200}ms`,
                        animationDuration: '1s'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Achievements */}
        <div className="mt-12 max-w-6xl mx-auto">
          <h3 className="text-xl font-heading font-bold text-neon-cyan mb-6 text-center">
            ACHIEVEMENTS UNLOCKED
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="card flex items-center p-4 backdrop-blur-md animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-10 h-10 bg-neon-purple/20 rounded-full flex items-center justify-center mr-3 text-neon-purple">
                  {achievement.icon}
                </div>
                <span className="text-sm md:text-base text-white font-heading">
                  {achievement.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};