import React from 'react';
import { 
  Gamepad2, 
  Code2, 
  Wrench, 
  PenTool,
  Database
} from 'lucide-react';

type Skill = {
  name: string;
  icon: React.ReactNode;
  description: string;
  category: 'game_development' | 'programming' | 'tools';
  yearStarted: number;
};

export const Skills: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const skills: Skill[] = [
    {
      name: 'Unity 3D',
      icon: <Gamepad2 className="w-6 h-6" />,
      description: 'Expert in Unity Engine with experience in HDRP, URP, and custom render pipelines.',
      category: 'game_development',
      yearStarted: 2022,
    },
    {
      name: 'C#',
      icon: <Code2 className="w-6 h-6" />,
      description: 'Advanced C# programming with expertise in performance optimization and design patterns.',
      category: 'programming',
      yearStarted: 2022,
    },
    {
      name: 'Game Design',
      icon: <PenTool className="w-6 h-6" />,
      description: 'Designing engaging gameplay mechanics, level progression, and player feedback systems.',
      category: 'game_development',
      yearStarted: 2023,
    },
    {
      name: 'Version Control',
      icon: <Database className="w-6 h-6" />,
      description: 'Git and Perforce experience for team collaboration and version management.',
      category: 'tools',
      yearStarted: 2022,
    },
    {
      name: 'Performance Optimization',
      icon: <Code2 className="w-6 h-6" />,
      description: 'Profiling and optimizing game performance across multiple platforms.',
      category: 'programming',
      yearStarted: 2022,
    },
    {
      name: 'Unity Editor Tools',
      icon: <Wrench className="w-6 h-6" />,
      description: 'Creating custom editor tools to improve team workflow and productivity.',
      category: 'tools',
      yearStarted: 2022,
    },
  ];
  
  const getExperienceYears = (yearStarted: number) => {
    const years = currentYear - yearStarted;
    if (years >= 1) {
      return `${years} years`;
    } else {
      const months = Math.round(years * 12);
      return `${months} months`;
    }
  };
  
  return (
    <section 
      id="skills" 
      className="py-20 bg-background relative"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <div className="h-px w-12 bg-neon-purple"></div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mx-4">
            INVENTORY <span className="text-neon-purple">ITEMS</span>
          </h2>
          <div className="h-px w-12 bg-neon-purple"></div>
        </div>
        
        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="card backdrop-blur-md hover:bg-card-bg hover:border-neon-purple/50 transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Skill header with icon */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-neon-purple/20 flex items-center justify-center mr-4 text-neon-purple group-hover:animate-pulse">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="text-white font-heading font-bold">{skill.name}</h3>
                  <span className="text-xs text-neon-purple">
                    {getExperienceYears(skill.yearStarted)} experience
                  </span>
                </div>
              </div>
              
              {/* Skill description */}
              <p className="text-text-secondary text-sm">
                {skill.description}
              </p>
              
              {/* Category tag */}
              <div className="mt-4">
                <span className="text-xs px-2 py-1 rounded-full bg-background text-neon-purple border border-neon-purple/30">
                  {skill.category.replace('_', ' ')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};