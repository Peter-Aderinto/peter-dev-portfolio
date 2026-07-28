'use client';

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type Project = {
  title: string;
  type: string;
  status: string;
  categories: string[];
  image: string;
  imageClass?: string;
  description: string;
  tags: string[];
};

const projects: Project[] = [
  {
    title: "SPSS Lite Research Survey Analyzer",
    type: "Data Analytics Web Application",
    status: "Product Build",
    categories: ["product", "frontend", "design"],
    image: "/spss-lite.png",
    description: "A browser-based survey analysis workspace for importing CSV datasets, previewing variables, identifying missing values, generating charts and cross-tabs, reviewing frequency tables, and exporting research-ready reports.",
    tags: ["Data Visualization", "CSV Processing", "Analytics Dashboard", "Responsive UI"],
  },
  {
    title: "5-Second Blur UX Simulator",
    type: "UX Research & Testing Tool",
    status: "Product Build",
    categories: ["product", "frontend", "design"],
    image: "/5-second.png",
    description: "An interactive five-second testing tool that measures what users notice and remember from a landing page, then presents recall questions, clarity scoring, benchmark performance, and a visual memory breakdown.",
    tags: ["UX Research", "Attention Testing", "Interactive UI", "Data Visualization"],
  },
  {
    title: "Bam Custom Product Builder",
    type: "Shopify Product Configurator",
    status: "Client Project",
    categories: ["shopify", "frontend"],
    image: "/bam.png",
    description: "A custom subscription product builder that lets customers choose a pack size, combine products, select purchase frequency, and add the configured bundle to cart through a guided multi-step experience.",
    tags: ["Shopify", "JavaScript", "State Management", "Subscription UX"],
  },
  {
    title: "Melin Headwear Storefront",
    type: "E-commerce Storefront",
    status: "Client Project",
    categories: ["shopify", "frontend"],
    image: "/melin.png",
    description: "A polished headwear storefront with collection merchandising, responsive product discovery, detailed product galleries, variant selection, fit guidance, and streamlined add-to-cart interactions.",
    tags: ["Shopify", "Responsive UI", "Product Pages", "Conversion UX"],
  },
  {
    title: "ImaniGifts E-commerce Experience",
    type: "Responsive Gifting Platform",
    status: "Client Project",
    categories: ["frontend", "design"],
    image: "/imanigifts.png",
    description: "A responsive gifting storefront for ready-made and build-your-own gift boxes, featuring mobile-adapted navigation, promotional capture flows, product discovery, and conversion-focused calls to action.",
    tags: ["E-commerce", "Responsive Design", "Mobile UX", "Technical SEO"],
  },
  {
    title: "Etech Learning Platform",
    type: "Responsive Landing Page",
    status: "Interface Build",
    categories: ["frontend", "design"],
    image: "/etech.jpg",
    imageClass: "project-shot-tall",
    description: "A responsive education landing page with course search, learning benefits, course listings, instructor onboarding, partner branding, and testimonial sections adapted across desktop and mobile layouts.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive UI"],
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const filters = [["all", "All"], ["product", "Web Apps"], ["frontend", "Frontend"], ["shopify", "Shopify"], ["design", "UI & Layouts"]];

  return (
    <section className="section projects framed-section" id="projects">
      <span className="section-frame frame-tl" />
      <span className="section-frame frame-br" />
      <div className="section-heading reveal">
        <p className="eyebrow">Portfolio</p>
        <h2>Selected Work</h2>
        <p className="section-intro">
          Selected product applications, e-commerce platforms, Shopify builds, and responsive
          interfaces created around real workflows, reusable systems, and thoughtful user experiences.
        </p>
      </div>
      <div className="project-filters reveal" role="group" aria-label="Project filters">
        {filters.map(([value, label]) => (
          <button key={value} className={`filter-btn magnetic${filter === value ? " active" : ""}`} onClick={() => setFilter(value)}>
            {label}
          </button>
        ))}
      </div>
      <div className="project-grid">
        {projects.map((project, index) => {
          const visible = filter === "all" || project.categories.includes(filter);
          return (
            <article
              key={project.title}
              className={`project-card reveal spotlight-card${visible ? "" : " hidden"}`}
              data-tilt
              style={visible ? { animation: `projectIn 430ms ${index * 55}ms cubic-bezier(.2,.8,.2,1) both` } : undefined}
            >
              <div className={`project-image project-image-real ${project.imageClass ?? ""}`}>
                <Image src={project.image} alt={`${project.title} interface preview`} fill sizes="(max-width: 720px) 100vw, 50vw" />
              </div>
              <div className="project-content">
                <div className="project-topline"><div className="project-type">{project.type}</div><span className="live-dot">{project.status}</span></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-footer">
                  <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <span className="project-detail-icon" aria-hidden="true"><ArrowUpRight /></span>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
