/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.25rem",
      },
      boxShadow: {
        "custom-shadow": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
        "custom-b-shadow":
          "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;",
      },
    },
  },
  plugins: [],
};
