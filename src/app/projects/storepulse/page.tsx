import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check, Code2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import styles from "./storepulse.module.css";

const source = "https://github.com/Peter-Aderinto/storepulse-shopify-app";
const title = "StorePulse — Full-Stack Shopify Application | The Empire Growth";
const description = "Explore StorePulse, a full-stack Shopify application built with React Router, TypeScript and the Shopify GraphQL Admin API for catalog health analysis and merchant-controlled remediation.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://theempiregrowth.com/projects/storepulse" },
  openGraph: { title, description, type: "website", url: "https://theempiregrowth.com/projects/storepulse", siteName: "The Empire Growth" },
  twitter: { card: "summary", title, description },
};

const features = [
  ["Store health dashboard", "Catalog scores, attention summaries, and explicit analysis coverage help merchants decide where to focus."],
  ["Product health analysis", "Transparent rules evaluate descriptions, imagery, alt-text presence, inventory readiness, and custom SEO completeness."],
  ["SEO remediation", "Merchants explicitly save custom SEO titles and descriptions through authenticated GraphQL mutations, with validation and stale-edit checks."],
  ["Image accessibility", "Product evidence identifies missing alt text and provides an editor for individual image files, including a shared-file disclosure."],
  ["Product-update webhooks", "Verified events record shop-scoped activity metadata with deduplication and protection against out-of-order timestamps."],
  ["Merchant-friendly workflow", "Product search, issue filtering, paginated lists, detailed evidence, and prioritized recommendations connect diagnosis to action."],
];
const flows = [
  { title: "Analyze", steps: ["Shopify store", "GraphQL Admin API", "Authenticated backend", "Catalog scoring engine", "Embedded React dashboard"] },
  { title: "Remediate", steps: ["Merchant saves an edit", "Authenticated server action", "Shopify GraphQL mutation", "Authoritative product reread", "Revalidated analysis"] },
  { title: "Record activity", steps: ["Shopify product update", "Verified webhook", "Deduplicated transaction", "Shop-scoped sync metadata"] },
];
const highlights = [
  ["Authenticated boundaries", "Shopify authentication supplies the shop and API client. Tokens stay server-side; posted shop identifiers do not grant authority."],
  ["Normalized, explainable data", "Paginated product, image, and variant records feed one deterministic scoring engine shared by dashboard and detail pages."],
  ["Controlled writes", "Only explicit saves update SEO or image alt text. Ownership, input, stale edits, and duplicate submissions are checked before mutations."],
  ["Retry-safe persistence", "Prisma and SQLite persist sessions and minimal webhook metadata. Transactions deduplicate deliveries and isolate records by shop."],
  ["Authoritative feedback", "A fresh Shopify read verifies each save before analysis revalidation. Unconfirmed rereads are clearly reported instead of assuming success."],
  ["Automated verification", "Tests cover scoring, pagination, API failures, remediation, webhook authentication, tenant isolation, and persistence behavior using mocked APIs."],
];

