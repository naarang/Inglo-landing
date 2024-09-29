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
        background: "var(--background)",
        foreground: "var(--foreground)",
        white: "#FFFFFF",
        black: "#000000",
        light_black: "#1F1F1F",
        primary: "#00EB90",
        light_green: "#EBFFF7",
        deep_gray: "#434343",
        gray: "#A4A4A4",
        light_gray: "#919191",
      },
      boxShadow: {
        card_green: "0px 0px 10px rgba(0, 235, 144, 0.40)",
      },
    },
  },
  plugins: [],
};
export default config;
