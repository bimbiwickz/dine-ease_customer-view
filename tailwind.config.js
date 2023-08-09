export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",

  ],
  theme: {
    
    extend: {
      colors:{
        'white': '#FFFFFF',
        'green': '#007400',
        'hover-green': '#006600',
        'yellow': '#FFC700',
        'lgreen': '#ECF8F8',
        'txt-gray': '#4F5052',
        'lgray': '#898585',
        'primary':'#007400',
        'second': '#19AB4F',
        'red':'#C50000',
        'lyellow':'#FAFFC2'
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
}