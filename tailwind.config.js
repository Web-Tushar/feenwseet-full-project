/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      gap: {
       '48px': '48px',
       '32px':'32px',
      },
      height: {
        '28px': '28px',
      },

      width: {
        '582px': '582px',
        '122px': '122px'
      },
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
        '#1C1E53':'#1C1E53',
        '#BBBBCB':'#BBBBCB',
      },
      maxWidth: {
        'container': '1280px',
      },
    },
  },
  plugins: [],
}

