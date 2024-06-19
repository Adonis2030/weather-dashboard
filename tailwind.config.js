/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "black-semi-transparent": "#000000cc",
      },
      padding: {
        default: "1rem",
        sm: "2rem",
        md: "4rem",
        lg: "6rem",
      },
    },
  },
  plugins: [],
};