export default function StorePulseCaseStudy() {
  return <>
    <Navbar linkPrefix="/" />
    <a className={styles.skip} href="#case-study">Skip to case study</a>
    <main id="case-study" className={styles.page}>
      <Link className={styles.back} href="/#projects"><ArrowLeft size={17} aria-hidden="true" /> Back to projects</Link>
      <header className={styles.hero}>
        <div>
          <p className="eyebrow">Featured engineering project</p>
          <h1>StorePulse</h1>
          <p className={styles.subtitle}>Full-Stack Shopify Store Health Application</p>
          <p className={styles.lead}>A merchant-facing Shopify application that turns catalog health analysis into practical, merchant-controlled SEO and accessibility fixes inside Shopify Admin.</p>
          <ul className={styles.badges} aria-label="Technology stack">{["Shopify", "GraphQL Admin API", "React Router", "TypeScript", "Prisma", "SQLite", "Shopify Webhooks"].map(tech => <li key={tech}>{tech}</li>)}</ul>
          <p className={styles.status}><span /> Functional Development Build</p>
          <a className="btn btn-primary" href={source} target="_blank" rel="noopener noreferrer">View Source Code <Code2 size={18} aria-hidden="true" /><span className={styles.srOnly}> (opens in a new tab)</span></a>
        </div>
        <figure className={styles.identity}>
          <Image src="/storepulse/storepulse-dashboard.png" width={1918} height={820} sizes="(max-width: 720px) 100vw, 1180px" alt="StorePulse dashboard embedded in Shopify Admin, displaying a 78 out of 100 catalog health score and inventory, content, SEO, and accessibility findings" priority />
          <figcaption><strong>Store health inside Shopify Admin</strong><span>Actual StorePulse dashboard from the development store</span></figcaption>
        </figure>
      </header>

      <div className={styles.context}>
        <section aria-labelledby="problem"><p className="eyebrow">01 / The problem</p><h2 id="problem">Catalog issues hide in plain sight.</h2><p>Incomplete descriptions, missing custom SEO metadata, image accessibility gaps, and inventory risks are difficult to prioritize as a product catalog grows. Merchants need one actionable view rather than repeated manual checks.</p></section>
        <section aria-labelledby="solution"><p className="eyebrow">02 / The solution</p><h2 id="solution">Connect diagnosis to a verified fix.</h2><p>StorePulse retrieves real Shopify product data, calculates transparent health scores, and presents product-level evidence. Merchants can save selected SEO or alt-text edits through authenticated API operations, then review analysis recalculated from fresh Shopify data.</p></section>
      </div>

      <section className={styles.section} aria-labelledby="features"><p className="eyebrow">03 / Key features</p><h2 id="features">A practical merchant workspace.</h2><div className={styles.grid}>{features.map(([heading, copy], i) => <article className={styles.panel} key={heading}><span className={styles.number}>0{i + 1}</span><h3>{heading}</h3><p>{copy}</p></article>)}</div></section>

      <section className={styles.section} aria-labelledby="architecture"><p className="eyebrow">04 / Technical architecture</p><h2 id="architecture">Shopify remains the source of truth.</h2><p className={styles.intro}>The embedded interface uses React Router loaders and server actions. Catalog analysis, merchant writes, and event receipts have distinct responsibilities.</p><div className={styles.flows}>{flows.map(flow => <article className={styles.flow} key={flow.title}><h3>{flow.title}</h3><ol>{flow.steps.map(step => <li key={step}>{step}</li>)}</ol></article>)}</div><p className={styles.note}>Webhooks record activity metadata; they do not rescan the catalog or refresh an open dashboard. Navigation and manual refresh retrieve current Shopify data.</p></section>

      <section className={styles.section} aria-labelledby="engineering"><p className="eyebrow">05 / Engineering highlights</p><h2 id="engineering">Built around trustworthy results.</h2><div className={styles.grid}>{highlights.map(([heading, copy]) => <article className={styles.highlight} key={heading}><Check size={20} aria-hidden="true" /><div><h3>{heading}</h3><p>{copy}</p></div></article>)}</div><p className={styles.note}>Scans currently analyze up to 250 products, with full nested media and variant pagination. Scores are completeness heuristics, with coverage disclosed; they are not SEO rankings or accessibility certifications.</p></section>

      <section className={styles.development} aria-labelledby="development"><p className="eyebrow">06 / Development status</p><h2 id="development">Functional and tested in development.</h2><p>StorePulse has been implemented and tested against a Shopify development store. Production deployment and Shopify App Store publication are planned next steps; public merchant installation is not yet available.</p></section>

      <section className={styles.cta} aria-labelledby="source"><div><h2 id="source">Interested in the implementation?</h2><p>Explore the source code, scoring rules, remediation design, and synchronization documentation.</p></div><a className="btn btn-primary" href={source} target="_blank" rel="noopener noreferrer">View on GitHub <ArrowUpRight size={18} aria-hidden="true" /><span className={styles.srOnly}> (opens in a new tab)</span></a></section>
      <Link className={styles.back} href="/#projects"><ArrowLeft size={17} aria-hidden="true" /> Back to projects</Link>
    </main>
    <footer className={styles.footer}><Link className="brand" href="/#home"><span className="brand-mark">PA</span><span>Peter Aderinto</span></Link><p>Designed &amp; built for Peter Aderinto © 2026</p></footer>
  </>;
}
