import type { Config } from "tailwindcss";

const customColors = {
  primary: "#6941C6",
  secondary: "#53389E",
  accent: "#E9D7FE",
  highlight: "#7F56D9",
  darkBlue: "#101828",
  gray: {
    100: "#D0D5DD",
    200: "#EAECF0",
    300: "#667085",
    400: "#475467",
    500: "#344054",
  },
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...customColors,
      },
      textColor: {
        base: customColors.darkBlue,
      },
    },
  },
  plugins: [],
};
export default config;
