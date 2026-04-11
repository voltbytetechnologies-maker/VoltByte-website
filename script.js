// Mobile menu toggle
function toggleMenu() {
  document.getElementById('navMenu').classList.toggle('active');
}

// Close menu on link click
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navMenu').classList.remove('active');
  });
});

// Gallery filter
function filterGallery(category, btn) {
  document.querySelectorAll('.gallery-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');

  document.querySelectorAll('.gallery-item').forEach(item => {
    if (category === 'all' || item.dataset.category === category) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

// Scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Fetch current year from WorldTimeAPI and set in footer
(function setCurrentYear() {
  const yearEl = document.getElementById('currentYear');
  fetch('https://worldtimeapi.org/api/timezone/Asia/Kolkata')
    .then(res => res.json())
    .then(data => {
      yearEl.textContent = new Date(data.datetime).getFullYear();
    })
    .catch(() => {
      yearEl.textContent = new Date().getFullYear();
    });
})();

// Header background on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.background = 'rgba(10,26,58,0.98)';
  } else {
    header.style.background = 'var(--navy)';
  }
});
