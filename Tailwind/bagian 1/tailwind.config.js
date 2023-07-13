/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html"],
    theme: {
        extend: {},
    },
    plugins: [],
};

module.exports = {
    theme: {
        extend: {
            spacing: {
                13: "3.25rem",
                15: "3.75rem",
                128: "32rem",
                144: "36rem",
            },
            fontFamily: {
                inter: ["Inter"],
            },
            colors: {
                ternary: "#c0ffee",
            },
        },
    },
};
