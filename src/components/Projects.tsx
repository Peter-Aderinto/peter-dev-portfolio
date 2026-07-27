'use client';

import { ArrowUpRight, Construction } from "lucide-react";
import { useState } from "react";

type Project = {
  title: string; type: string; status: string; categories: string[]; className: string;
  description: string; tags: string[];
};

const projects: Project[] = [
  { title: "Rock Paper Scissors", type: "Interactive Game", status: "Concept Build", categories: ["frontend"], className: "project-rps", description: "An interactive browser game engineered with clear state transitions, reusable game logic, responsive controls and persistent score management.", tags: ["HTML", "CSS", "JavaScript"] },
  { title: "TaskFlow Dashboard", type: "Frontend Application", status: "Planned", categories: ["frontend"], className: "project-dashboard", description: "A responsive productivity dashboard built with reusable React components, typed data structures, state-driven filtering and modular UI patterns.", tags: ["React", "TypeScript", "Tailwind"] },
  { title: "Northstar Fashion", type: "Shopify Storefront", status: "Planned", categories: ["shopify"], className: "project-store", description: "A custom Shopify storefront featuring Liquid section development, responsive product templates, configurable theme blocks and refined mobile behavior.", tags: ["Shopify", "Liquid", "CSS"] },
  { title: "Bookly Service App", type: "No-Code Application", status: "Planned", categories: ["design"], className: "project-booking", description: "A workflow-driven web application structured around responsive layouts, reusable interface elements, user authentication and connected application states.", tags: ["Bubble.io", "Workflows", "Database"] },
  { title: "Nova AI Landing Page", type: "Figma to Frontend", status: "Planned", categories: ["design", "frontend"], className: "project-saas", description: "A Figma-to-code interface built with reusable layout components, responsive spacing rules, accessible interactions and precise visual implementation.", tags: ["Figma", "Next.js", "Motion"] },
  { title: "Atmos Weather App", type: "API Project", status: "Planned", categories: ["frontend"], className: "project-weather", description: "A data-driven weather interface with API integration, asynchronous loading states, reusable forecast components and responsive condition-based layouts.", tags: ["React", "REST API", "CSS"] },
];

function ProjectVisual({ type }: { type: string }) {
  if (type === "project-rps") return <div className={`project-image ${type}`}><div className="rps-icons"><span>✊</span><span>✋</span><span>✌️</span></div><div className="mini-score"><span>You 04</span><span>CPU 03</span></div></div>;
  if (type === "project-dashboard") return <div className={`project-image ${type}`}><div className="dash-sidebar" /><div className="dash-main"><div className="dash-row" /><div className="dash-panels"><span /><span /><span /></div><div className="dash-chart" /></div></div>;
  if (type === "project-store") return <div className={`project-image ${type}`}><div className="store-nav" /><div className="store-copy"><span>NEW COLLECTION</span><strong>Wear your<br />confidence.</strong></div><div className="store-product" /></div>;
  if (type === "project-booking") return <div className={`project-image ${type}`}><div className="booking-phone"><span className="booking-pill" /><strong>Book a session</strong><div /><div /><div /><button>Continue</button></div></div>;
  if (type === "project-saas") return <div className={`project-image ${type}`}><div className="saas-glow" /><span className="saas-badge">AI WORKSPACE</span><strong>Work smarter.<br />Ship faster.</strong><button>Start building</button></div>;
  return <div className={`project-image ${type}`}><div className="weather-card"><span>Lagos, Nigeria</span><strong>29°</strong><p>Partly cloudy</p><div><span>31°</span><span>28°</span><span>27°</span></div></div></div>;
}

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const filters = [["all", "All"], ["frontend", "Frontend"], ["shopify", "Shopify"], ["design", "UI & Layouts"]];
  return (
    <section className="section projects framed-section" id="projects"><span className="section-frame frame-tl" /><span className="section-frame frame-br" />
      <div className="section-heading reveal"><p className="eyebrow">Portfolio</p><h2>Selected Work</h2><p className="section-intro">A growing collection of frontend, Shopify and interface-engineering projects built to demonstrate practical problem-solving, component logic and production-quality execution.</p></div>
      <div className="project-filters reveal" role="group" aria-label="Project filters">
        {filters.map(([value, label]) => <button key={value} className={`filter-btn magnetic${filter === value ? " active" : ""}`} onClick={() => setFilter(value)}>{label}</button>)}
      </div>
      <div className="project-grid">
        {projects.map((project, index) => {
          const visible = filter === "all" || project.categories.includes(filter);
          return <article key={project.title} className={`project-card reveal spotlight-card${visible ? "" : " hidden"}`} data-tilt style={visible ? { animation: `projectIn 430ms ${index * 55}ms cubic-bezier(.2,.8,.2,1) both` } : undefined}>
            <ProjectVisual type={project.className} />
            <div className="project-content"><div className="project-topline"><div className="project-type">{project.type}</div><span className="live-dot">{project.status}</span></div>
              <h3>{project.title}</h3><p>{project.description}</p>
              <div className="project-footer"><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a href="#" aria-label={`View ${project.title} project`}><ArrowUpRight /></a></div>
            </div>
          </article>;
        })}
      </div>
      <div className="project-note reveal"><Construction /><div><strong>Portfolio currently in active development.</strong><p>These cards provide the final framework for engineering-focused projects you will build and publish. Replace each placeholder with a live demo, source repository and concise technical case study.</p></div></div>
    </section>
  );
}
