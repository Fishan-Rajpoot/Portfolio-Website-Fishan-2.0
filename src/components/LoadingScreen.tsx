import React, { useState, useEffect } from 'react';
import { Cpu } from 'lucide-react';

export const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing systems...');
  
  useEffect(() => {
    const loadingTexts = [
      'Initializing systems...',
      'Loading game assets...',
      'Compiling shaders...',
      'Generating environment...',
      'Rendering player stats...',
      'Optimizing performance...',
      'Establishing connection...',
    ];
    
    // Update the progress bar
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 25);
    
    // Update the loading text
    const textInterval = setInterval(() => {
      const randomText = loadingTexts[Math.floor(Math.random() * loadingTexts.length)];
      setLoadingText(randomText);
    }, 1000);
    
    return () => {
      clearInterval(interval);
      clearInterval(textInterval);
    };
  }, []);
  
  return (
    <div className="fixed inset-0 bg-background flex flex-col items-center justify-center z-50">
      <div className="animate-pulse">
        <Cpu className="w-16 h-16 text-neon-cyan mb-6" />
      </div>
      
      <h1 className="text-4xl font-heading font-bold text-white mb-2">
        UNITY<span className="text-neon-cyan">.DEV</span>
      </h1>
      
      <p className="text-text-secondary mb-8">{loadingText}</p>
      
      <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden mb-4">
        <div 
          className="h-full bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-green"
          style={{ width: `${progress}%`, transition: 'width 0.2s ease' }}
        />
      </div>
      
      <p className="text-neon-cyan font-mono">{progress}%</p>
      
      {/* ASCII art decoration */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-20 text-neon-cyan">
        <pre className="font-mono text-xs">
          {`
   /\\
  /  \\
 / /\\ \\
/_/  \\_\\
          `}
        </pre>
      </div>
    </div>
  );
};