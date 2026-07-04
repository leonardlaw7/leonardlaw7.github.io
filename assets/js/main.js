// ============================================================
// Leonard Law Portfolio — main.js
// Three responsibilities: mobile nav toggle, active nav links
// ============================================================

// 1. Mobile Nav Toggle
// ============================================================
const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  // Close nav when a link is clicked (good UX on mobile)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// 2. Active Nav Link on Scroll (IntersectionObserver)
// Highlights the nav link for whichever section is centred in the viewport.
// ============================================================
const sections   = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

if (sections.length && navAnchors.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navAnchors.forEach(a => a.classList.remove('active'));
        const activeLink = document.querySelector(
          `.nav-links a[href="#${entry.target.id}"]`
        );
        if (activeLink) activeLink.classList.add('active');
      }
    });
  }, {
    // Only trigger when the section occupies the middle band of the viewport.
    // This prevents rapid flickering between sections as you scroll.
    rootMargin: '-40% 0px -55% 0px'
  });

  sections.forEach(section => observer.observe(section));
}

// 3. Image Lightbox
// Click a [data-lightbox-trigger] to view its image full-size in an overlay.
// ============================================================
const lightbox      = document.getElementById('lightbox');
const lightboxImage = lightbox ? lightbox.querySelector('.lightbox-image') : null;
const lightboxClose = lightbox ? lightbox.querySelector('.lightbox-close') : null;
const lightboxTriggers = document.querySelectorAll('[data-lightbox-trigger]');

function openLightbox(src, alt) {
  if (!lightbox || !lightboxImage) return;
  lightboxImage.src = src;
  lightboxImage.alt = alt || '';
  lightbox.classList.add('is-open');
  lightbox.setAttribute('aria-hidden', 'false');
}

function closeLightbox() {
  if (!lightbox || !lightboxImage) return;
  lightbox.classList.remove('is-open');
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxImage.src = '';
}

lightboxTriggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    const img = trigger.querySelector('img');
    if (img) openLightbox(img.src, img.alt);
  });
});

if (lightboxClose) {
  lightboxClose.addEventListener('click', closeLightbox);
}

if (lightbox) {
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});
