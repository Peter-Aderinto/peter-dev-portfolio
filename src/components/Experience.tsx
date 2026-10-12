type TimelineEntry = {
  date: string;
  kind: string;
  title: string;
  subtitle: string;
  location?: string;
  highlights: string[];
  tags: string[];
};

const entries: TimelineEntry[] = [
  {
    date: "2025 — Present",
    kind: "Software Engineering Experience",
    title: "Frontend Developer & Web Specialist",
    subtitle: "Julimedia",
    location: "Sweden",
    highlights: [
      "Develop responsive, production-ready web applications from high-fidelity Figma designs using modern frontend technologies.",
      "Build reusable UI components and modular JavaScript architecture to improve maintainability and scalability.",
      "Designed and implemented a custom product configuration system with reusable interface logic and a guided customer purchase journey.",
      "Optimized frontend performance by reducing unnecessary rendering, improving loading speed, and enhancing Core Web Vitals.",
      "Maintain cross-browser compatibility and responsive experiences across multiple screen sizes.",
    ],
    tags: ["React", "Next.js", "JavaScript", "Figma", "Core Web Vitals"],
  },
  {
    date: "2021 — 04/2026",
    kind: "Freelance Agency & Platforms",
    title: "Frontend Developer & E-commerce Strategist",
    subtitle: "Upwork & Fiverr",
    location: "Remote",
    highlights: [
      "Built and deployed responsive websites and landing pages using component-based architecture for e-commerce and SaaS clients.",
      "Integrated third-party services, APIs, analytics tools, and marketing platforms into production websites.",
      "Translated client requirements and business goals into technical solutions, delivering projects on schedule.",
      "Managed multiple projects concurrently using Git and GitHub throughout the development lifecycle.",
    ],
    tags: ["E-commerce", "SaaS", "REST APIs", "Git", "GitHub"],
  },
  {
    date: "09/2025",
    kind: "Web Development & SEO",
    title: "Website Developer & SEO Specialist",
    subtitle: "Imaginifing",
    location: "United Kingdom",
    highlights: [
      "Developed a responsive e-commerce platform supporting physical products, digital bookings, and online gifting services.",
      "Implemented technical SEO improvements, structured data, and search-engine verification to improve discoverability.",
    ],
    tags: ["E-commerce", "Technical SEO", "Structured Data", "Responsive UI"],
  },
  {
    date: "2022 — 2026",
    kind: "Education",
    title: "Bachelor of Science (B.Sc.) in Sociology",
    subtitle: "University of Ibadan",
    location: "Nigeria",
    highlights: [
      "Undergraduate degree at the University of Ibadan, completed alongside ongoing professional frontend development work.",
    ],
    tags: ["B.Sc.", "Sociology", "University of Ibadan"],
  },
  {
    date: "2025",
    kind: "Professional Certification",
    title: "Google Career Certificate in Data Analytics",
    subtitle: "Google",
    highlights: [
      "Completed professional training in data preparation, analysis, visualization, and data-informed problem solving.",
    ],
    tags: ["Data Analytics", "Data Visualization", "Google"],
  },
];

export default function Experience() {
  return (
    <section className="section experience framed-section" id="experience">
      <span className="section-frame frame-tl" />
      <span className="section-frame frame-br" />
      <div className="section-heading reveal">
        <p className="eyebrow">Career</p>
        <h2>Experience & Education</h2>
        <p className="section-intro">
          Approximately five years of relevant development experience across e-commerce,
          custom web features, API integrations and responsive applications.
        </p>
      </div>
      <div className="timeline">
        {entries.map((entry) => (
          <article className="timeline-item reveal" key={`${entry.title}-${entry.subtitle}`}>
            <div className="timeline-marker" />
            <div className="timeline-date">{entry.date}</div>
            <div className="timeline-content spotlight-card">
              <span className="timeline-kind">{entry.kind}</span>
              <h3>{entry.title}</h3>
              <h4>
                {entry.subtitle}
                {entry.location && <span className="timeline-location"> · {entry.location}</span>}
              </h4>
              <ul className="timeline-highlights">
                {entry.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
              <div className="project-tags">
                {entry.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
