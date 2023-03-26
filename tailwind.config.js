/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#146EB4",
      },
      fontFamily: {
        Galano: ["Galano"],
        Galano_medium: ["Galano_medium"],
        Galano_semibold: ["Galano_semibold"],
      },
    },
  },
  plugins: [],
};
