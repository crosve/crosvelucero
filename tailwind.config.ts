import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        bounceOnce: "bounceOnce 0.8s ease-out",
      },
      keyframes: {
        bounceOnce: {
          "0%": { transform: "scale(0.8) translateY(10px)", opacity: "0" },
          "60%": { transform: "scale(1.05) translateY(-5px)", opacity: "1" },
          "100%": { transform: "scale(1) translateY(0)" },
        },
      },
    },
  },

  plugins: [],
};
export default config;
