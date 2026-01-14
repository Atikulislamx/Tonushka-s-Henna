/*=============== SHOW/HIDE MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// Show menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// Hide menu
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*=============== REMOVE MENU ON LINK CLICK ===============*/
const navLinks = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLinks.forEach(link => link.addEventListener('click', linkAction));

/*=============== CHANGE HEADER BACKGROUND ON SCROLL ===============*/
function scrollHeader() {
    const header = document.getElementById('header');
    if (this.scrollY >= 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}

window.addEventListener('scroll', scrollHeader);

/*=============== ACTIVE LINK ON SCROLL ===============*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        const navLink = document.querySelector('.nav__link[href*=' + sectionId + ']');

        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active-link');
            } else {
                navLink.classList.remove('active-link');
            }
        }
    });
}

window.addEventListener('scroll', scrollActive);

/*=============== SHOW SCROLL TO TOP BUTTON ===============*/
function scrollTop() {
    const scrollTopBtn = document.getElementById('scroll-top');
    if (this.scrollY >= 400) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
}

window.addEventListener('scroll', scrollTop);

// Scroll to top on button click
const scrollTopBtn = document.getElementById('scroll-top');
if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/*=============== CONTACT FORM HANDLING ===============*/
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const service = formData.get('service');
        const date = formData.get('date');
        const message = formData.get('message');

        // Basic validation
        if (!name || !email || !phone || !service || !date) {
            showMessage('Please fill in all required fields.', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showMessage('Please enter a valid email address.', 'error');
            return;
        }

        // Phone validation (basic)
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        if (!phoneRegex.test(phone)) {
            showMessage('Please enter a valid phone number.', 'error');
            return;
        }

        // Date validation (not in the past)
        const selectedDate = new Date(date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        if (selectedDate < today) {
            showMessage('Please select a future date.', 'error');
            return;
        }

        // Simulate form submission
        // In a real application, you would send this data to a server
        setTimeout(() => {
            showMessage(
                `Thank you, ${name}! Your booking request for ${service} has been received. We'll contact you at ${email} within 24 hours to confirm your appointment.`,
                'success'
            );
            contactForm.reset();
        }, 500);
    });
}

function showMessage(text, type) {
    formMessage.textContent = text;
    formMessage.className = `form__message ${type}`;
    
    // Auto-hide message after 8 seconds
    setTimeout(() => {
        formMessage.className = 'form__message';
    }, 8000);
}

/*=============== SMOOTH SCROLLING FOR ALL LINKS ===============*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

/*=============== GALLERY INTERACTION ===============*/
const galleryItems = document.querySelectorAll('.gallery__item');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        // Add a subtle scale animation on click
        item.style.transform = 'scale(0.95)';
        setTimeout(() => {
            item.style.transform = '';
        }, 200);
    });
});

/*=============== INTERSECTION OBSERVER FOR ANIMATIONS ===============*/
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll('.service__card, .gallery__item, .feature__item');
animateElements.forEach(el => observer.observe(el));

/*=============== SET MINIMUM DATE FOR BOOKING ===============*/
const dateInput = document.getElementById('date');
if (dateInput) {
    // Set minimum date to tomorrow
    const tomorrow = new Date(Date.now() + 24 * 60 * 60 * 1000);
    const minDate = tomorrow.toISOString().split('T')[0];
    dateInput.setAttribute('min', minDate);
}

/*=============== CONSOLE WELCOME MESSAGE ===============*/
console.log(
    '%c🌿 Welcome to Tonushka\'s Henna! 🌿',
    'color: #8B4513; font-size: 20px; font-weight: bold; font-family: serif;'
);
console.log(
    '%cExquisite Mehendi Artistry for Your Special Moments',
    'color: #5D2E0F; font-size: 14px; font-family: sans-serif;'
);
