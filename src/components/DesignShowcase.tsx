import { ArrowUpRight, PanelsTopLeft, PenTool, Sparkles } from "lucide-react";

const cards = [
  { number: "01", Icon: PenTool, title: "Interface Design", text: "Responsive layouts, reusable components, typography, spacing and design-token consistency." },
  { number: "02", Icon: PanelsTopLeft, title: "Responsive Build", text: "Scalable component implementation across desktop, tablet and mobile breakpoints." },
  { number: "03", Icon: Sparkles, title: "Interaction Polish", text: "Purposeful motion, accessible states, interaction feedback and polished micro-interactions." },
];

export default function DesignShowcase() {
  return <section className="design-showcase"><div className="section showcase-inner">
    <div className="showcase-copy reveal"><p className="eyebrow">Design & Implementation</p><h2>From design system<br />to production-ready UI.</h2>
      <p>I work across the full interface-development process: design interpretation, component architecture, responsive behavior, interaction states, accessibility and accurate implementation in modern frontend frameworks.</p>
      <a href="#contact" className="text-link">Discuss a design-to-code project <ArrowUpRight /></a>
    </div>
    <div className="showcase-cards reveal">{cards.map(({ number, Icon, title, text }) => <div className="showcase-card spotlight-card" data-tilt key={number}><span>{number}</span><Icon /><strong>{title}</strong><p>{text}</p></div>)}</div>
  </div></section>;
}
