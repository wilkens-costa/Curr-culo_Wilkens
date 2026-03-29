/**
 * Wilkens Costa – Currículo Profissional
 * main.js
 */

// ── Lucide Icons ─────────────────────────────
if (typeof lucide !== 'undefined') {
  lucide.createIcons();
}

// ── Scroll-triggered animations ──────────────
// Cards start paused, animate in when they enter the viewport
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.slide-up');

  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );

  elements.forEach((el) => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
  });
});
