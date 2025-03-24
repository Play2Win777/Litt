/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'neon-pulse': 'neonPulse 2s ease-in-out infinite',
        'safety-glow': 'safetyGlow 2s ease-in-out infinite',
        'durability-glow': 'durabilityGlow 2s ease-in-out infinite',
        'sport-glow': 'sportGlow 2s ease-in-out infinite',
        'streak-glow': 'streakGlow 2s ease-in-out infinite',
        'tech-glow': 'techGlow 2s ease-in-out infinite',
        'shimmer-glow': 'shimmerGlow 2s ease-in-out infinite',
        'rugged-glow': 'ruggedGlow 2s ease-in-out infinite',
        'sleek-glow': 'sleekGlow 2s ease-in-out infinite',
        'cta-glow': 'ctaGlow 2s ease-in-out infinite',
        'new-item-glow': 'newItemGlow 2s ease-in-out infinite',
      },
      keyframes: {
        neonPulse: {
          '0%, 100%': { opacity: '0.5', filter: 'brightness(1) blur(8px)' },
          '50%': { opacity: '1', filter: 'brightness(1.5) blur(12px)' },
        },
        safetyGlow: {
          '0%, 100%': {
            boxShadow:
              '0 0 7px rgba(255, 191, 0, 0.6), 0 0 11px rgba(255, 140, 0, 0.5), 0 0 15px rgba(255, 165, 0, 0.4)',
          },
          '50%': {
            boxShadow:
              '0 0 14px rgba(255, 191, 0, 0.9), 0 0 18px rgba(255, 140, 0, 0.8), 0 0 22px rgba(255, 165, 0, 0.7)',
          },
        },
        durabilityGlow: {
          '0%, 100%': {
            boxShadow:
              '0 0 7px rgba(255, 255, 255, 0.6), 0 0 11px rgba(255, 255, 255, 0.5), 0 0 15px rgba(255, 255, 255, 0.4)',
          },
          '50%': {
            boxShadow:
              '0 0 14px rgba(255, 255, 255, 0.9), 0 0 18px rgba(255, 255, 255, 0.8), 0 0 22px rgba(255, 255, 255, 0.7)',
          },
        },
        sportGlow: {
          '0%, 100%': {
            boxShadow:
              '0 0 7px rgba(0, 255, 255, 0.6), 0 0 11px rgba(0, 255, 0, 0.5), 0 0 15px rgba(0, 191, 255, 0.4)',
          },
          '50%': {
            boxShadow:
              '0 0 14px rgba(0, 255, 255, 0.9), 0 0 18px rgba(0, 255, 0, 0.8), 0 0 22px rgba(0, 191, 255, 0.7)',
          },
        },
        streakGlow: {
          '0%, 100%': {
            boxShadow:
              '0 0 7px rgba(0, 255, 255, 0.6), 0 0 11px rgba(0, 255, 0, 0.5), 0 0 15px rgba(0, 191, 255, 0.4)',
          },
          '50%': {
            boxShadow:
              '0 0 14px rgba(0, 255, 255, 0.9), 0 0 18px rgba(0, 255, 0, 0.8), 0 0 22px rgba(0, 191, 255, 0.7)',
          },
        },
        techGlow: {
          '0%, 100%': {
            boxShadow:
              '0 0 7px rgba(0, 255, 255, 0.6), 0 0 11px rgba(0, 0, 255, 0.5), 0 0 15px rgba(0, 191, 255, 0.4)',
          },
          '50%': {
            boxShadow:
              '0 0 14px rgba(0, 255, 255, 0.9), 0 0 18px rgba(0, 0, 255, 0.8), 0 0 22px rgba(0, 191, 255, 0.7)',
          },
        },
        shimmerGlow: {
          '0%, 100%': {
            boxShadow:
              '0 0 7px rgba(0, 255, 255, 0.6), 0 0 11px rgba(0, 0, 255, 0.5), 0 0 15px rgba(0, 191, 255, 0.4)',
          },
          '50%': {
            boxShadow:
              '0 0 14px rgba(0, 255, 255, 0.9), 0 0 18px rgba(0, 0, 255, 0.8), 0 0 22px rgba(0, 191, 255, 0.7)',
          },
        },
        ruggedGlow: {
          '0%, 100%': {
            boxShadow:
              '0 0 7px rgba(255, 140, 0, 0.6), 0 0 11px rgba(255, 165, 0, 0.5), 0 0 15px rgba(255, 191, 0, 0.4)',
          },
          '50%': {
            boxShadow:
              '0 0 14px rgba(255, 140, 0, 0.9), 0 0 18px rgba(255, 165, 0, 0.8), 0 0 22px rgba(255, 191, 0, 0.7)',
          },
        },
        sleekGlow: {
          '0%, 100%': {
            boxShadow:
              '0 0 7px rgba(173, 216, 230, 0.6), 0 0 11px rgba(135, 206, 250, 0.5), 0 0 15px rgba(0, 191, 255, 0.4)',
          },
          '50%': {
            boxShadow:
              '0 0 14px rgba(173, 216, 230, 0.9), 0 0 18px rgba(135, 206, 250, 0.8), 0 0 22px rgba(0, 191, 255, 0.7)',
          },
        },
        ctaGlow: {
          '0%, 100%': {
            boxShadow:
              '0 0 7px rgba(255, 140, 0, 0.6), 0 0 11px rgba(255, 69, 0, 0.5), 0 0 15px rgba(255, 165, 0, 0.4)',
          },
          '50%': {
            boxShadow:
              '0 0 14px rgba(255, 140, 0, 0.9), 0 0 18px rgba(255, 69, 0, 0.8), 0 0 22px rgba(255, 165, 0, 0.7)',
          },
        },
        newItemGlow: {
          '0%, 100%': {
            boxShadow:
              '0 0 7px rgba(255, 0, 255, 0.6), 0 0 11px rgba(0, 255, 255, 0.5), 0 0 15px rgba(255, 255, 0, 0.4)',
          },
          '50%': {
            boxShadow:
              '0 0 14px rgba(255, 0, 255, 0.9), 0 0 18px rgba(0, 255, 255, 0.8), 0 0 22px rgba(255, 255, 0, 0.7)',
          },
        },
      },
    },
  },
  plugins: [],
};