import './styles/main.scss';
import { gsap } from 'gsap';

const sections = Array.from(document.querySelectorAll('.story'));
const imageA = document.getElementById('image-a');
const imageB = document.getElementById('image-b');
const hero = document.querySelector('.hero');

let activeLayer = 'a';
let currentImageUrl = '';

function setupHeroScroll() {
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const heroHeight = hero.offsetHeight;

    // Calcula l'opacitat basada en el scroll (desapareix en els primers 200px)
    const opacity = Math.max(0, 1 - (scrollY / 200));
    const translateY = scrollY * 0.5; // parallax subtil

    hero.style.opacity = opacity;
    hero.style.transform = `translateY(${translateY}px)`;

    // Desactiva pointer-events quan està completament amagat
    if (opacity <= 0) {
      hero.style.pointerEvents = 'none';
    } else {
      hero.style.pointerEvents = 'auto';
    }

    lastScroll = scrollY;
  });
}

function setInitialImage() {
  if (sections.length > 0) {
    const firstImage = sections[0].getAttribute('data-image');
    imageA.src = firstImage;
    imageA.style.opacity = 1;
    imageB.style.opacity = 0;
    currentImageUrl = firstImage;
  }
}

function swapImage(url) {
  if (!url || currentImageUrl === url) return;

  const incoming = activeLayer === 'a' ? imageB : imageA;
  const outgoing = activeLayer === 'a' ? imageA : imageB;

  incoming.src = url;
  incoming.style.opacity = 0;

  gsap.to(incoming, { opacity: 1, duration: 0.8, ease: 'power2.out' });
  gsap.to(outgoing, { opacity: 0, duration: 0.8, ease: 'power2.out' });

  activeLayer = activeLayer === 'a' ? 'b' : 'a';
  currentImageUrl = url;
}

function setupObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
        const url = entry.target.getAttribute('data-image');
        swapImage(url);
      }
    });
  }, { threshold: [0.6] });

  sections.forEach(sec => observer.observe(sec));
}

setInitialImage();
setupHeroScroll();
setupObserver();
