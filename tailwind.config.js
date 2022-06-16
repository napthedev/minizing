/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#12181B",
        "dark-hovered": "#1b2428",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
