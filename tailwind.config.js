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
      backgroundImage: {
        'hero': "url('./images/projrct Card.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
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
        '48px':'48px',
        '24px':'24px',
        '12px':'12px',
        '16px':'16px',
        '8px': '8px',
        '64px':'64px',
        '10px':'10px',
        '312px':'312px',
        '40px' :'40px',
        
      },
      padding: {
        '128px': '128px',
        '129px' :'129px',
        '56px': '56px',
        '312px': '312px',
        '48px' : '48px',
      },
      fontSize: {
      '12px':'12px',
      '16px':'16px',
      '18px' :'18px',
      '24px': '24px',
      '32px': '32px',
      '38px':'38px',
      '48px' :'48px',


      },
      gap: {
       '48px':'48px',
       '24px': '24px',
       '32px':'32px',
       '40px':'40px',
       '142px':'142px',
       '10px': '10px',
       '109px' :'110px',
      },
      height: {
        '28px': '28px',
        '600px':'600px',
        '284px':'284px',
        '80px':'80px',
        '691px':'691px',


      },

      width: {
        '582px': '582px',
        '122px': '122px',
        '562px': '562px',
        '405px': '405px',
        '303px': '303px',
        '843px': '843px',
        '313px': '313px',
        '396px': '396px',
        '293px': "293px",
        '630px': "630px",
        '328px': '328px',
        '327px': '327px',
        '80px' : '80px',
        '656px': '656px',

      },
      fontFamily: {
        'Poppins': ["Poppins", "sans-serif"]
      
      },
      lineHeight: {
        'line28': '28px',
        'line74': '74px',
        'line36': '36px',
        'line64': '64px',
        'line56': '56px',
        'line48': "48px",
        'line32': '32px'
        
        
      },
      transitionDuration: {
        '1000': '1000ms',
      },
      colors: {
        'white': '#FFF',
        '#1C1E53':'#1C1E53',
        '#BBBBCB':'#BBBBCB',
        'Dark_blue':'#282938',
        '#2405F2':'#2405F2',
        '#F4F6FC': '#F4F6FC',
        '#FCD980': '#FCD980',
        '__grey' :'#F4F6FC',

        
        
      },
      maxWidth: {
        'container': '1280px',
      },
    },
  },
  plugins: [],
}

