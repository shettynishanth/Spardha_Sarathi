/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This will scan all your React component files
  ],
  theme: {
    extend: {
      animation: {
        blob: 'blob 7s infinite',
      }
    },
  },
  plugins: [],
}
