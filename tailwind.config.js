/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        none: '0',
        DEFAULT: '4px',
        lg: '12px',
        custom: '10px',
      },
    },
  },
  plugins: [],
}
