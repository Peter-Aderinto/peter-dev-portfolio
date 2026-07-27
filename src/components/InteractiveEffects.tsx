'use client';

import { useEffect, useRef, useState } from "react";

type Particle = { x: number; y: number; vx: number; vy: number; r: number };

export default function InteractiveEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadTimer = window.setTimeout(() => setLoaded(true), 650);
    const glow = glowRef.current;
    const progress = progressRef.current;
    const canvas = canvasRef.current;
    if (!canvas) return () => window.clearTimeout(loadTimer);
    const ctx = canvas.getContext("2d");
    if (!ctx) return () => window.clearTimeout(loadTimer);

    let particles: Particle[] = [];
    let frame = 0;
    const pointer = { x: -1000, y: -1000 };

    const onMove = (event: MouseEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      if (glow) {
        glow.style.left = `${event.clientX}px`;
        glow.style.top = `${event.clientY}px`;
      }
    };
    const onLeave = () => {
      pointer.x = -1000;
      pointer.y = -1000;
    };
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progress) progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
    };
    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * ratio;
      canvas.height = window.innerHeight * ratio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      const count = Math.min(70, Math.floor(window.innerWidth / 22));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: Math.random() * 1.4 + 0.45,
      }));
    };
    const draw = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        if (particle.x < 0 || particle.x > window.innerWidth) particle.vx *= -1;
        if (particle.y < 0 || particle.y > window.innerHeight) particle.vy *= -1;
        const dx = particle.x - pointer.x;
        const dy = particle.y - pointer.y;
        const distance = Math.hypot(dx, dy);
        if (distance < 110 && distance > 0) {
          particle.x += (dx / distance) * 0.55;
          particle.y += (dy / distance) * 0.55;
        }
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(183,243,74,.34)";
        ctx.fill();
        for (let next = index + 1; next < particles.length; next += 1) {
          const other = particles[next];
          const lineDistance = Math.hypot(particle.x - other.x, particle.y - other.y);
          if (lineDistance < 105) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(183,243,74,${(1 - lineDistance / 105) * 0.08})`;
            ctx.stroke();
          }
        }
      });
      frame = requestAnimationFrame(draw);
    };

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          window.setTimeout(() => entry.target.classList.add("visible"), index * 45);
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

    const cleanups: (() => void)[] = [];
    document.querySelectorAll<HTMLElement>(".spotlight-card").forEach((card) => {
      const handler = (event: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
        card.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
      };
      card.addEventListener("mousemove", handler);
      cleanups.push(() => card.removeEventListener("mousemove", handler));
    });
    document.querySelectorAll<HTMLElement>("[data-tilt]").forEach((card) => {
      const move = (event: MouseEvent) => {
        if (window.innerWidth < 900) return;
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        const strength = card.classList.contains("hero-visual") ? 4 : 2.2;
        card.style.transform = `perspective(1000px) rotateX(${-y * strength}deg) rotateY(${x * strength}deg) translateY(-3px)`;
      };
      const leave = () => { card.style.transform = ""; };
      card.addEventListener("mousemove", move);
      card.addEventListener("mouseleave", leave);
      cleanups.push(() => {
        card.removeEventListener("mousemove", move);
        card.removeEventListener("mouseleave", leave);
      });
    });
    document.querySelectorAll<HTMLElement>(".magnetic").forEach((button) => {
      const move = (event: MouseEvent) => {
        if (window.innerWidth < 800) return;
        const rect = button.getBoundingClientRect();
        button.style.transform = `translate(${(event.clientX - rect.left - rect.width / 2) * 0.13}px, ${(event.clientY - rect.top - rect.height / 2) * 0.13}px)`;
      };
      const leave = () => { button.style.transform = ""; };
      button.addEventListener("mousemove", move);
      button.addEventListener("mouseleave", leave);
      cleanups.push(() => {
        button.removeEventListener("mousemove", move);
        button.removeEventListener("mouseleave", leave);
      });
    });

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", resize);
    resize();
    draw();
    return () => {
      window.clearTimeout(loadTimer);
      cancelAnimationFrame(frame);
      revealObserver.disconnect();
      cleanups.forEach((cleanup) => cleanup());
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <div className={`preloader${loaded ? " hidden" : ""}`}>
        <div className="preloader-inner">
          <div className="loader-logo">PA</div>
          <div className="loader-line"><span /></div>
          <p>Crafting the experience</p>
        </div>
      </div>
      <div className="scroll-progress" ref={progressRef} />
      <canvas className="particle-canvas" ref={canvasRef} aria-hidden="true" />
      <div className="noise" />
      <div className="cursor-glow" ref={glowRef} />
    </>
  );
}
