import { ArrowUpRight, Code2, Database, PanelsTopLeft, ShoppingBag } from "lucide-react";

const cards = [
  { number: "01", Icon: ShoppingBag, title: "Shopify & E-commerce Engineering", text: "Shopify OS 2.0 themes, Liquid sections, product builders, subscriptions, and custom storefront experiences." },
  { number: "02", Icon: Code2, title: "Full-Stack Web Applications", text: "React, Next.js and TypeScript interfaces connected to server-side logic, authenticated workflows, and application data." },
  { number: "03", Icon: Database, title: "APIs, Integrations & Data", text: "Shopify Admin GraphQL, REST APIs, webhooks, and Prisma-backed persistence, demonstrated in StorePulse and API projects." },
  { number: "04", Icon: PanelsTopLeft, title: "UI/UX, Performance & Deployment", text: "Figma-to-code delivery, responsive layouts, accessibility, performance optimization, testing, and deployment." },
];

export default function DesignShowcase() {
  return <section className="design-showcase"><div className="section showcase-inner">
    <div className="showcase-copy reveal"><p className="eyebrow">Engineering Capabilities</p><h2>From storefront<br />to backend.</h2>
      <p>End-to-end development for modern commerce and web applications. I connect customer-facing experiences with the application logic, integrations and data that make them useful.</p>
      <a href="#contact" className="text-link">Discuss a Shopify or web application project <ArrowUpRight /></a>
    </div>
    <div className="showcase-cards reveal">{cards.map(({ number, Icon, title, text }) => <div className="showcase-card spotlight-card" data-tilt key={number}><span>{number}</span><Icon /><strong>{title}</strong><p>{text}</p></div>)}</div>
  </div></section>;
}
