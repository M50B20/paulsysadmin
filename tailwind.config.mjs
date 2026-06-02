/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'bg-base':    '#05050d',
        'bg-surface': '#0a0a16',
        'bg-elevated':'#0f0f1e',
        'bg-card':    '#141428',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'Consolas', 'monospace'],
      },
      animation: {
        'fade-up':   'fadeUp 0.7s ease-out forwards',
        'fade-in':   'fadeIn 0.5s ease-out forwards',
        'glow-pulse':'glowPulse 3s ease-in-out infinite',
        'blink':     'blink 1s step-end infinite',
        'float':     'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        glowPulse: {
          '0%,100%': { boxShadow: '0 0 20px rgba(124,58,237,0.2)' },
          '50%':     { boxShadow: '0 0 40px rgba(124,58,237,0.5)' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%':     { opacity: '0' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'glow-violet': '0 0 30px rgba(124,58,237,0.35)',
        'glow-cyan':   '0 0 30px rgba(34,211,238,0.35)',
        'card':        '0 0 0 1px rgba(124,58,237,0.12)',
        'card-hover':  '0 0 0 1px rgba(124,58,237,0.45), 0 8px 40px rgba(124,58,237,0.12)',
      },
    },
  },
  plugins: [],
};
