import Swiper, {Navigation} from 'swiper';

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
    modules: [Navigation],

    slidesPerView: 1,
    observer: true,
    observeParents: true,
    loop: false,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    effect: 'flip',
    flipEffect: {
      slideShadows: true,
      limitRotation: true,
    },

    grabCursor: true,
    spaceBetween: 40,
  });
};
