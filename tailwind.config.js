/** @type {import('tailwindcss').Config} */
import keepPreset from "keep-react/preset";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [keepPreset],
  theme: {
    extend: {
      fontWeight: {
        thin: '100',
        hairline: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        'extra-bold': '800',
        black: '900',
      },
      margin: {
        '48px': '48px',
        '24px': '24px',
        '16px': '16px',
        '8px':'8px',
      },
      padding: {
        '128px': '128px',
      },
      fontSize: {
      '16px':'16px',
      '48px' :'48px',
      '18px' :'18px',
      },
      gap: {
       '48px': '48px',
       '32px':'32px',
       '40px': '40px',
       '142px' : '142px',
      },
      height: {
        '28px': '28px',
      },

      width: {
        '582px': '582px',
        '122px': '122px',
        '562px': '562px',
        '405px':'405px',
        '303px': '303px',
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
        '#282938':'#282938',
        '#2405F2':'#2405F2',
        '#F4F6FC': '#F4F6FC',
        
        
      },
      maxWidth: {
        'container': '1280px',
      },
    },
  },
  plugins: [],
}

