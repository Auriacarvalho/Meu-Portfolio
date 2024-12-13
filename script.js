// Suavizar a rolagem entre as seções
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Animações de rolagem
window.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.project-card');
  
  elements.forEach(element => {
      if (isInViewport(element)) {
          element.classList.add('animate');
      }
  });
});

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (rect.top >= 0 && rect.left >= 0 && rect.bottom <= window.innerHeight && rect.right <= window.innerWidth);
}
