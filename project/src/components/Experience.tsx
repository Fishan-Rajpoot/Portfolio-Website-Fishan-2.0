import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

type Experience = {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  skills: string[];
  achievements: string[];
  logo: string;
};

export const Experience: React.FC = () => {
  const experiences: Experience[] = [
    {
      id: 1,
      title: 'Senior Unity Developer',
      company: 'GameCraft Studios',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Lead development of multiple AAA-quality games using Unity and C#.',
      skills: ['Unity 3D', 'C#', 'HDRP', 'Performance Optimization'],
      achievements: [
        'Optimized rendering pipeline, improving performance by 40%',
        'Mentored junior developers and established coding standards',
        'Implemented procedural generation system for world creation'
      ],
      logo: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg',
    },
    {
      id: 2,
      title: 'AR/VR Developer',
      company: 'Immersive Solutions',
      location: 'Seattle, WA',
      period: '2019 - 2022',
      description: 'Developed AR and VR applications for training and simulation.',
      skills: ['Unity 3D', 'C#', 'ARKit', 'ARCore', 'OpenXR'],
      achievements: [
        'Created medical training simulation used by 5000+ students',
        'Reduced development time by 30% through custom tools',
        'Won industry award for best educational VR experience'
      ],
      logo: 'https://images.pexels.com/photos/5952651/pexels-photo-5952651.jpeg',
    },
    {
      id: 3,
      title: 'Unity Game Developer',
      company: 'Pixel Pioneers',
      location: 'Austin, TX',
      period: '2017 - 2019',
      description: 'Designed and implemented core gameplay systems for mobile titles.',
      skills: ['Unity 2D/3D', 'C#', 'Mobile Optimization', 'UI Systems'],
      achievements: [
        'Released 3 mobile games with 1M+ collective downloads',
        'Implemented cross-platform save system using cloud storage',
        'Created custom animation system for 2D sprite characters'
      ],
      logo: 'https://images.pexels.com/photos/7765162/pexels-photo-7765162.jpeg',
    },
  ];
  
  return (
    <section 
      id="experience" 
      className="py-20 bg-background relative"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <div className="h-px w-12 bg-neon-green"></div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mx-4">
            QUEST <span className="text-neon-green">LOG</span>
          </h2>
          <div className="h-px w-12 bg-neon-green"></div>
        </div>
        
        {/* Experience timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-neon-green/30"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={exp.id}
              className={`mb-16 relative ${
                index % 2 === 0 ? 'md:text-right' : 'md:text-left'
              }`}
            >
              {/* Experience card */}
              <div className={`
                md:w-5/12 card backdrop-blur-md animate-fade-in-up
                ${index % 2 === 0 ? 'md:ml-auto md:mr-0' : 'md:mr-auto md:ml-0'}
              `}>
                {/* Company logo */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full overflow-hidden border-2 border-neon-green animate-pulse-glow">
                  <img 
                    src={exp.logo} 
                    alt={`${exp.company} logo`} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                
                {/* Job title and company */}
                <h3 className="text-xl font-heading font-bold text-white mb-1">
                  {exp.title}
                </h3>
                <div className="flex items-center mb-4">
                  <Briefcase className="w-4 h-4 text-neon-green mr-1" />
                  <span className="text-neon-green">{exp.company}</span>
                </div>
                
                {/* Location and period */}
                <div className="flex flex-wrap gap-4 mb-4 text-text-secondary text-sm">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-text-secondary mb-4">{exp.description}</p>
                
                {/* Skills gained */}
                <div className="mb-4">
                  <span className="text-xs text-neon-green font-heading">SKILLS GAINED</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-background rounded-md text-xs text-neon-green border border-neon-green/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Achievements */}
                <div>
                  <span className="text-xs text-white font-heading">ACHIEVEMENTS</span>
                  <ul className="list-disc list-inside text-text-secondary text-sm mt-2">
                    {exp.achievements.map((achievement, achieveIndex) => (
                      <li key={achieveIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Timeline bullet */}
              <div className="hidden md:block absolute left-1/2 top-10 transform -translate-x-1/2 w-5 h-5 bg-neon-green rounded-full border-4 border-background animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};