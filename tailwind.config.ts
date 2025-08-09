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
      },
      boxShadow: {
        neon: "0 0 5px theme('colors.gold'), 0 0 10px theme('colors.gold'), 0 0 20px theme('colors.gold'), 0 0 40px theme('colors.gold')",
      },
    },
  },
  plugins: [],
};
export default config;
