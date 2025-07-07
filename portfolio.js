// Typing effect for home section
const typingElement = document.getElementById('typing');
const typingStrings = [
    "Hi, I'm Your Name.",
    "A Premium Web Developer.",
    "I Build Professional Experiences."
];
let typingIndex = 0, charIndex = 0, isDeleting = false;

function type() {
    const current = typingStrings[typingIndex];
    if (isDeleting) {
        typingElement.textContent = current.substring(0, charIndex--);
        if (charIndex < 0) {
            isDeleting = false;
            typingIndex = (typingIndex + 1) % typingStrings.length;
            setTimeout(type, 600);
        } else {
            setTimeout(type, 40);
        }
    } else {
        typingElement.textContent = current.substring(0, charIndex++);
        if (charIndex > current.length) {
            isDeleting = true;
            setTimeout(type, 1200);
        } else {
            setTimeout(type, 80);
        }
    }
}
if (typingElement) type();

// Tilt effect for skill boxes
document.querySelectorAll('.skill-box.tilt').forEach(box => {
    box.addEventListener('mousemove', (e) => {
        const rect = box.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        box.style.transform = `rotateY(${x/15}deg) rotateX(${-y/15}deg) scale(1.05)`;
    });
    box.addEventListener('mouseleave', () => {
        box.style.transform = '';
    });
});

// Animate-in for project, experience, and contact form
function animateOnScroll() {
    document.querySelectorAll('.animate-in').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
            el.classList.add('animated');
        }
    });
}
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
    // Animate contact form
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        setTimeout(() => contactForm.classList.add('animate-in'), 400);
    }
});

// Optional: Prevent form submission (demo)
document.querySelector('.contact-form')?.addEventListener('submit', e => {
    e.preventDefault();
    alert('Thank you for reaching out! (Demo only)');
});

// Dark mode toggle logic
const darkToggle = document.getElementById('darkModeToggle');
const root = document.body;
const DARK_KEY = 'portfolio-dark-mode';

function setDarkMode(on) {
    if (on) {
        root.classList.add('dark-mode');
        darkToggle.querySelector('.toggle-icon').textContent = '☀️';
    } else {
        root.classList.remove('dark-mode');
        darkToggle.querySelector('.toggle-icon').textContent = '🌙';
    }
    localStorage.setItem(DARK_KEY, on ? '1' : '0');
}

darkToggle.addEventListener('click', () => {
    setDarkMode(!root.classList.contains('dark-mode'));
});

// On load: set dark mode from localStorage or system preference
(function() {
    const saved = localStorage.getItem(DARK_KEY);
    if (saved === '1' || (saved === null && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        setDarkMode(true);
    } else {
        setDarkMode(false);
    }
})();
