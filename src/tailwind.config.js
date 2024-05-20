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
          hover: "#e0e0e0",
          alert: "#ff5722",
          disabled: "#cccccc",
        },
        dark: {
          primary: "#1e1e1e",
          secondary: "#2c2c2c",
          text: "#ffffff",
          accent: "#4caf50",
          hover: "#333333",
          alert: "#ff5722",
          disabled: "#666666",
        },
      },
    },
  },
  plugins: [flowbite.plugin()],
};
