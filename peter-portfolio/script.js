
lucide.createIcons();

const preloader = document.getElementById("preloader");
window.addEventListener("load", () => {
  setTimeout(() => preloader.classList.add("hidden"), 650);
});

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

mobileMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => mobileMenu.classList.remove("open"));
});

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;
    projectCards.forEach((card, index) => {
      const categories = card.dataset.category.split(" ");
      const visible = filter === "all" || categories.includes(filter);
      if (visible) {
        card.classList.remove("hidden");
        card.animate(
          [
            { opacity: 0, transform: "translateY(18px) scale(.97)" },
            { opacity: 1, transform: "translateY(0) scale(1)" }
          ],
          { duration: 430, delay: index * 55, easing: "cubic-bezier(.2,.8,.2,1)" }
        );
      } else {
        card.classList.add("hidden");
      }
    });
  });
});

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add("visible"), index * 45);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

const glow = document.getElementById("cursorGlow");
window.addEventListener("mousemove", event => {
  glow.style.left = event.clientX + "px";
  glow.style.top = event.clientY + "px";
});

const progress = document.getElementById("scrollProgress");
window.addEventListener("scroll", () => {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const percent = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
  progress.style.width = percent + "%";
});

// Spotlight reaction
document.querySelectorAll(".spotlight-card").forEach(card => {
  card.addEventListener("mousemove", event => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
    card.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
  });
});

// 3D tilt
document.querySelectorAll("[data-tilt]").forEach(card => {
  card.addEventListener("mousemove", event => {
    if (window.innerWidth < 900) return;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - .5;
    const y = (event.clientY - rect.top) / rect.height - .5;
    const strength = card.classList.contains("hero-visual") ? 4 : 2.2;
    card.style.transform = `perspective(1000px) rotateX(${-y * strength}deg) rotateY(${x * strength}deg) translateY(-3px)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});

// Magnetic buttons
document.querySelectorAll(".magnetic").forEach(button => {
  button.addEventListener("mousemove", event => {
    if (window.innerWidth < 800) return;
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    button.style.transform = `translate(${x * .13}px, ${y * .13}px)`;
  });
  button.addEventListener("mouseleave", () => {
    button.style.transform = "";
  });
});

// Animated counters
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const counter = entry.target;
    const target = Number(counter.dataset.target);
    const duration = 1200;
    const start = performance.now();

    function update(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      counter.textContent = Math.floor(target * eased);
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
    counterObserver.unobserve(counter);
  });
}, { threshold: .7 });

document.querySelectorAll(".counter").forEach(counter => counterObserver.observe(counter));

// Particle canvas
const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");
let particles = [];
let pointer = { x: -1000, y: -1000 };

function resizeCanvas() {
  canvas.width = window.innerWidth * devicePixelRatio;
  canvas.height = window.innerHeight * devicePixelRatio;
  canvas.style.width = window.innerWidth + "px";
  canvas.style.height = window.innerHeight + "px";
  ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);

  const count = Math.min(70, Math.floor(window.innerWidth / 22));
  particles = Array.from({ length: count }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    vx: (Math.random() - .5) * .18,
    vy: (Math.random() - .5) * .18,
    r: Math.random() * 1.4 + .45
  }));
}

function drawParticles() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  particles.forEach((p, i) => {
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0 || p.x > window.innerWidth) p.vx *= -1;
    if (p.y < 0 || p.y > window.innerHeight) p.vy *= -1;

    const dx = p.x - pointer.x;
    const dy = p.y - pointer.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 110 && dist > 0) {
      p.x += (dx / dist) * .55;
      p.y += (dy / dist) * .55;
    }

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(183,243,74,.34)";
    ctx.fill();

    for (let j = i + 1; j < particles.length; j++) {
      const q = particles[j];
      const lx = p.x - q.x;
      const ly = p.y - q.y;
      const lineDist = Math.sqrt(lx * lx + ly * ly);
      if (lineDist < 105) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(q.x, q.y);
        ctx.strokeStyle = `rgba(183,243,74,${(1 - lineDist / 105) * .08})`;
        ctx.stroke();
      }
    }
  });

  requestAnimationFrame(drawParticles);
}

window.addEventListener("mousemove", event => {
  pointer.x = event.clientX;
  pointer.y = event.clientY;
});
window.addEventListener("mouseleave", () => {
  pointer.x = -1000;
  pointer.y = -1000;
});
window.addEventListener("resize", resizeCanvas);
resizeCanvas();
drawParticles();

function showFormMessage() {
  const message = document.getElementById("formMessage");
  message.style.display = "block";
}
