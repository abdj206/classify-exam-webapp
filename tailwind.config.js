/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'classify-blue': {
          DEFAULT: '#1e3a5f',
          dark: '#0f1f35',
          light: '#2d4a6f',
        },
        'classify-gold': {
          DEFAULT: '#facc6b',
          light: '#fde68a',
          dark: '#eab308',
          darker: '#b45309',
        },
        'classify-teal': {
          DEFAULT: '#14b8a6',
          light: '#5eead4',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

