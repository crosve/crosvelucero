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
        parchment: "#EDE0C4",
        sepia: "#2C1A0E",
        "sepia-muted": "#6B5042",
        coffee: "#8B6344",
        "coffee-light": "#C4A882",
      },
      fontFamily: {
        display: ['"Playfair Display"', "Georgia", "serif"],
        body: ["Lora", "Georgia", "serif"],
      },
      animation: {
        bounceOnce: "bounceOnce 0.8s ease-out",
        marquee: "marquee 25s linear infinite",
      },
      keyframes: {
        bounceOnce: {
          "0%": { transform: "scale(0.8) translateY(10px)", opacity: "0" },
          "60%": { transform: "scale(1.05) translateY(-5px)", opacity: "1" },
          "100%": { transform: "scale(1) translateY(0)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
