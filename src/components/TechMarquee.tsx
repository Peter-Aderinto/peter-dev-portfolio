const technologies = ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Shopify", "Liquid", "Bubble.io", "Figma", "Git"];
const capabilities = ["Responsive Interfaces", "Micro Interactions", "Creative Development", "Motion Design", "Pixel Precision"];

export default function TechMarquee() {
  return (
    <>
      <section className="tech-marquee" aria-label="Technical skills"><div className="marquee-track">
        {[...technologies, ...technologies].map((item, index) => <span key={`${item}-${index}`}>{item}</span>)}
      </div></section>
      <section className="motion-rail" aria-label="Creative frontend capabilities"><div className="motion-rail-track">
        {[...capabilities, ...capabilities].map((item, index) => <span key={`${item}-${index}`}>{item}</span>)}
      </div></section>
    </>
  );
}
