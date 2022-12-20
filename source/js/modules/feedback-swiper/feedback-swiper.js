import Swiper from 'swiper';

const feedbackSwiperTarget = document.querySelector('.swiper-feedback');
const feedBackSwiperList = feedbackSwiperTarget.querySelector('.feedback-list');
const feedbackButtonNext = document.querySelector('.feedback__button--next');
const feedbackButtonPrev = document.querySelector('.feedback__button--prev');

export const initFeedbackSwiper = () => {

  feedbackSwiperTarget.classList.add('swiper');
  feedBackSwiperList.classList.remove('feedback-list--no-js');

  feedbackButtonNext.classList.remove('visually-hidden');
  feedbackButtonPrev.classList.remove('visually-hidden');
  feedbackButtonNext.classList.add('swiper-button-next');
  feedbackButtonPrev.classList.add('swiper-button-prev');

  return new Swiper('.swiper-feedback', {
    slidesPerView: 1,
    loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    grabCursor: true,
    spaceBetween: 40,
  });
};
