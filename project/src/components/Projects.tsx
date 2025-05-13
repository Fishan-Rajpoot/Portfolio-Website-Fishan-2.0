import React, { useState } from 'react';
import { ExternalLink, Code, Github, PlayCircle } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  role: string;
  features: string[];
  videoUrl: string;
  category: string[];
};

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'Recycle Center Simulator',
      description: 'A 3D resource management game where you manage a recycling facility. Take on recycling jobs, collect trash from abandoned locations, and transform waste into valuable materials using specialized machines.',
      image: '/images/recycle-center-simulator.jpg',
      technologies: ['Unity 3D', 'C#', 'Resource Management', '3D Physics'],
      role: 'Unity Developer',
      features: [
        'Complex resource management systems',
        'Multiple processing machines and upgrades',
        'Environmental sustainability focus',
        'Economic progression system'
      ],
      videoUrl: 'https://youtu.be/6R3mrT9OLK4?si=6wrH0nGkCzAeunZH',
      category: ['3D', 'Simulation'],
    },
    {
      id: 2,
      title: 'Tangle Master',
      description: 'A hypercasual 3D puzzle game focused on untangling ropes and solving increasingly complex knot-based challenges. Features intuitive controls and physics-based interactions.',
      image: '/images/tangle-master.jpg',
      technologies: ['Unity 3D', 'C#', 'Physics System', 'Level Design'],
      role: 'Unity Developer',
      features: [
        'Physics-based rope mechanics',
        'Progressive difficulty system',
        'Intuitive touch controls',
        'Multiple puzzle types'
      ],
      videoUrl: 'https://youtu.be/sT9DLH6KCh4?si=zBajBXVq91UzmeiW',
      category: ['3D', 'Puzzle'],
    },
    {
      id: 3,
      title: 'Home Hammer 2D',
      description: 'An ASMR-focused home repair simulation game where players restore a broken home through various repair tasks. Features satisfying sound effects and smooth animations.',
      image: '/images/home-hammer-2d.jpg',
      technologies: ['Unity 2D', 'C#', 'ASMR Design', 'Animation'],
      role: 'Unity Developer',
      features: [
        'ASMR-inspired gameplay mechanics',
        'Progressive home restoration',
        'Multiple repair tools and tasks',
        'Satisfying sound design'
      ],
      videoUrl: 'https://youtu.be/nsbjPrm5k6c?si=SlfW_-iKxnfjH8Yg',
      category: ['2D', 'Simulation'],
    },
  ];
  
  const filters = ['All', '2D', '3D', 'Simulation', 'Puzzle'];
  
  const filteredProjects = projects.filter(project => 
    activeFilter === 'All' || project.category.includes(activeFilter)
  );
  
  return (
    <section 
      id="projects" 
      className="py-20 bg-background relative"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <div className="h-px w-12 bg-neon-cyan"></div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mx-4">
            UNLOCKED <span className="text-neon-cyan">ACHIEVEMENTS</span>
          </h2>
          <div className="h-px w-12 bg-neon-cyan"></div>
        </div>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-heading transition-colors duration-300 ${
                activeFilter === filter
                  ? 'bg-neon-cyan text-background'
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="card overflow-hidden group relative"
            >
              {/* Project image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                
                {/* Project video link */}
                <a
                  href={project.videoUrl}
                  className="absolute top-2 right-2 w-8 h-8 bg-background/80 rounded-full flex items-center justify-center text-neon-green hover:bg-neon-green hover:text-background transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Watch ${project.title} video`}
                >
                  <PlayCircle className="w-4 h-4" />
                </a>
              </div>
              
              {/* Project info */}
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-white mb-2">{project.title}</h3>
                <p className="text-text-secondary mb-4">{project.description}</p>
                
                {/* Role */}
                <div className="mb-4">
                  <span className="text-xs text-neon-purple font-heading">ROLE</span>
                  <p className="text-white">{project.role}</p>
                </div>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-background rounded-md text-xs text-neon-cyan border border-neon-cyan/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Key features */}
                <div className="mt-4">
                  <span className="text-xs text-neon-green font-heading">KEY FEATURES</span>
                  <ul className="list-disc list-inside text-text-secondary text-sm mt-2">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 border border-transparent group-hover:border-neon-cyan/50 pointer-events-none transition-all duration-300 rounded-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};