import Image from "next/image";

const skillGroups = [
  { title: "Shopify engineering", skills: ["Shopify OS 2.0", "Liquid", "JSON Templates", "Custom Sections", "Shopify CLI"] },
  { title: "Frontend", skills: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Accessibility"] },
  { title: "Backend & integrations", note: "Demonstrated through StorePulse and API projects.", skills: ["GraphQL Admin API", "REST APIs", "Server Actions", "Webhooks", "Prisma", "SQLite"] },
  { title: "Tools & delivery", skills: ["Git & GitHub", "Figma", "Testing", "Vercel", "Performance Optimization"] },
];

export default function About() {
  return (
    <section className="section about framed-section" id="about"><span className="section-frame frame-tl" /><span className="section-frame frame-br" />
      <div className="section-heading reveal"><p className="eyebrow">About Me</p><h2>Building commerce experiences<br />and the systems behind them.</h2></div>
      <div className="about-grid">
        <div className="portrait-wrap reveal">
          <div className="portrait-placeholder">
            <Image className="portrait-image" src="/peter-aderinto.jpeg" alt="Peter Aderinto wearing a grey suit" fill sizes="(max-width: 980px) 100vw, 40vw" />
          </div>
          <div className="stat-card stat-top"><strong>Shopify engineering</strong><span>Themes, apps & integrations</span></div>
          <div className="stat-card stat-bottom"><strong>Full-stack development</strong><span>Interfaces, APIs & data</span></div>
        </div>
        <div className="about-copy reveal">
          <h3>A senior Shopify specialist with a full-stack approach.</h3>
          <p>I’m Peter Aderinto, a Full-Stack Web Developer and Senior Shopify Developer with approximately five years of relevant development experience. I build and customize Shopify OS 2.0 themes with Liquid and JavaScript, creating product experiences and storefront features around how customers browse and buy.</p>
          <p>My work extends from React, Next.js and Figma-to-code implementation to authenticated server workflows, GraphQL integrations, webhooks and database-backed applications. I connect thoughtful interfaces to maintainable systems, taking projects from design and implementation through deployment and ongoing improvement, with attention to usability, performance and conversion.</p>
          <div className="skills-block"><h4>Technical Expertise</h4><div className="expertise-groups">{skillGroups.map(group => <div className="expertise-group" key={group.title}><h5>{group.title}</h5>{group.note && <p className="expertise-note">{group.note}</p>}<div className="skill-tags">{group.skills.map(skill => <span key={skill}>{skill}</span>)}</div></div>)}</div></div>
          <div className="about-stats">
            <div><strong>~5 years</strong><span>Relevant development experience</span></div>
            <div><strong>Commerce</strong><span>Shopify themes & applications</span></div>
            <div><strong>End to end</strong><span>UI, integrations & delivery</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
