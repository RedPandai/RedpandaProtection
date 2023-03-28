/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        Hero: "url('/images/hero.jpg')",
      },
      backgroundColor: { JYColor: "#FCE7D2", redPanda: "#B13D14" },
      gridTemplateRows: {
        layout: "auto 1fr auto",
      },
    },
  },
  plugins: [],
};
