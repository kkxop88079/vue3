const colors =require('tailwindcss/colors')
const { fontFamily } =require('tailwindcss/defaultTheme')
const flagger = require('tailwind-flagger')


module.exports = {
  content: [
    "./src/**/*.{html, js, ts, vue}", 
    "./src/**/*"
  ],
  theme: {
    extend: {
      darkMode: 'class',
      dropShadow:{
        'btn':'0px 6px 1px rgba(117, 66, 52, 1) ',
      },
      backgroundImage: {
        'banner': "url('./src/assets/banner.png')",
        'bgimg': "url('./src/assets/bg.png')",
        'logoimg': "url('./src/assets/0321-1.png')",
        'imgtop': "url('./src/assets/top.png')",
        'imgcenter': "url('./src/assets/center.png')",
        'imgbottom': "url('./src/assets/bottom.png')",
      },
      colors:{
        'gray':'colors.zinc',
      },
      fontFamily:{
        'sans':['Noto Sans TC', ...fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    flagger
  ],
}