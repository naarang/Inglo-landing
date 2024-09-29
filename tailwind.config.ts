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
        gray: "#A4A4A4",
        light_gray: "#919191",
      },
    },
  },
  plugins: [],
};
export default config;
