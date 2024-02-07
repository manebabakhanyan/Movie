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
      gray:'#475569'
    }
  },
  plugins: [],
}