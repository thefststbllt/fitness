import Swiper, {Navigation} from 'swiper';

const staffSwiperTarget = document.querySelector('.swiper-staff');
const staffSwiperList = staffSwiperTarget.querySelector('.staff-list');
const staffSwiperButtonPrev = staffSwiperTarget.querySelector('.company-staff__button--prev');
const staffSwiperButtonNext = staffSwiperTarget.querySelector('.company-staff__button--next');

export const initStaffSwiper = () => {
  staffSwiperTarget.classList.add('swiper');
  staffSwiperList.classList.remove('staff-list--no-js');
  staffSwiperButtonPrev.classList.remove('visually-hidden');
  staffSwiperButtonNext.classList.remove('visually-hidden');
  staffSwiperButtonPrev.classList.add('swiper-button-prev');
  staffSwiperButtonNext.classList.add('swiper-button-next');

  return new Swiper('.swiper-staff', {
    modules: [Navigation],
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },

    loop: true,

    slidesPerView: 'auto',

    grabCursor: true,
    watchOverflow: true,

    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
    },

    breakpoints: {
      768: {
        spaceBetween: 30,
      },
      1200: {
        spaceBetween: 40,
      },
    },
  });
};
