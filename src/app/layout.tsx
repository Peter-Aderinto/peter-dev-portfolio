import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Peter Aderinto — Frontend & Web Developer",
  description: "Peter Aderinto — Frontend & Web Developer specializing in React, Next.js, TypeScript, Shopify Liquid, responsive UI engineering, and pixel-perfect Figma implementation.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
