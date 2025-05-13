import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface SoundToggleProps {
  enabled: boolean;
  toggle: () => void;
}

export const SoundToggle: React.FC<SoundToggleProps> = ({ enabled, toggle }) => {
  return (
    <button
      onClick={toggle}
      className="fixed top-4 right-4 z-50 bg-background/60 backdrop-blur-md p-2 rounded-full hover:bg-background/80 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-neon-cyan"
      aria-label={enabled ? 'Disable sound effects' : 'Enable sound effects'}
    >
      {enabled ? (
        <Volume2 className="w-5 h-5 text-neon-cyan" />
      ) : (
        <VolumeX className="w-5 h-5 text-text-secondary" />
      )}
    </button>
  );
};