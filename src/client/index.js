import './styles/main.scss';
import { gsap } from 'gsap';

const sections = Array.from(document.querySelectorAll('.story'));
const imageA = document.getElementById('image-a');
const imageB = document.getElementById('image-b');

let activeLayer = 'a';

function setInitialImage() {
  if (sections.length > 0) {
    const firstImage = sections[0].getAttribute('data-image');
    imageA.src = firstImage;
    imageA.style.opacity = 1;
    imageB.style.opacity = 0;
  }
}

function swapImage(url) {
  const incoming = activeLayer === 'a' ? imageB : imageA;
  const outgoing = activeLayer === 'a' ? imageA : imageB;

  if (incoming.src === url) return;

  incoming.src = url;
  incoming.style.opacity = 0;

  gsap.to(incoming, { opacity: 1, duration: 0.8, ease: 'power2.out' });
  gsap.to(outgoing, { opacity: 0, duration: 0.8, ease: 'power2.out' });

  activeLayer = activeLayer === 'a' ? 'b' : 'a';
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
setupObserver();
