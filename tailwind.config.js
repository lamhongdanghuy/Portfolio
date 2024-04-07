/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Frensya: ["Frensya", "cursive"],
      },
    },
    keyframes: {
      fadein: {
        "0%": { opacity: "0" },
        "100%": { opacity: "1" },
      },
      slidein: {
        "0%": { transform: "translateX(-100px)", opacity: "0" },
        "100%": { transform: "translateX(0)", opacity: "1" },
      },
      popin: {
        "0%": { transform: "scale(0.95)", opacity: "0" },
        "100%": { transform: "scale(1)", opacity: "1" },
      },
    },
    // Link animations to Tailwind classes
    animation: {
      fadein: "fadein 1s ease-out",
      slidein: "slidein 1s ease-out",
      popin: "popin 1s ease-out",
    },
  },
  plugins: [],
};
