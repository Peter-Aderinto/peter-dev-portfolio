'use client';

import { Download, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = ["Home", "About", "Projects", "Experience", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("light-theme", light);
  }, [light]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <>
      <header className="navbar desktop-header">
        <a className="brand" href="#home" aria-label="Peter Aderinto home">
          <span className="brand-mark">PA</span><span>Peter Aderinto</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => <a key={link} href={`#${link.toLowerCase()}`}>{link}</a>)}
        </nav>
        <div className="nav-actions">
          <a className="resume-link magnetic" href="/ADERINTO_PETER_OLUWASEUN_RESUME.pdf" download="ADERINTO_PETER_OLUWASEUN_RESUME.pdf" aria-label="Download Peter Aderinto résumé"><Download /> Résumé</a>
          <button className="theme-btn" type="button" aria-label="Toggle theme" onClick={() => setLight((value) => !value)}>
            {light ? <Sun /> : <Moon />}
          </button>
        </div>
      </header>
      <header className="mobile-header">
        <a className="mobile-header-brand" href="#home" aria-label="Peter Aderinto home">
          <span className="brand-mark">PA</span>
          <span>Peter Aderinto</span>
        </a>
        <div className="mobile-header-actions">
          <a className="mobile-header-resume" href="/ADERINTO_PETER_OLUWASEUN_RESUME.pdf" download="ADERINTO_PETER_OLUWASEUN_RESUME.pdf" aria-label="Download Peter Aderinto résumé">
            <Download />
            <span>Résumé</span>
          </a>
          <button className="mobile-menu-toggle" type="button" aria-label="Open navigation drawer" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(true)}>
            <Menu />
          </button>
        </div>
      </header>
      <button className={`drawer-backdrop${open ? " open" : ""}`} type="button" aria-label="Close navigation drawer" onClick={() => setOpen(false)} />
      <aside className={`mobile-menu${open ? " open" : ""}`} id="mobile-navigation" aria-hidden={!open}>
        <div className="drawer-heading">
          <a className="brand" href="#home" onClick={() => setOpen(false)}>
            <span className="brand-mark">PA</span><span>Peter Aderinto</span>
          </a>
          <button className="drawer-close" type="button" aria-label="Close navigation drawer" onClick={() => setOpen(false)}><X /></button>
        </div>
        <nav aria-label="Mobile navigation">
          {links.map((link, index) => <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}><span>0{index + 1}</span>{link}</a>)}
        </nav>
        <a className="mobile-resume-link" href="/ADERINTO_PETER_OLUWASEUN_RESUME.pdf" download="ADERINTO_PETER_OLUWASEUN_RESUME.pdf" onClick={() => setOpen(false)}><Download /> Download Resume</a>
      </aside>
    </>
  );
}
