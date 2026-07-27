import About from "@/components/About";
import Contact from "@/components/Contact";
import DesignShowcase from "@/components/DesignShowcase";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import InteractiveEffects from "@/components/InteractiveEffects";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import TechMarquee from "@/components/TechMarquee";

export default function Home() {
  return <>
    <InteractiveEffects />
    <Navbar />
    <main>
      <Hero />
      <TechMarquee />
      <About />
      <Projects />
      <DesignShowcase />
      <Experience />
      <Contact />
    </main>
    <Footer />
  </>;
}
