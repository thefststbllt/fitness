const initSlides = document.querySelectorAll('.staff-unit');

export const removeSpareTabs = () => {
  setTimeout(() => {
    const staffSwiper = document.querySelector('.swiper-wrapper');
    const staffSlides = staffSwiper.querySelectorAll('.staff-unit');
    const firstSlidesToRemove = Array.from(staffSlides).slice(0, initSlides.length);
    const lastSlidesToRemove = Array.from(staffSlides).slice(staffSlides.length - initSlides.length, staffSlides.length);
    [...firstSlidesToRemove, ...lastSlidesToRemove].forEach((slide) => {
      slide.removeAttribute('tabindex');
    });
  }, 100);
};
