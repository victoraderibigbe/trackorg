const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        light: {
          primary: "#ffffff",
          secondary: "#f5f5f5",
          text: "#333333",
          accent: "#2196f3",
          accenthover: "#158ff1",
          hover: "#e0e0e0",
          disabled: "#cccccc",
        },
        dark: {
          primary: "#1e1e1e",
          secondary: "#2c2c2c",
          text: "#ffffff",
          accent: "#4caf50",
          accenthover: "#3bb240",
          hover: "#333333",
          disabled: "#666666",
        },
        alert: "#ff5722",
      },
      keyframes: {
        gradient: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
      animation: {
        gradient: "gradient 2s ease infinite",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
