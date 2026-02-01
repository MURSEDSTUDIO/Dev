// 1. Initialize Icons (Lucide library)
lucide.createIcons();

// 2. Simple Scroll Animation (Wow Factor ke liye)
// Jab bhi koi section screen par aayega, wo thoda upar uthega
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

// Animations ke liye elements select karna
const hiddenElements = document.querySelectorAll('.hero-text, .profile-card, .about-card, .skill-item, .blog-card');

// CSS se initial state set karna (Hidden)
hiddenElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "all 0.8s ease-out";
    observer.observe(el);
});

// 3. Search Bar Focus Effect (Optional)
const searchInput = document.querySelector('.search-box input');
const searchIcon = document.querySelector('.search-icon');

if(searchInput) {
    searchInput.addEventListener('focus', () => {
        searchIcon.style.color = '#00F0FF';
    });
    searchInput.addEventListener('blur', () => {
        searchIcon.style.color = 'grey';
    });
}

