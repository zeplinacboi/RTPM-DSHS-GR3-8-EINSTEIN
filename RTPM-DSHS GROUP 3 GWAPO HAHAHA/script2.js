// Navbar scroll effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('scrolled', window.scrollY > 50);
});

// Back to top button
const backToTop = document.getElementById('backToTop');
backToTop.addEventListener('click', () => {
    window.scrollTo({top:0, behavior:'smooth'});
});
window.addEventListener('scroll', () => {
    backToTop.style.opacity = window.scrollY > 300 ? '1' : '0';
});

// Scroll reveal
const scrollElements = document.querySelectorAll('.scroll-reveal');
const elementInView = (el, dividend = 1) => el.getBoundingClientRect().top <= window.innerHeight/dividend;
const displayScrollElement = (el) => el.classList.add('scrolled-in');
const hideScrollElement = (el) => el.classList.remove('scrolled-in');
const handleScrollAnimation = () => scrollElements.forEach(el => elementInView(el,1.25) ? displayScrollElement(el) : hideScrollElement(el));
window.addEventListener('scroll', handleScrollAnimation);
handleScrollAnimation(); // initial