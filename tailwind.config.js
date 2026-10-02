/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FFFEFB',
          100: '#FDF8F0',
          200: '#FAF0E1',
          300: '#F5E6D0',
        },
        champagne: {
          100: '#F7E7C4',
          200: '#EFD49E',
          300: '#D4AF6A',
          400: '#C29A4E',
          500: '#A67C30',
          600: '#8B6914',
        },
        blush: {
          100: '#FDF2F2',
          200: '#F8D5D5',
          300: '#F0B4B4',
          400: '#E89090',
          500: '#D97070',
        },
        brown: {
          300: '#6B4E35',
          400: '#4A3525',
          500: '#3A2A1B',
          600: '#2A1F15',
          700: '#1E150E',
        },
        sage: {
          100: '#E8EDE0',
          200: '#C9D4B8',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        display: ['"Playfair Display"', 'serif'],
        sans: ['"Jost"', 'system-ui', 'sans-serif'],
        script: ['"Great Vibes"', 'cursive'],
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 1.2s ease-out forwards',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      boxShadow: {
        'soft': '0 4px 30px rgba(74, 53, 37, 0.08)',
        'medium': '0 8px 40px rgba(74, 53, 37, 0.12)',
        'gold': '0 4px 20px rgba(212, 175, 106, 0.25)',
      },
    },
  },
  plugins: [],
};
