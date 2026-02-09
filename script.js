
// ================= NAVBAR SCROLL EFFECT =================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  // Add 'scrolled' class when scrolling down
  if (currentScroll > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  
  lastScroll = currentScroll;
});

// ================= ACTIVE SECTION HIGHLIGHTING =================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function setActiveLink() {
  let currentSection = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    // Check if section is in viewport (with offset for navbar)
    if (window.pageYOffset >= (sectionTop - 100)) {
      currentSection = section.getAttribute('id');
    }
  });
  
  // Remove active class from all links
  navLinks.forEach(link => {
    link.classList.remove('active');
    
    // Add active class to current section link
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
}

// Run on scroll
window.addEventListener('scroll', setActiveLink);

// Run on page load
window.addEventListener('load', setActiveLink);

// ================= SMOOTH SCROLL ON CLICK =================
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      // Calculate offset for fixed navbar
      const navbarHeight = navbar.offsetHeight;
      const targetPosition = targetSection.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ================= HAMBURGER MENU TOGGLE =================
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
});

// Close menu when clicking on a link
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
  });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
  }
});

// ================= ABOUT SECTION TOGGLE =================
const aboutToggle = document.querySelector(".about-toggle");
const aboutWrapper = document.querySelector(".about-wrapper");

aboutToggle.addEventListener("click", () => {
  aboutWrapper.classList.toggle("active");

  if (aboutWrapper.classList.contains("active")) {
    aboutToggle.textContent = "Show less";
  } else {
    aboutToggle.textContent = "More about me";
  }
});

// ================= CONTACT FORM SUBMISSION =================
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for your message! This is a demo form.');
  this.reset();
});
