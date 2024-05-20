/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
      },
      backgroundImage: {
        'dark-radial': 'radial-gradient(71.04% 147.83% at 36.46% 0%, #9BEA9B 0%, #F6B5AC 50%, #7DC4C1 100%)',
        'custom-radial': 'radial-gradient(71.04% 147.83% at 36.46% 0%, #1E263F 0%, #2A2B3F 31.05%, #66444D 70.3%, #66444D 100%)',
        radial: "radial-gradient(63.89% 63.89% at 50% 50%, #66444D 0%, #1E263F 100%)"
      },
    },
    fontFamily: {
      'forum': ["Forum"],
      "julia": ["Julius Sans One"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },

  },
  plugins: [],
})

