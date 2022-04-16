// Smooth scroll https://github.com/cferdinandi/smooth-scroll
// new SmoothScroll('a[href*="#"]')


/// Slider
new Swiper('.swiper-container', {
  spaceBetween: 20,
  // loop: true,
  navigation: {
    nextEl: '.arrow__btn-next',
    prevEl: '.arrow__btn-prev',
  },
  breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      }
    }
});