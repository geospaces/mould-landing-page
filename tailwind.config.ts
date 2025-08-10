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
      screens: { "2xl": "1440px" }
    },
    extend: {
      colors: {
        brand: "var(--color-brand)",
        accent: "var(--color-accent)",
        bg: "var(--color-bg)",
        fg: "var(--color-fg)",
        muted: "var(--color-muted)",
        subtle: "var(--color-subtle)",
        border: "var(--color-border)",
      },
      borderRadius: {
        md: "var(--radius-md)",
        lg: "var(--radius-lg)"
      },
      boxShadow: {
        sm: "var(--shadow-1)",
        xl: "var(--shadow-2)"
      },
      fontFamily: {
        sans: ["var(--font-sans)"]
      }
    },
  },
  plugins: [],
};
export default config;
