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
        background: "var(--background)",
        foreground: "var(--foreground)",
        grayCustom: '#878787',
        boxShadow: {
          'custom-light': '0px 4px 4px rgba(0, 0, 0, 0.10)',
        },
      },
    },
  },
  plugins: [],
};
export default config;
