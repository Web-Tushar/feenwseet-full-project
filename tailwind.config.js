/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {

      fontFamily: {
        'Poppins': ["Poppins", "sans-serif"]
      
      },
      lineHeight: {
        'line28': '28px',
        'line74': '74px',
        
      },
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

