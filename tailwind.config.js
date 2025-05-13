/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0F',
        'neon-cyan': '#00F0FF',
        'neon-purple': '#9D00FF',
        'neon-green': '#00FF94',
        'text-primary': '#FFFFFF',
        'text-secondary': '#B8B8B8',
        'card-bg': 'rgba(255, 255, 255, 0.05)',
      },
      fontFamily: {
        heading: ['Chakra Petch', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glitch': 'glitch 500ms infinite',
        'typing': 'typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': {
            opacity: 1,
            boxShadow: '0 0 10px 0 rgba(0, 240, 255, 0.7)',
          },
          '50%': {
            opacity: 0.8,
            boxShadow: '0 0 20px 5px rgba(0, 240, 255, 0.9)',
          },
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        typing: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        'blink-caret': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#00F0FF' },
        },
      },
      backgroundImage: {
        'grid-pattern': 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%2300F0FF\' fill-opacity=\'0.08\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
      },
      boxShadow: {
        neon: '0 0 10px #00F0FF, 0 0 20px #00F0FF, 0 0 30px #00F0FF',
        'neon-purple': '0 0 10px #9D00FF, 0 0 20px #9D00FF, 0 0 30px #9D00FF',
        'neon-green': '0 0 10px #00FF94, 0 0 20px #00FF94, 0 0 30px #00FF94',
      },
    },
  },
  plugins: [],
};