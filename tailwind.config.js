/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(95deg, #9C83FF 57.09%, #FF9051 87.74%)",
      },
    },
  },
  plugins: [],
};
