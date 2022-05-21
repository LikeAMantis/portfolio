const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        skin: {
          fill: colors.neutral[800],
          menu: colors.neutral[900],
        },
      },
      textColor: {
        skin: {
          base: colors.neutral[200],
          muted: colors.neutral[900],
        },
      },
    },
  },
  plugins: [],
}
