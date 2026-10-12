const technologies = ["Shopify OS 2.0", "Liquid", "TypeScript", "React", "Next.js", "GraphQL", "Webhooks", "Prisma", "REST APIs", "Figma", "Git"];
const capabilities = ["Shopify Engineering", "Full-Stack Applications", "API Integrations", "E-commerce Experiences", "Responsive Interfaces"];

export default function TechMarquee() {
  return (
    <>
      <section className="tech-marquee" aria-label="Technical skills"><div className="marquee-track">
        {[...technologies, ...technologies].map((item, index) => <span key={`${item}-${index}`}>{item}</span>)}
      </div></section>
      <section className="motion-rail" aria-label="Engineering capabilities"><div className="motion-rail-track">
        {[...capabilities, ...capabilities].map((item, index) => <span key={`${item}-${index}`}>{item}</span>)}
      </div></section>
    </>
  );
}
