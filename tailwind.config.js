/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundColor: {
                heading: "#42446E",
                gray: "#42446E",
                primary: "#191919",
                card:"#363636"
            },
            colors: {
                primary: "#D9D9D9",
                secondary:"#A7A7A7"
            },
        },
    },
    plugins: [],
};
