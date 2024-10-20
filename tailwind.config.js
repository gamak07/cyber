/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        '9/16': '56.25%', // This creates a 16:9 aspect ratio
      },
    },
  },
  plugins: [],
}

