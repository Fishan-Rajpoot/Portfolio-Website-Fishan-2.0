import React, { useState, useEffect } from 'react';
import { ThreeCanvas } from './components/ThreeCanvas';
import { Particles } from './components/Particles';
import { MouseTrail } from './components/MouseTrail';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { LoadingScreen } from './components/LoadingScreen';
import { SoundToggle } from './components/SoundToggle';
import './styles/animations.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);

  const toggleSound = () => {
    setSoundEnabled(prev => !prev);
    // Would trigger sound system here
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-background text-white font-body relative overflow-hidden">
      <MouseTrail />
      <Particles />
      <SoundToggle enabled={soundEnabled} toggle={toggleSound} />
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;