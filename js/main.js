// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll indicator animation
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        if (scrollY > 100) {
            scrollIndicator.style.opacity = '0';
        } else {
            scrollIndicator.style.opacity = '1';
        }
    });
}

// Add parallax effect to hero section and background zoom
let ticking = false;

function updateBackgroundZoom() {
    const mainBgImage = document.querySelector('.main-bg-image');
    const mainBackground = document.querySelector('.main-background');
    const heroSection = document.querySelector('.hero-section');
    const section2 = document.querySelector('.section-2');
    const section3 = document.querySelector('.section-3');
    const section4 = document.querySelector('.section-4');
    const section5 = document.querySelector('.section-5');
    const heroContent = document.querySelector('.hero-content');
    const scrollY = window.scrollY;
    
    if (!mainBgImage || !mainBackground) return;
    
    // Calculate total scrollable height for sections 1-4
    const section1Height = heroSection ? heroSection.offsetHeight : 0;
    const section2Height = section2 ? section2.offsetHeight : 0;
    const section3Height = section3 ? section3.offsetHeight : 0;
    const section4Height = section4 ? section4.offsetHeight : 0;
    const totalHeight = section1Height + section2Height + section3Height + section4Height;
    
    // Keep background visible throughout entire page
    mainBackground.style.visibility = 'visible';
    
    // Calculate overall progress (0 to 1) across all 4 sections
    const progress = Math.min(scrollY / totalHeight, 1);
    
    // Start at 1x (100% - full product visible) in section 1, zoom to 2x at section 4
    const scaleValue = 1 + (progress * 1); // 1.0 → 2.0
    
    mainBgImage.style.transform = `scale(${scaleValue})`;
    
    // Background image clarity increase on scroll
    // Start with 0.3 opacity and 2px blur, end with 0.8 opacity and 0px blur
    const opacity = 0.3 + (progress * 0.5); // 0.3 → 0.8
    const blurAmount = 2 - (progress * 2); // 2px → 0px
    
    mainBgImage.style.opacity = opacity;
    mainBgImage.style.filter = `blur(${blurAmount}px)`;
    
    // Hero content parallax and fade
    if (heroContent && scrollY < section1Height) {
        heroContent.style.transform = `translateY(${scrollY * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrollY / section1Height);
    }
    
    ticking = false;
}

function requestTick() {
    if (!ticking) {
        window.requestAnimationFrame(updateBackgroundZoom);
        ticking = true;
    }
}

window.addEventListener('scroll', requestTick);

// Initial update
updateBackgroundZoom();

// Intersection Observer for section messages
const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe section messages
document.querySelectorAll('.section-message').forEach(message => {
    observer.observe(message);
});

// CTA Button interactions
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', () => {
        // Smooth scroll to section 2
        const section2 = document.querySelector('#section2');
        if (section2) {
            section2.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            if (navMenu.classList.contains('active')) {
                mobileMenuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });
}

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});