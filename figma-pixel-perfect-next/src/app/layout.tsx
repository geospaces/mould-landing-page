import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pixel-Perfect Starter",
  description: "Next.js + Tailwind starter for Figma-accurate builds at 1440px",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
