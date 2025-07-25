// Typing animation for the main title
const typedTitle = document.getElementById('typed-title');
const titles = [
  'Data Scientist',
  'SQL Developer',
  'AI & ML Enthusiast'
];
let titleIndex = 0, charIndex = 0, isDeleting = false;
function typeTitle() {
  const current = titles[titleIndex];
  if (isDeleting) {
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
      setTimeout(typeTitle, 500);
      return;
    }
  } else {
    charIndex++;
    if (charIndex === current.length) {
      isDeleting = true;
      setTimeout(typeTitle, 1200);
      return;
    }
  }
  typedTitle.textContent =
    titles.slice(0, titleIndex).join(' | ') +
    (titleIndex > 0 ? ' | ' : '') +
    current.substring(0, charIndex) +
    (charIndex === current.length && !isDeleting ? ' |' : '');
  setTimeout(typeTitle, isDeleting ? 40 : 90);
}
typeTitle();

// Smooth scroll for nav links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Scroll-to-top button
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  scrollTopBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
});
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Card hover animation (optional, for extra polish)
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', () => card.classList.add('hovered'));
  card.addEventListener('mouseleave', () => card.classList.remove('hovered'));
});
