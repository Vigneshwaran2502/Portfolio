document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Hamburger animation
            const bars = mobileMenu.querySelectorAll('.bar');
            bars.forEach(bar => {
                // Simple toggle for visual feedback could occur here via class
                // For now, the 'active' class on navLinks brings the menu in.
            });
        });
    }

    // Close menu when clicking a link
    const navItems = document.querySelectorAll('.nav-link');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
             if (navLinks.classList.contains('active')) {
                 navLinks.classList.remove('active');
             }
        });
    });
});
