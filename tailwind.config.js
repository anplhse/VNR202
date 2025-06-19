/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "victory-red": "#D22730",
        "history-blue": "#24426A",
        "monument-gold": "#E5B80B",
        "hanoi-green": "#3A5311",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/hero-bg.jpg')",
      },
    },
  },
  plugins: [],
};
