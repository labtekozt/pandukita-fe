/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary:'#00A388',
      accent:'#1667C2',
      white:{
        DEFAULT:'#FFFFFF',
        100:"#FAFAFA"
      },
      black:{
        DEFAULT:"#1D1D1D",
        100:"#4F5E71"
      },
      gray:{
        DEFAULT:"#697D95"
      }
    },
    fontSize:{
      xs:"10px",
      sm:"12px",
      md:"14px",
      "xl":"16px",
      "2xl":"18px"
    }
  },
  plugins: [],
}

