import type { Config } from 'tailwindcss';

export default {
  content: [
    './app.vue',
    './components/**/*.{vue,js,ts}',
    './composables/**/*.{js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#ecfdf8',
          100: '#d1faef',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          900: '#134e4a',
        },
        wb: {
          primary: '#09bea3',
          dark: '#1f4541',
          footer: '#1c1d1d',
          mint: '#f0f7f6',
          slate: '#767676',
          ink: '#111111',
        },
        ink: '#111827',
      },
      boxShadow: {
        soft: '0 16px 40px rgba(15, 23, 42, 0.12)',
      },
      fontFamily: {
        sans: ['Pretendard', 'Manrope', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Paperlogy', 'Pretendard', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
} satisfies Config;
