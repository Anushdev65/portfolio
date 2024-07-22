/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },

    fontFamily: {
      primary: "var(--font-jetbrainsMono)",
    },

    extend: {
      colors: {
        primary: "#27272a",
        accent: {
          DEFAULT: "#f43f5e",
          hover: "#e11d48",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }) {
      addUtilities({
        ".text-outline": {
          textShadow:
            "2px 2px 0 var(--tw-shadow-color), -2px -2px 0 var(--tw-shadow-color), 2px -2px 0 var(--tw-shadow-color), -2px 2px 0 var(--tw-shadow-color)",
        },
        ".text-outline-hover": {
          textShadow:
            "2px 2px 0 var(--tw-shadow-color-hover), -2px -2px 0 var(--tw-shadow-color-hover), 2px -2px 0 var(--tw-shadow-color-hover), -2px 2px 0 var(--tw-shadow-color-hover)",
        },
      });
    },
  ],
};
