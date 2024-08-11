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
        neutral: "#132043",
        primary: "#439F90",
        secondary: "#EFB31E",
        baseBackground: "#eaf0fc",
      },
    },
  },
  plugins: [],
};
export default config;
