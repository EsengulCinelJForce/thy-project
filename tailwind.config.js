/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    colors: {
      primary: "#0c4a6e",
      secondary: "#9ca3af",
      selectBoxOpacity: "#9ca3af",
      danger:"#ff2400",
      hover:"#851300",
      last:"#0000ff"
    },
    fontFamily: {
      dancing: ["Roboto", "sans-serif"],
      thin: ["Roboto Mono", "monospace"],
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "2rem",
    },
  },
};
export const plugins = [];
