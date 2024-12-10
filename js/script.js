// Toggle mobile menu
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.main_navigation .mobile-menu-toggle');
    const mobileMenu = document.querySelector('.main_navigation .mobile_navigation-items');
  
    toggleButton.addEventListener('click', function () {
      mobileMenu.classList.toggle('active');
    });
  });
    // scrolling
    window.addEventListener('scroll', function () {
        const navbar = document.querySelector('.main_navigation');
      
        if (window.scrollY > 0) {
          navbar.classList.add('main_navigation-scroll');
        } else {
          navbar.classList.remove('main_navigation-scroll');
        }
      });
  