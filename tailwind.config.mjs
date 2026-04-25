/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Paleta Bento Moderna
        bento: {
          black:   '#000000',
          white:   '#FFFFFF',
          blue:    '#0066FF',
          lime:    '#A3FF12',
          orange:  '#FF6B35',
          pink:    '#FF2D87',
          purple:  '#7C3AED',
          cyan:    '#00D4FF',
          yellow:  '#FFD60A',
        },
        // Grises neutros
        neutral: {
          50:  '#FAFAFA',
          100: '#F4F4F5',
          200: '#E4E4E7',
          300: '#D4D4D8',
          400: '#A1A1AA',
          500: '#71717A',
          600: '#52525B',
          700: '#3F3F46',
          800: '#27272A',
          900: '#18181B',
          950: '#09090B',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'SF Pro Display',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        display: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'SF Pro Display',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'SF Mono',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      fontSize: {
        'mega':  ['clamp(3rem, 12vw, 10rem)', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
        'giant': ['clamp(2.5rem, 8vw, 6rem)',  { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'huge':  ['clamp(2rem, 5vw, 4rem)',    { lineHeight: '1', letterSpacing: '-0.02em' }],
      },
      borderRadius: {
        'bento-sm': '16px',
        'bento':    '24px',
        'bento-lg': '32px',
        'bento-xl': '40px',
      },
      boxShadow: {
        'bento':       '0 4px 24px rgba(0, 0, 0, 0.06)',
        'bento-hover': '0 20px 48px rgba(0, 0, 0, 0.12)',
      },
      animation: {
        'fade-in':    'fadeIn 0.6s ease-out',
        'slide-up':   'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'marquee':    'marquee 30s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
