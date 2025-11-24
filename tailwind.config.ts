import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "soft-white": "#FEFEFE",
        "warm-white": "#FDFCF7",
        beige: "#F5F2ED",
        sand: "#E8E3D5",
        "muted-gold": "#D4BFA0",
        charcoal: "#2C2C2C",
        "soft-gray": "#6B6B6B",
        "warm-gray": "#4A4A4A",
        primary: "#B99470", // Example primary color
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Poppins", "sans-serif"],
        calligraphy: ["Parisienne", "cursive"],
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;