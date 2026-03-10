/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#BFA37E",
        "background-light": "#f9f9f7",
        "background-dark": "#0a0a0a",
        "deep-gray": "#1a1a1a",
        "off-black": "#050505",
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"],
        "mono": ["Roboto Mono", "monospace"]
      },
      borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
    },
  },
  plugins: [],
};
