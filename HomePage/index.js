// Mobile menu functionality
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    // Toggle mobile menu
    navLinks.classList.toggle('active');
    
    // Burger animation
    burger.classList.toggle('toggle');
});

// Highlight current page in navigation
const currentPage = location.pathname.split('/').slice(-1)[0];
const navItems = document.querySelectorAll('.nav-link');

navItems.forEach(item => {
    if (item.getAttribute('href') === currentPage) {
        item.classList.add('active');
    }
});

// Add to your existing JavaScript or create a new file
document.addEventListener('DOMContentLoaded', function() {
    const flipCards = document.querySelectorAll('.flip-card');
    
    // Add click event for mobile devices
    if (window.innerWidth <= 768) {
        flipCards.forEach(card => {
            card.addEventListener('click', function() {
                this.classList.toggle('active');
            });
        });
    }
    
    // Optional: Auto-rotate back when mouse leaves (desktop only)
    if (window.innerWidth > 768) {
        flipCards.forEach(card => {
            card.addEventListener('mouseleave', function() {
                this.querySelector('.flip-card-inner').style.transform = 'rotateY(0)';
            });
        });
    }
});