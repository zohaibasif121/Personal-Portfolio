module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    theme: {
      extend: {
        animation: {
          meteor: "meteor 5s linear infinite",
        },
        keyframes: {
          meteor: {
            "0%": { transform: "rotate(215deg) translateX(0)", opacity: 1 },
            "70%": { opacity: 1 },
            "100%": {
              transform: "rotate(215deg) translateX(-500px)",
              opacity: 0,
            },
          },
        },
      },
    },
    variants: {},
    plugins: [],
  }
