'use client';

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type Project = {
  title: string;
  href?: string;
  sourceHref?: string;
  subtitle?: string;
  type: string;
  status: string;
  categories: string[];
  image?: string;
  imageClass?: string;
  description: string;
  tags: string[];
};

const projects: Project[] = [
  {
    title: "StorePulse",
    subtitle: "Shopify Store Health & Growth Dashboard",
    href: "/projects/storepulse",
    sourceHref: "https://github.com/Peter-Aderinto/storepulse-shopify-app",
    type: "Full-Stack Shopify Application",
    status: "Featured Project",
    categories: ["fullstack", "frontend", "commerce"],
    image: "/storepulse/storepulse-dashboard.png",
    imageClass: "project-storepulse",
    description: "An embedded Shopify application that analyzes product catalog health, identifies SEO, accessibility, content and inventory issues, and enables merchant-controlled remediation through Shopify’s GraphQL Admin API.",
    tags: ["Shopify", "GraphQL", "TypeScript", "Prisma"],
  },
  {
    title: "SPSS Lite Research Survey Analyzer",
    href: "https://spss-lite.vercel.app/",
    type: "Data Analytics Web Application",
    status: "Product Build",
    categories: ["frontend"],
    image: "/spss-lite.png",
    description: "A browser-based survey analysis workspace for importing CSV datasets, previewing variables, identifying missing values, generating charts and cross-tabs, reviewing frequency tables, and exporting research-ready reports.",
    tags: ["Data Visualization", "CSV Processing", "Analytics Dashboard", "Responsive UI"],
  },
  {
    title: "5-Second Blur UX Simulator",
    type: "UX Research & Testing Tool",
    status: "Product Build",
    categories: ["frontend"],
    image: "/5-second.png",
    description: "An interactive five-second testing tool that measures what users notice and remember from a landing page, then presents recall questions, clarity scoring, benchmark performance, and a visual memory breakdown.",
    tags: ["UX Research", "Attention Testing", "Interactive UI", "Data Visualization"],
  },
  {
    title: "Bam Custom Product Builder",
    href: "https://bambybammies.com",
    type: "Shopify Product Configurator",
    status: "Client Project",
    categories: ["commerce", "frontend"],
    image: "/bam.png",
    description: "A custom subscription product builder that lets customers choose a pack size, combine products, select purchase frequency, and add the configured bundle to cart through a guided multi-step experience.",
    tags: ["Shopify", "JavaScript", "State Management", "Subscription UX"],
  },
  {
    title: "Melin Headwear Storefront",
    href: "https://melin.com",
    type: "E-commerce Storefront",
    status: "Client Project",
    categories: ["commerce", "frontend"],
    image: "/melin.png",
    description: "A polished headwear storefront with collection merchandising, responsive product discovery, detailed product galleries, variant selection, fit guidance, and streamlined add-to-cart interactions.",
    tags: ["Shopify", "Responsive UI", "Product Pages", "Conversion UX"],
  },
  {
    title: "ImaniGifts E-commerce Experience",
    href: "https://imanigifts.co.uk",
    type: "Responsive Gifting Platform",
    status: "Client Project",
    categories: ["commerce", "frontend"],
    image: "/imanigifts.png",
    description: "A responsive gifting storefront for ready-made and build-your-own gift boxes, featuring mobile-adapted navigation, promotional capture flows, product discovery, and conversion-focused calls to action.",
    tags: ["E-commerce", "Responsive Design", "Mobile UX", "Technical SEO"],
  },
  {
    title: "FlowPay Merchant Dashboard",
    href: "https://flowpay-swart.vercel.app/dashboard",
    type: "Fintech Frontend Application",
    status: "Portfolio Demo",
    categories: ["frontend"],
    image: "/flowpay.png",
    description: "A Next.js merchant dashboard for payment reporting, transaction filtering, and invoice creation with PDF downloads. Typed mock services and browser storage support persistent demo invoices; all data is fictional, with no live payment backend or external database.",
    tags: ["Next.js", "TypeScript", "Browser Persistence", "PDF Invoices"],
  },
  {
    title: "Shopify Dawn Variant Collection",
    href: "https://github.com/Peter-Aderinto/shopify-dawn-variant-collection",
    type: "Shopify Theme Engineering",
    status: "Theme Assessment",
    categories: ["commerce", "frontend"],
    image: "/dawn/variant-collection.png",
    description: "Makes product colours discoverable directly in a collection grid. Server-rendered Liquid expands each colour into a card with its representative variant image, price and link, while reusing Dawn’s components and existing theme layout.",
    tags: ["Shopify OS 2.0", "Liquid", "Variant Rendering", "Dawn"],
  },
  {
    title: "Patient Dashboard",
    href: "https://github.com/Peter-Aderinto/patient-dashboard-html-css-js",
    type: "REST API & Data Visualization",
    status: "Frontend Assessment",
    categories: ["frontend"],
    description: "A responsive patient interface that retrieves assessment data through an authenticated external REST API and renders profile information, vital signs, diagnostic history and Chart.js blood-pressure visualizations. Includes request timeout and API error feedback.",
    tags: ["JavaScript", "REST API", "Chart.js", "Responsive CSS"],
  },
];

