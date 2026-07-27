import { ArrowUpRight, Atom, Braces, ChevronDown, Code2, FileCode2, GitBranch, Layers3, PanelsTopLeft, PenTool, Send, ShoppingBag } from "lucide-react";

const skills = [
  [Code2, "HTML5"], [Braces, "CSS3"], [FileCode2, "JavaScript"], [Atom, "React"],
  [Layers3, "Next.js"], [ShoppingBag, "Shopify"], [PenTool, "Figma"], [GitBranch, "Git"],
] as const;

export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="orb orb-one" /><div className="orb orb-two" />
      <div className="hero-particles" aria-hidden="true">{Array.from({ length: 10 }, (_, index) => <span key={index} />)}</div>
      <div className="hero-copy reveal">
        <div className="availability"><span className="pulse" />Available for frontend projects</div>
        <p className="eyebrow">Hi there, I’m Peter Aderinto</p>
        <h1>A Frontend & Web Developer<span>building interactive web experiences.</span></h1>
        <p className="hero-description">I turn Figma designs into responsive React and Next.js interfaces, build custom Shopify features with Liquid, and write clean frontend code.</p>
        <div className="hero-buttons">
          <a className="btn btn-primary magnetic" href="#projects">View My Work <ArrowUpRight /></a>
          <a className="btn btn-secondary magnetic" href="#contact">Contact Me <Send /></a>
        </div>
      </div>
      <div className="hero-visual reveal" data-tilt>
        <div className="code-orbit orbit-code-one"><span>UI</span></div><div className="code-orbit orbit-code-two"><span>UX</span></div><div className="code-orbit orbit-code-three"><span>JS</span></div>
        <div className="code-window spotlight-card">
          <div className="window-bar"><div className="window-dots"><span /><span /><span /></div><span>peter-portfolio.tsx</span><Code2 /></div>
          <pre><code><span className="code-purple">const</span>{` developer = {\n  name: `}<span className="code-green">&quot;Peter Aderinto&quot;</span>{`,\n  focus: [\n    `}<span className="code-green">&quot;Frontend Engineering&quot;</span>{`,\n    `}<span className="code-green">&quot;React & Next.js&quot;</span>{`,\n    `}<span className="code-green">&quot;Shopify / Liquid&quot;</span>{`,\n    `}<span className="code-green">&quot;Figma to Code&quot;</span>{`\n  ],\n  standard: `}<span className="code-green">&quot;pixel-perfect&quot;</span>{`,\n  available: `}<span className="code-orange">true</span>{`\n};`}</code></pre>
          <div className="floating-card card-react"><Atom /><div><strong>React</strong><span>Component-driven UI</span></div></div>
          <div className="floating-card card-interface"><PanelsTopLeft /><div><strong>Interface</strong><span>Responsive systems</span></div></div>
        </div>
      </div>
      <div className="hero-skill-strip" aria-label="Core technologies"><div className="hero-skill-track">
        {[...skills, ...skills].map(([Icon, label], index) => <span key={`${label}-${index}`}><Icon /> {label}</span>)}
      </div></div>
      <div className="scroll-indicator"><span>Scroll</span><ChevronDown /></div>
    </section>
  );
}
