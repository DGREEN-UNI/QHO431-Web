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