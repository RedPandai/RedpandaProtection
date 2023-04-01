/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        Hero: "url('/images/hero.jpg')",
        wave: "url('/images/wave.png')",
      },
      backgroundColor: { JYColor: "#FCE7D2", redPanda: "#B13D14" },
      gridTemplateRows: {
        layout: "auto 1fr auto",
      },
      animation: { wave: "wave 10s linear infinite" },
      keyframes: {
        wave: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-100px)",
          },
        },
      },
    },
  },
  plugins: [],
};
