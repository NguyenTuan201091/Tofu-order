import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        vermilion: {
          50: '#fef2f2',
          100: '#fee2e2',
          500: '#C41E3A',
          600: '#8B0000',
          700: '#7a0000',
        },
        gold: {
          300: '#FFD700',
          400: '#D4AF37',
          500: '#B8960C',
        },
        navy: {
          700: '#1B3A6B',
          800: '#0D2137',
          900: '#060D1A',
        },
        wood: {
          100: '#F5DEB3',
          200: '#DEB887',
          300: '#CD853F',
          400: '#8B6914',
        },
      },
      fontFamily: {
        display: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
