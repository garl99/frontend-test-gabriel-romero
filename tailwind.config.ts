import type { Config } from "tailwindcss";

const customColors = {
  primary: "#53389E",
  secondary: "#6941C6",
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
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      mdlg: "928px",
      // => @media (min-width: 928px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        ...customColors,
      },
      height: {
        "44": "44px",
        "48": "48px",
        "272": "272px",
        "460": "460px",
        "554": "554px",
        "674": "674px",
        "374": "374px",
        "28": "28px",
      },
      width: {
        "95": "95px",
        "129": "129px",
        "341": "341px",
        "554": "554px",
        "674": "674px",
        "800": "800px",
        "105": "105px",
      },
    },
  },
  plugins: [],
};
export default config;
