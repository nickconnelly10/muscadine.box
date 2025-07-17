/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'roman-gold': '#D4AF37',
        'roman-red': '#8B0000',
        'roman-bronze': '#CD7F32',
        'roman-marble': '#F5F5DC',
        'roman-stone': '#696969',
        gold: {
          50: '#fdf6e3',
          100: '#f9eec2',
          200: '#f5e49a',
          300: '#f1d96e',
          400: '#ecc94b',
          500: '#d4af37',
          600: '#bfa12f',
          700: '#a68c28',
          800: '#8c7621',
          900: '#6e5a17',
        },
      },
      fontFamily: {
        'serif': ['Georgia', 'serif'],
        'display': ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} 