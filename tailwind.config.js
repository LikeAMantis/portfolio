const colors = require('tailwindcss/colors')

const gray = colors.neutral

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: { accent: colors.yellow[300] },
            backgroundColor: {
                skin: {
                    fill: gray[800],
                    menu: gray[900],
                },
            },
            textColor: {
                skin: {
                    base: gray[200],
                    muted: gray[900],
                },
            },
        },
    },
    plugins: [],
}
