// Toggle mobile menu
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.main_navigation .mobile-menu-toggle');
    const mobileMenu = document.querySelector('.main_navigation .mobile_navigation-items');
  
    toggleButton.addEventListener('click', function () {
      mobileMenu.classList.toggle('active');
    });
  });
  