/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./admin/*.html"],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Oswald", "serif"], // Define your custom font here
        default: ["Rubik", "serif"], // Define your custom font here
      },
      colors: {
        crimson: "#DC143C", // Primary color
        electricBlue: "#1E90FF", // Secondary color
        limeGreen: "#32CD32", // Accent color
        goldenYellow: "#FFD700", // Accent color
        coral: "#FF7F50", // Accent color
        lightGray: "#F5F5F5", // Background color
        charcoal: "#333333", // Text color
        softSlate: "#A9A9A9", // Border color
        danger: "#DC3545", // Red color for dangers
      },
    },
  },
  plugins: [],
};
