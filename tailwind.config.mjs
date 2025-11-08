/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#38bdf8', // sky-400
          DEFAULT: '#0ea5e9', // sky-500
          dark: '#0284c7', // sky-600
        },
        secondary: {
          '50': '#f8fafc',   // slate-50
          '100': '#f1f5f9',  // slate-100
          '200': '#e2e8f0',  // slate-200
          '300': '#cbd5e1',  // slate-300
          '400': '#94a3b8',  // slate-400
          '500': '#64748b',  // slate-500
          '600': '#475569',  // slate-600
          '700': '#334155',  // slate-700
          '800': '#1e293b',  // slate-800
          '900': '#0f172a',  // slate-900
          '950': '#020617',  // slate-950
        },
        accent: {
          light: '#fcd34d', // amber-300
          DEFAULT: '#f59e0b', // amber-500
          dark: '#d97706', // amber-600
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-in-up': 'slideInUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        slideInUp: {
          'from': { transform: 'translateY(20px)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}