import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Peter Aderinto | Full-Stack Developer & Senior Shopify Developer",
  description: "Full-Stack Developer and Senior Shopify Developer specializing in custom Shopify experiences, React and Next.js applications, GraphQL integrations, and high-performance e-commerce development.",
  openGraph: {
    title: "Peter Aderinto | Full-Stack Developer & Senior Shopify Developer",
    description: "Custom Shopify experiences and full-stack web applications, from storefronts and interfaces to backend workflows, APIs and integrations.",
    type: "website",
    url: "https://theempiregrowth.com",
    siteName: "The Empire Growth",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
