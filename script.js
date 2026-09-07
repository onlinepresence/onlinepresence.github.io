// Initialize Lucide icons
lucide.createIcons();

// ===== THEME TOGGLE =====
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// ===== SKILL CARDS COLLAPSE / EXPAND =====
function toggleSkills(btn) {
    const group = btn.closest('.skill-group');
    const list = group.querySelector('.skill-list');
    const isExpanded = btn.classList.contains('expanded');

    if (isExpanded) {
        // Collapse: animate pills out
        const pills = list.querySelectorAll('.skill-pill.more');
        pills.forEach((pill, i) => {
            pill.style.transition = `opacity 0.2s ease ${i * 30}ms, transform 0.2s ease ${i * 30}ms`;
            pill.style.opacity = '0';
            pill.style.transform = 'scale(0.9) translateY(-4px)';
        });
        setTimeout(() => {
            list.classList.add('collapsed');
            btn.classList.remove('expanded');
            const count = list.querySelectorAll('.skill-pill.more').length;
            btn.querySelector('span').textContent = `Show ${count} more`;
            btn.querySelector('i').style.transform = '';
        }, pills.length * 30 + 200);
    } else {
        // Expand: remove hidden class then animate pills in
        list.classList.remove('collapsed');
        const pills = list.querySelectorAll('.skill-pill.more');
        pills.forEach((pill, i) => {
            pill.style.opacity = '0';
            pill.style.transform = 'scale(0.9) translateY(-4px)';
        });
        requestAnimationFrame(() => {
            pills.forEach((pill, i) => {
                pill.style.transition = `opacity 0.25s ease ${i * 40}ms, transform 0.25s ease ${i * 40}ms`;
                pill.style.opacity = '1';
                pill.style.transform = 'scale(1) translateY(0)';
            });
        });
        btn.classList.add('expanded');
        btn.querySelector('span').textContent = 'Show less';
        btn.querySelector('i').style.transform = 'rotate(180deg)';
    }
}

// Load saved theme on page load
(function() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
})();

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== MOBILE NAVIGATION =====
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = navToggle.querySelector('i');
    const isOpen = navLinks.classList.contains('active');
    icon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
    lucide.createIcons();
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = navToggle.querySelector('i');
        icon.setAttribute('data-lucide', 'menu');
        lucide.createIcons();
    });
});

// ===== SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for fade-in animation
document.querySelectorAll('.section-header, .timeline-item, .project-card, .skill-group, .activity-card, .info-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add animation class
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// ===== ACTIVE NAV HIGHLIGHTING =====
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
});

// ===== CONTACT FORM HANDLING =====
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;

        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>Sending...</span>';

        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                submitBtn.innerHTML = '<span>Message Sent!</span><i data-lucide="check"></i>';
                lucide.createIcons();
                contactForm.reset();

                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalText;
                }, 3000);
            } else {
                throw new Error('Submission failed');
            }
        } catch (error) {
            submitBtn.innerHTML = '<span>Failed to Send</span>';
            submitBtn.disabled = false;

            setTimeout(() => {
                submitBtn.innerHTML = originalText;
            }, 3000);
        }
    });
}

// ===== PERFORMANCE: RequestAnimationFrame for scroll =====
let ticking = false;

function updateOnScroll() {
    // Scroll-based animations can be added here
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(updateOnScroll);
        ticking = true;
    }
});