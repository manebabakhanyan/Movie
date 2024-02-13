/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      darkGray:'#374151',
      white:'#fff',
      blue:'#0ea5e9',
      gray:'#475569',
      viaGray:'#383838',
      fromGray:'#383838',
      toGray:'#8A8A8A',
      yellow:'#FAFF00',
      red:'#ff0000',
      darkGrey:'#383838',
      black:'#000'
    }
  },
  plugins: [],
}