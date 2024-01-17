/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors:{
        'color-1':'#6622DF',
        'color-2':'#0064FF',
        'color-3':'#0086ff',
        'color-4':'#009dff',
        'color-5':'#00aed3',
        'color-6':'#00bc98'
      },
    },
  },
  plugins: [],
}

