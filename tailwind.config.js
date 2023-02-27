/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#1565C0",
        'secondary': "#0A4A93"
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // require('flowbite-typography'),
  ],
});