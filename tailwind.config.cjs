/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color: {
          text: "#242D52",
          textHover: "#242D52",
          accent: "#F3603C",
          accentHover: "#F98F75",
        }
      },
      fontFamily: {
        primary: ["var(--font-primary)"],
      },
      fontSize: {
        h1Clamp: "clamp(2.5rem, 2.25rem + 1.05vw, 3.5rem)"
      }
    },
  },
  plugins: [],
}

