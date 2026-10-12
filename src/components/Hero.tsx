import { ArrowUpRight, Atom, Braces, ChevronDown, Code2, FileCode2, GitBranch, Layers3, Send, ShoppingBag } from "lucide-react";

const skills = [
  [ShoppingBag, "Shopify"], [Code2, "Liquid"], [Atom, "React"], [Layers3, "Next.js"],
  [FileCode2, "TypeScript"], [Braces, "GraphQL"], [GitBranch, "APIs"],
] as const;

export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="orb orb-one" /><div className="orb orb-two" />
      <div className="hero-particles" aria-hidden="true">{Array.from({ length: 10 }, (_, index) => <span key={index} />)}</div>
      <div className="hero-copy reveal">
        <div className="availability"><span className="pulse" />Available for Shopify & full-stack work</div>
        <p className="eyebrow">Hi there, I’m Peter Aderinto</p>
        <h1>Full-Stack Developer<span>&amp; Senior Shopify Developer</span></h1>
        <p className="hero-description">I build Shopify experiences and full-stack web applications—from custom storefronts and conversion-focused interfaces to backend workflows, APIs and integrations.</p>
        <div className="hero-buttons">
          <a className="btn btn-primary magnetic" href="#projects">Explore My Work <ArrowUpRight /></a>
          <a className="btn btn-secondary magnetic" href="#contact">Let’s Work Together <Send /></a>
        </div>
      </div>
      <div className="hero-visual reveal" data-tilt>
        <div className="code-orbit orbit-code-one"><span>API</span></div><div className="code-orbit orbit-code-two"><span>DB</span></div><div className="code-orbit orbit-code-three"><span>JS</span></div>
        <div className="code-window spotlight-card">
          <div className="window-bar"><div className="window-dots"><span /><span /><span /></div><span>peter-portfolio.tsx</span><Code2 /></div>
          <pre><code><span className="code-purple">const</span>{` developer = {\n  name: `}<span className="code-green">&quot;Peter Aderinto&quot;</span>{`,\n  focus: [\n    `}<span className="code-green">&quot;Full-Stack Applications&quot;</span>{`,\n    `}<span className="code-green">&quot;Shopify Themes & Apps&quot;</span>{`,\n    `}<span className="code-green">&quot;GraphQL & Webhooks&quot;</span>{`,\n    `}<span className="code-green">&quot;React & Next.js&quot;</span>{`\n  ],\n  standard: `}<span className="code-green">&quot;maintainable&quot;</span>{`,\n  available: `}<span className="code-orange">true</span>{`\n};`}</code></pre>
          <div className="floating-card card-react"><Atom /><div><strong>Full Stack</strong><span>Interfaces & application logic</span></div></div>
          <div className="floating-card card-interface"><ShoppingBag /><div><strong>Shopify</strong><span>Themes, apps & integrations</span></div></div>
        </div>
      </div>
      <div className="hero-skill-strip" aria-label="Core technologies"><div className="hero-skill-track">
        {[...skills, ...skills].map(([Icon, label], index) => <span key={`${label}-${index}`}><Icon /> {label}</span>)}
      </div></div>
      <div className="scroll-indicator"><span>Scroll</span><ChevronDown /></div>
    </section>
  );
}
