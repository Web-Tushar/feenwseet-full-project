/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      transitionDuration: {
        '1000': '1000ms',
      },
      colors: {
        'white': '#FFF',
      },
      maxWidth: {
        'container': '1280px',
      },
    },
  },
  plugins: [],
}

