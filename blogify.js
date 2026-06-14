/* NAVBAR FUNCTIONALITY */

document.addEventListener('DOMContentLoaded', function () {
    initializeNavbar();
});

function initializeNavbar() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (!hamburger || !navMenu) return;

    // Toggle menu on hamburger click
    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (event) {
        const isClickInsideNavbar = document.querySelector('.navbar').contains(event.target);
        if (!isClickInsideNavbar && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Handle window resize
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Handle dropdown menus
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('.nav-link');
        if (link) {
            link.addEventListener('click', function (e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                }
            });
        }
    });
}

// NAVBAR STYLING ON SCROLL
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
    }
});

// STICKY NAVBAR BEHAVIOR

let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function () {
    const scrollTop = window.scrollY;

    // Add scrolled class for styling
    if (scrollTop > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScrollTop = scrollTop;
});


// ACTIVE LINK HIGHLIGHTING

function updateActiveLink() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');

        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Call on page load
updateActiveLink();

// SEARCH BAR FOCUS EFFECT
const searchBar = document.querySelector('.search-bar');
const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');

if (searchBar && searchInput) {
    searchInput.addEventListener('focus', function () {
        searchBar.style.borderColor = 'var(--primary-purple)';
        searchBar.style.background = 'rgba(255, 255, 255, 0.15)';
    });

    searchInput.addEventListener('blur', function () {
        searchBar.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        searchBar.style.background = 'rgba(255, 255, 255, 0.1)';
    });
}

// SUBSCRIBE BUTTON ANIMATION
const subscribeBtn = document.querySelector('.subscribe-btn');

if (subscribeBtn) {
    subscribeBtn.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-2px)';
    });

    subscribeBtn.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
    });
}

// RESPONSIVE BEHAVIOR
function handleResponsiveNavbar() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (window.innerWidth <= 768) {
        hamburger.style.display = 'flex';
        if (!navMenu.classList.contains('active')) {
            navMenu.style.display = 'none';
        }
    } else {
        hamburger.style.display = 'none';
        navMenu.style.display = 'flex';
    }
}

window.addEventListener('resize', debounce(handleResponsiveNavbar, 250));
handleResponsiveNavbar();

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// DROPDOWN MENU HANDLING
const dropdownLinks = document.querySelectorAll('.dropdown > .nav-link');

dropdownLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            const dropdown = this.closest('.dropdown');
            dropdown.classList.toggle('open');
        }
    });
});

// KEYBOARD NAVIGATION

document.addEventListener('keydown', function (e) {
    // ESC key closes menu
    if (e.key === 'Escape') {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ACCESSIBILITY IMPROVEMENTS
const navItems = document.querySelectorAll('.nav-link');

navItems.forEach((item, index) => {
    item.setAttribute('tabindex', index === 0 ? '0' : '0');
});

// LOGO CLICK NAVIGATION
const logo = document.querySelector('.logo');

if (logo) {
    logo.style.cursor = 'pointer';
    logo.addEventListener('click', function () {
        window.location.href = 'index.html';
    });

    // Add keyboard support
    logo.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            window.location.href = 'index.html';
        }
    });
}

// The Switch to Dark and Toggle mode
const darkModeToggle = document.getElementById('dark-mode-toggle');
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
}
if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            darkModeToggle.innerHTML = '<i class="bx bx-sun"></i>';
        } else {
            localStorage.setItem('darkMode', 'disabled');
            darkModeToggle.innerHTML = '<i class="bx bx-moon"></i>';
        }
    });
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.innerHTML = '<i class="bx bx-sun"></i>';
    }
}

// CONTACT FORM HANDLING
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We\'ll get back to you soon.');
        this.reset();
    });
}

// FAQ ACCORDION FUNCTIONALITY
const accordionHeaders = document.querySelectorAll('.accordion-header');
accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
        const item = this.closest('.accordion-item');
        item.classList.toggle('active');
    });
});

// NEWSLETTER SUBSCRIPTION
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for subscribing! You will receive our latest updates soon.');
        this.reset();
    });
}

// EXPANDABLE CONTENT (READ MORE DETAILS)
const expandBtns = document.querySelectorAll('.expand-btn');
expandBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const content = this.nextElementSibling; // the .expandable-content div
        if (content.style.display === 'block' || content.classList.contains('show')) {
            content.style.display = 'none';
            content.classList.remove('show');
            this.textContent = 'Read More Details';
            this.classList.remove('expanded');
            this.classList.add('collapsed');
        } else {
            content.style.display = 'block';
            content.classList.add('show');
            this.textContent = 'Hide Details';
            this.classList.remove('collapsed');
            this.classList.add('expanded');
        }
    });
});

// SEARCH BAR FUNCTIONALITY MOCK
const searchBtns = document.querySelectorAll('.search-btn');
const searchInputs = document.querySelectorAll('.search-input');

searchBtns.forEach((btn, index) => {
    const input = searchInputs[index];
    if (btn && input) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const query = input.value.trim();
            if (query) {
                alert(`Searching for: "${query}"...`);
                input.value = '';
            }
        });
        
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                btn.click();
            }
        });
    }
});

// PAGINATION INTERACTIVITY
const paginationBtns = document.querySelectorAll('.page-btn');
paginationBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        if (!this.classList.contains('active') && !this.classList.contains('next') && !this.textContent.includes('Prev') && !this.parentElement.tagName.toLowerCase() === 'a') {
            const siblings = this.parentElement.querySelectorAll('.page-btn');
            siblings.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        }
    });
});

// BACK TO TOP BUTTON
const backToTopBtn = document.getElementById('back-to-top');

if (backToTopBtn) {
    // Initial state
    backToTopBtn.style.display = window.scrollY > 300 ? 'flex' : 'none';
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'flex';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

