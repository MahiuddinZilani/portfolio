/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        glow: {
          "0%, 100%": {
            textShadow:
              "0 0 5px rgba(255, 0, 0, 0.8), 0 0 10px rgba(255, 0, 0, 0.6)",
          },
          "50%": {
            textShadow:
              "0 0 15px rgba(255, 0, 0, 1), 0 0 20px rgba(255, 0, 0, 0.8)",
          },
        },
      },
      animation: {
        glow: "glow 2s infinite ease-in-out",
      },
    },
  },
  plugins: [require("daisyui")],
};
