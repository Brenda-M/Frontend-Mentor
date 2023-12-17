const hamburgerMenu = document.getElementById('hamburger-menu');

const mobileMenuContainer = document.getElementById('mobile-menu-container');

  hamburgerMenu.addEventListener('click', function () {
    mobileMenuContainer.style.display =
      mobileMenuContainer.style.display === 'block' ? 'none' : 'block';
  });