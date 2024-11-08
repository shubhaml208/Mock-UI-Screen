/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      screens:{
        "sm" : "300px",
        "md" : "768px",
        "lg" : "1024px",
      }
    },
  },
  //eslint-disable-next-line @typescript-eslint/no-require-imports
}
