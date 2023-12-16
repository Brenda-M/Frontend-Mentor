document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const cancelBtn = document.querySelector(".cancel-button");
  const desktopNav = document.querySelector(".desktop-nav-items");
  const mobileNav = document.querySelector(".mobile-nav");
  
  hamburgerMenu.addEventListener("click", function () {
    desktopNav.style.display = "none";
    mobileNav.style.display = "flex";
  });
  
  cancelBtn.addEventListener("click", function () {
    mobileNav.style.display = "none";
  });



  
  const slides = document.querySelectorAll(".slides");
  console.log(slides)

  let currentSlideIndex = 0;

  showSlide(currentSlideIndex);

  function showSlide(index) {
    slides.forEach((slide) => {
      slide.style.display = "none";
      slide.classList.remove("active");
    });

    slides[index].style.display = "grid";
    slides[index].classList.add("active");
  }


  function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
  }


  function prevSlide() {
    currentSlideIndex =
      (currentSlideIndex - 1 + slides.length) % slides.length;
    showSlide(currentSlideIndex);
  }



  const nextButtons = document.querySelectorAll(".nextBtn");
  const prevButtons = document.querySelectorAll(".prevBtn");

  nextButtons.forEach((button) => {
    button.addEventListener("click", nextSlide);
  });

  prevButtons.forEach((button) => {
    button.addEventListener("click", prevSlide);
  });
});

