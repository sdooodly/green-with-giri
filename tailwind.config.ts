import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#1a3a2a',
          light: '#2d5a3f',
        },
        moss: {
          DEFAULT: '#4a6b4a',
          light: '#6b8f6b',
        },
        sage: '#8faa7b',
        terracotta: {
          DEFAULT: '#c4704b',
          light: '#d4896a',
          dark: '#a85a3a',
        },
        parchment: {
          DEFAULT: '#f5f0e8',
          dark: '#e8e0d4',
        },
        cream: '#faf8f4',
        ink: {
          DEFAULT: '#2a2a24',
          light: '#5a5a50',
        },
      },
      fontFamily: {
        serif: ['Lora', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
