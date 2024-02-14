/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      darkGray: '#374151',
      white: '#fff',
      blue: '#0ea5e9',
      gray: '#475569',
      viaGray: '#383838',
      fromGray: '#383838',
      toGray: '#8A8A8A',
      yellow: '#FAFF00',
      red: '#ff0000',
      darkGrey: '#383838',
      black: '#000'
    },
    screens: {
      'md1200': '1200px',
      'md1100': '1100px',
      'md1000': '1000px',
      'md940': '940px',
      'md880': '880px',
      'md870': '870px',
      'md800': '800px',
      'md700': '700px',
      'md600': '600px',
      'md550': '550px',
    }
  },
  plugins: [],

}