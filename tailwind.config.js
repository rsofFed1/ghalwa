/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
        tajawal: ['var(--font-tajawal)'],
      },
      typography: {
        DEFAULT: {
          css: {
            'h1, h2, h3': {
              fontFamily: 'var(--font-tajawal)',
              textAlign: 'right',
            },
            p: {
              fontFamily: 'var(--font-tajawal)',
              textAlign: 'right',
            },
            li: {
              fontFamily: 'var(--font-tajawal)',
              textAlign: 'right',
            },
            '.myth-container': {
              border: '1px solid #e5e7eb',
              borderRadius: '0.5rem',
              padding: '1rem',
              marginBottom: '1.5rem',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}