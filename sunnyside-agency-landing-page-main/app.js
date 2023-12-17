document.addEventListener("DOMContentLoaded", function() {
  
  const hamburgerMenu = document.getElementById('hamburger-menu');

const mobileMenuContainer = document.getElementById('mobile-menu-container');
const desktopNav = document.querySelector('.nav-items');

  hamburgerMenu.addEventListener('click', function () {
    mobileMenuContainer.style.display =
      mobileMenuContainer.style.display === 'block' ? 'none' : 'block';
  });

  function handleScreenSizeChange() {
    if (window.matchMedia("(max-width: 768px)").matches) {
      desktopNav.style.display = "none";
    } else {
      mobileMenuContainer.style.display = "none";
    }
  }


  handleScreenSizeChange();

  window.matchMedia("(max-width: 768px)").addListener(handleScreenSizeChange);

})