/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maple: {
          red:    "#c0392b",
          orange: "#e67e22",
          yellow: "#f1c40f",
          dark:   "#1a1a2e",
          darker: "#0f0f1a",
          card:   "#16213e",
          border: "#1e3a5f",
          accent: "#e94560",
        },
      },
      fontFamily: {
        cinzel:  ["Cinzel", "serif"],
        fredoka: ["Fredoka", "sans-serif"],
        maple:   ["Nunito", "Georgia", "serif"],
      },
      animation: {
        "pulse-slow": "pulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
