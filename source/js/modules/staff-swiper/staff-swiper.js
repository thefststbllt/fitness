import Swiper from 'swiper';//Пробовал из папки vendor вставить тоже не работал

export const initSwiper = () => {
  return new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    grabCursor: true,

    spaceBetween: 40,
  });
};
