// Toggle mobile menu
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');
  
    toggleButton.addEventListener('click', function () {
      mobileMenu.classList.toggle('active');
    });
  });
  