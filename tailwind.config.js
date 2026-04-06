/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F0F7FF',
          100: '#E0EFFF',
          200: '#A5D8FF',
          300: '#7CC4FF',
          400: '#5EAEFF',
          500: '#3B97FF',
          600: '#1A7FEB',
          700: '#0066CC',
          800: '#0052A3',
          900: '#003A73',
        },
        secondary: {
          50: '#F7F2FF',
          100: '#EEE5FF',
          200: '#D0B0FF',
          300: '#B390FF',
          400: '#9F75FF',
          500: '#8A5CFE',
          600: '#7040E2',
          700: '#5528B7',
          800: '#3F1A8C',
          900: '#2C1161',
        },
        accent: {
          50: '#F0F9F1',
          100: '#DBEEDE',
          200: '#B3E0C5',
          300: '#8CD0AB',
          400: '#6ABD91',
          500: '#4AA276',
          600: '#3A8C65',
          700: '#2B7653',
          800: '#1C6043',
          900: '#0F4930',
        },
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      fontFamily: {
        heading: ['Nunito', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
};