const projectOrder = ["StorePulse", "FlowPay Merchant Dashboard", "Shopify Dawn Variant Collection", "Bam Custom Product Builder", "Patient Dashboard", "Melin Headwear Storefront", "ImaniGifts E-commerce Experience", "SPSS Lite Research Survey Analyzer", "5-Second Blur UX Simulator"];
const orderedProjects = [...projects].sort((a, b) => projectOrder.indexOf(a.title) - projectOrder.indexOf(b.title));

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const filters = [["all", "All"], ["commerce", "Shopify & E-commerce"], ["fullstack", "Full-Stack Apps"], ["frontend", "Frontend & UI"]];

  return (
    <section className="section projects framed-section" id="projects">
      <span className="section-frame frame-tl" />
      <span className="section-frame frame-br" />
      <div className="section-heading reveal">
        <p className="eyebrow">Portfolio</p>
        <h2>Selected Work</h2>
        <p className="section-intro">
          Shopify themes and applications, authenticated backend workflows, API integrations,
          and carefully engineered interfaces. Each project shows a different part of the build.
        </p>
      </div>
      <div className="project-filters reveal" role="group" aria-label="Project filters">
        {filters.map(([value, label]) => (
          <button key={value} aria-pressed={filter === value} className={`filter-btn magnetic${filter === value ? " active" : ""}`} onClick={() => setFilter(value)}>
            {label}
          </button>
        ))}
      </div>
      <div className="project-grid">
        {orderedProjects.map((project, index) => {
          const visible = filter === "all" || project.categories.includes(filter);
          return (
            <article
              key={project.title}
              className={`project-card reveal spotlight-card${visible ? "" : " hidden"}`}
              data-tilt
              style={visible ? { animation: `projectIn 430ms ${index * 55}ms cubic-bezier(.2,.8,.2,1) both` } : undefined}
            >
              {project.href && (
                <a
                  className="project-destination"
                  href={project.href}
                  target={project.href.startsWith("/") ? undefined : "_blank"}
                  rel={project.href.startsWith("/") ? undefined : "noopener noreferrer"}
                  aria-label={project.href.startsWith("/") ? `View ${project.title} project` : `Visit ${project.title} (opens in a new tab)`}
                />
              )}
              <div className={`project-image project-image-real ${project.imageClass ?? ""}`}>
                {project.image ? <Image src={project.image} alt={project.sourceHref ? "StorePulse embedded in Shopify Admin, showing catalog health, inventory issues, content and SEO gaps, and missing image alt text" : `${project.title} interface preview`} fill sizes="(max-width: 720px) 100vw, 50vw" /> : <div className="project-api-preview"><span className="eyebrow">Integration architecture</span><strong>Patient Dashboard</strong><div>External REST API <span aria-hidden="true">→</span> JavaScript <span aria-hidden="true">→</span> Chart.js</div><p>Data retrieval, patient information &amp; visualization</p></div>}
              </div>
              <div className="project-content">
                <div className="project-topline"><div className="project-type">{project.type}</div><span className="live-dot">{project.status}</span></div>
                <h3>{project.title}</h3>
                {project.subtitle && <div className="project-subtitle">{project.subtitle}</div>}
                <p>{project.description}</p>
                {project.sourceHref && (
                  <div className="project-actions">
                    <span>View Project <ArrowUpRight size={16} aria-hidden="true" /></span>
                    <a href={project.sourceHref} target="_blank" rel="noopener noreferrer" aria-label="StorePulse on GitHub (opens in a new tab)">GitHub <ArrowUpRight size={16} aria-hidden="true" /></a>
                  </div>
                )}
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
