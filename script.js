// Smooth scroll navigation + active link switching
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const targetID = link.getAttribute('href');
    document.querySelector(targetID).scrollIntoView({ behavior: 'smooth' });

    // Update active link
    document.querySelectorAll('nav ul li a').forEach(a => a.classList.remove('active'));
    link.classList.add('active');

    // Close nav on mobile after click
    if(window.innerWidth <= 768){
      navLinks.classList.remove('open');
    }
  });
});

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Scroll reveal animation for sections on scroll
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      return;
    } else {
      entry.target.style.animationPlayState = 'running';
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => {
  fader.style.animationPlayState = 'paused';
  appearOnScroll.observe(fader);
});
