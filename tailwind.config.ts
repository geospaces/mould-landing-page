import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "0px",
      screens: {
        "2xl": "1440px"
      }
    },
    extend: {
      spacing: {
        // map your 4/8pt scale here
        // "1": "4px", "2": "8px", ...
      },
      colors: {
        // Figma tokens go here
        // "brand": "var(--color-brand)",
        // "bg": "var(--color-bg)",
        // "fg": "var(--color-fg)",
      },
      borderRadius: {
        // "lg": "var(--radius-lg)"
      },
      boxShadow: {
        // "elevation-1": "var(--shadow-1)"
      },
      fontFamily: {
        // "sans": ["var(--font-sans)", "system-ui", "sans-serif"]
      },
      letterSpacing: {
        // "tight-1": "-0.01em"
      },
      lineHeight: {
        // "body": "var(--lh-body)"
      }
    },
  },
  plugins: [],
};
export default config;
