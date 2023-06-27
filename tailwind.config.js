/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "templates/**/*.php",
        "config/**/*.php",
        './*.php',
        "./src/**/*.{html,js,jsx,vue,ts,tsx}"
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
            },
            screens: {
                sm: "576px",
                md: "768px",
                lg: "1024px",
                xl: "1280px",
                xxl: "1400px",
            },
        },
        screens: {
            'xs': '0px',
            'sm': '576px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1350px',
            'xxl': '1400px',
            'lgr': {'max': '1023px'},
            'xlr': {'max': '1349px'},
            'xxlr': {'max': '1399px'},
        },
        extend: {
            aspectRatio: {
                '4/2': '4 / 2',
                '5/2': '5 / 2',
            },
            colors: {
            },
        },
    },
    plugins: [],
}
