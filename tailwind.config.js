/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs' : '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors:{
        primary : "#5796f2",
        secondary: "#ADDAFC",
        primary1: "#3d6fad",
        borderprimary:'#01192b',
        darkprimary : "#171717",
        darksecondary : "#262626",
        orangeprimary : "#FF5D00",
        orangesecondary : "#CC4A00"
      },
      height: {
        'calc-nav-footer': 'calc(100vh - 74px - 4rem)', // Customize as needed
      },
      backgroundImage : {
        "bg-main" : "url(./assets/bg-main.png)"
      }
    },
  },
  plugins: [],
}