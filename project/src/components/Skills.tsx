import React from 'react';
import { 
  Gamepad2, 
  Code2, 
  Wrench, 
  Layers, 
  Database, 
  PenTool, 
  Cpu, 
  WifiIcon 
} from 'lucide-react';

type Skill = {
  name: string;
  level: number;
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
      level: 95,
      icon: <Gamepad2 className="w-6 h-6" />,
      description: 'Expert in Unity Engine with experience in HDRP, URP, and custom render pipelines.',
      category: 'game_development',
      yearStarted: 2015,
    },
    {
      name: 'C#',
      level: 90,
      icon: <Code2 className="w-6 h-6" />,
      description: 'Advanced C# programming with expertise in performance optimization and design patterns.',
      category: 'programming',
      yearStarted: 2014,
    },
    {
      name: 'Shader Development',
      level: 75,
      icon: <Layers className="w-6 h-6" />,
      description: 'Creating custom visual effects with shader graph and HLSL for unique game aesthetics.',
      category: 'game_development',
      yearStarted: 2016,
    },
    {
      name: 'Game Design',
      level: 85,
      icon: <PenTool className="w-6 h-6" />,
      description: 'Designing engaging gameplay mechanics, level progression, and player feedback systems.',
      category: 'game_development',
      yearStarted: 2015,
    },
    {
      name: 'Version Control',
      level: 80,
      icon: <Database className="w-6 h-6" />,
      description: 'Git and Perforce experience for team collaboration and version management.',
      category: 'tools',
      yearStarted: 2014,
    },
    {
      name: 'AR/VR Development',
      level: 70,
      icon: <WifiIcon className="w-6 h-6" />,
      description: 'Creating immersive AR/VR experiences using Unity with various SDKs and platforms.',
      category: 'game_development',
      yearStarted: 2018,
    },
    {
      name: 'Performance Optimization',
      level: 85,
      icon: <Cpu className="w-6 h-6" />,
      description: 'Profiling and optimizing game performance across multiple platforms.',
      category: 'programming',
      yearStarted: 2016,
    },
    {
      name: 'Unity Editor Tools',
      level: 80,
      icon: <Wrench className="w-6 h-6" />,
      description: 'Creating custom editor tools to improve team workflow and productivity.',
      category: 'tools',
      yearStarted: 2017,
    },
  ];
  
  const getExperienceYears = (yearStarted: number) => {
    return currentYear - yearStarted;
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
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
                    {getExperienceYears(skill.yearStarted)}+ YEARS
                  </span>
                </div>
              </div>
              
              {/* Skill level bar */}
              <div className="mb-4">
                <div className="flex justify-between text-xs text-text-secondary mb-1">
                  <span>PROFICIENCY</span>
                  <span className="text-neon-purple">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-neon-purple to-neon-cyan"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
              
              {/* Skill description (visible on hover) */}
              <p className="text-text-secondary text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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