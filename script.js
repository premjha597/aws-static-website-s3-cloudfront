/**
 * Prem Jha - Personal Portfolio Interactive Logic
 */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Menu Hamburger Toggle Logic
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // 2. Sticky Navbar Visual Shift during window scrolling
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.padding = '10px 0';
                navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
            } else {
                navbar.style.padding = '20px 0';
                navbar.style.boxShadow = 'none';
            }
        });
    }

    // 3. Scroll-to-Top Button Visibility Toggle
    const scrollTopBtn = document.getElementById('scrollToTop');
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                scrollTopBtn.style.display = 'block';
            } else {
                scrollTopBtn.style.display = 'none';
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 4. Advanced Scroll Reveal Engine using Intersection Observer API
    const revealElements = document.querySelectorAll('.scroll-reveal, .skill-card, .project-card');

    if ('IntersectionObserver' in window) {
        const revealOnScroll = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        });

        revealElements.forEach(element => {
            element.classList.add('scroll-reveal');
            revealOnScroll.observe(element);
        });
    } else {
        revealElements.forEach(element => {
            element.classList.add('scroll-reveal', 'active');
        });
    }
});