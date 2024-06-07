import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      // that is actual animation
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      colors: {
        primary: '#141718',
        background: '#FFFFFF',
        secondary: '#F3F5F7',
        card: '#F9FAFB',
        color: '#141718',
        button: '#141718',
        hover: '#E5E7EB',
        'button-hover': '#353935',
        light: '#6C7275',
        error: '#FF5630',
        success: '#38CB89',
        border: ' #E8ECEF',
        'primary-dark': '#0D0E10',
        'background-dark': '#1C1F24',
        'secondary-dark': '#2B2E33',
        'card-dark': '#1F2937',
        'color-dark': '#FFFFFF',
        'hover-dark': '#4B5563',
        'button-dark': '#141718',
        'button-hover-dark': '#EAEAEA',
        'light-dark': '#A8ACB1',
        'error-dark': '#FF2800',
        'success-dark': '#00B38F',
        'border-dark': '#374151',
      },
      padding: {
        navbar: '72px',
      },
      fontSize: {
        '8px': '8px',
        '10px': '10px',
      },
      lineHeight: {
        '8px': '10px',
        '10px': '12px',
      },
      // that is animation class
      animation: {
        fadeIn: 'fadeIn 0.2s ease-in-out',
        fadeInDown: 'fadeInDown 0.2s ease-in',
      },
    },
  },
  plugins: [],
};
export default config;
