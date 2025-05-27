/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta Vintage/Sepia (la que ya tenías)
        'almost-black': '#1A1A1A',
        'dark-mocha': '#5C4033',
        'medium-topaz': '#B8860B',
        'straw': '#E3C590',
        'dark-hazelnut': '#8B4513',
        'pewter-gray': '#4A4A4A',
        'muted-antique': '#A4957E',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'], // Fuente base para UI no coreano
        serif: ['Lora', 'Georgia', 'serif'], // Fuente serif para elementos en español/inglés
        manuscript: ['Dancing Script', 'cursive'], // Fuente manuscrita para acentos en español/inglés
        
        // Nuevas fuentes coreanas
        'korean-title': ['Song Myung', 'serif'], // Para títulos en coreano
        'korean-handwriting': ['Nanum Pen Script', 'cursive'], // Para el contenido del diario en coreano
      },
      boxShadow: {
        'glow-topaz': '0 0 15px 2px rgba(184, 134, 11, 0.5)',
        'glow-straw': '0 0 12px 1px rgba(227, 197, 144, 0.4)',
        'inner-page': 'inset 0 0 10px rgba(0,0,0,0.2)',
      },
      backgroundImage: {
        'vintage-gradient': 'radial-gradient(ellipse at bottom, #4A4A4A 0%, #1A1A1A 70%)',
      },
      letterSpacing: {
        'wide': '0.05em',
        'wider': '0.1em',
      },
      animation: {
        'subtle-pulse': 'pulse 4s infinite ease-in-out',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}