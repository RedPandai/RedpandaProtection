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
      animation: {
        loader: "loader 2s linear infinite",
        slidein: "slidein 0.7s ease-out",
      },
      keyframes: {
        loader: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
        slidein: {
          "0%": {
            transform: "translateY(0%)",
          },
          "100%": {
            transform: "translateY(100%)",
          },
        },
      },
    },
  },
  plugins: [],
};
