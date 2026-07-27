'use client';

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

function Counter({ target }: { target: number }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      const start = performance.now();
      const update = (now: number) => {
        const progress = Math.min((now - start) / 1200, 1);
        setValue(Math.floor(target * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) requestAnimationFrame(update);
      };
      requestAnimationFrame(update);
      observer.disconnect();
    }, { threshold: 0.7 });
    observer.observe(element);
    return () => observer.disconnect();
  }, [target]);
  return <span className="counter" ref={ref}>{value}</span>;
}

const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Responsive Design", "Shopify", "Liquid", "Theme Customization", "Bubble.io", "Figma", "UI Design", "Git", "Vercel"];

export default function About() {
  return (
    <section className="section about framed-section" id="about"><span className="section-frame frame-tl" /><span className="section-frame frame-br" />
      <div className="section-heading reveal"><p className="eyebrow">About Me</p><h2>Where scalable components<br />meet pixel-perfect interfaces.</h2></div>
      <div className="about-grid">
        <div className="portrait-wrap reveal">
          <div className="portrait-placeholder">
            <Image
              className="portrait-image"
              src="/peter-aderinto.jpeg"
              alt="Peter Aderinto wearing a grey suit"
              fill
              sizes="(max-width: 980px) 100vw, 40vw"
            />
          </div>
          <div className="stat-card stat-top"><strong>Pixel-perfect</strong><span>Figma implementation</span></div>
          <div className="stat-card stat-bottom"><strong>Frontend systems</strong><span>React, Next.js & Shopify</span></div>
        </div>
        <div className="about-copy reveal">
          <h3>I engineer responsive interfaces with structure, precision and design fidelity.</h3>
          <p>I’m Peter Aderinto, a frontend and web developer focused on component architecture, responsive design systems and maintainable user interfaces. I build production-ready experiences with React, Next.js, TypeScript and modern CSS, while developing and customizing Shopify storefronts with Liquid.</p>
          <p>My Figma proficiency helps me interpret layouts, reusable components, spacing, typography and interaction patterns with accuracy. I translate those systems into clean frontend code that preserves design intent across screen sizes, interaction states and real-world content.</p>
          <div className="skills-block"><h4>Skills & Tools</h4><div className="skill-tags">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div>
          <div className="about-stats">
            <div><strong><Counter target={100} />%</strong><span>Responsive web interfaces</span></div>
            <div><strong><Counter target={3} /> systems</strong><span>React, Next.js & Shopify</span></div>
            <div><strong><Counter target={1} />:1</strong><span>Design-to-code precision</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
