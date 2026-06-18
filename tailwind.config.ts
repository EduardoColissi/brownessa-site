import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Marrom chocolate (brownie)
        choco: {
          50: "#FAF6F2",
          100: "#F0E6DD",
          200: "#DEC7B4",
          300: "#C9A284",
          400: "#A9764F",
          500: "#8B5A2B", // marrom principal
          600: "#704421",
          700: "#54331A",
          800: "#3B2412",
          900: "#241509",
        },
        // Rosa pastel (delicado / confeitaria)
        rose: {
          50: "#FDF3F4",
          100: "#FBE6E9",
          200: "#F6CBD2",
          300: "#EFA8B5",
          400: "#E27E91",
          500: "#D45A72", // rosa principal
          600: "#B8425A",
          700: "#933246",
          800: "#6E2535",
          900: "#4A1923",
        },
        // Creme de fundo
        cream: "#FBF7F1",
        // Dourado de detalhe
        gold: "#C9A24B",
      },
      fontFamily: {
        display: ['"Playfair Display"', "Georgia", "serif"],
        body: ['"Poppins"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(84, 51, 26, 0.25)",
        card: "0 8px 24px -10px rgba(84, 51, 26, 0.30)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
