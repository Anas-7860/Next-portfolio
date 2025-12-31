/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: 'rgb(var(--color-base))',
        },
        text: 'rgb(var(--color-text))',
        muted: 'rgb(var(--color-muted))',
        accent: 'rgb(var(--color-accent))',
        border: 'rgb(var(--color-border))',
      },
      boxShadow: {
        subtle: '0 1px 2px rgba(0,0,0,0.06)',
      },
      transitionTimingFunction: {
        soft: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
    },
  },
  plugins: [],
};
