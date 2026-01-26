document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");
    if (loader) loader.classList.add("hide");
});

const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu');
    });
}

document.querySelectorAll('.nav-menu .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('show-menu')) {
            navMenu.classList.remove('show-menu');
        }
    });
});

/* Navbar scroll effect */
const navbar = document.querySelector(".navbar");
let lastState = false;

function onScroll() {
    if (!navbar) return;
    const shouldBeScrolled = window.scrollY > 20;
    if (shouldBeScrolled !== lastState) {
        lastState = shouldBeScrolled;
        navbar.classList.toggle("scrolled", shouldBeScrolled);
    }
}
window.addEventListener("scroll", onScroll, { passive: true });

/* Input focus animation */
document.querySelectorAll('.input').forEach(input => {
    input.addEventListener('focus', () => input.parentNode.classList.add('focus'));
    input.addEventListener('blur', () => {
        if (input.value === "") input.parentNode.classList.remove('focus');
    });
});
