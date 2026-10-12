import { ArrowUp } from "lucide-react";

export default function Footer() {
  return <footer>
    <div className="footer-main"><a className="brand" href="#home"><span className="brand-mark">PA</span><span>Peter Aderinto</span></a>
      <p>Building custom Shopify experiences and full-stack web applications.</p>
      <div className="footer-links"><a href="#about">About</a><a href="#projects">Projects</a><a href="#experience">Experience</a><a href="#contact">Contact</a></div>
    </div>
    <div className="footer-bottom"><span>Designed & built for Peter Aderinto © 2026</span><a href="#home">Back to top <ArrowUp /></a></div>
  </footer>;
}
