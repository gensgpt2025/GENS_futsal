import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#FFD700",
        "light-gold": "#FFF8E7",
      },
      boxShadow: {
        neon: "0 0 8px theme('colors.light-gold'), 0 0 20px theme('colors.light-gold')",
      },
    },
  },
  plugins: [],
};
export default config;
