/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          brown: "#3D2B1F",
          orange: "#F27405",
          accent: "#F2A007",
          cream: "#FFF9F2",
        }
      },
    },
  },
  plugins: [],
}