const seasonButton = document.querySelector('.main-info__button');
const seasonPassBlock = document.querySelector('.season-pass__container');

export const initScrollTo = () => {
  seasonButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    seasonPassBlock.scrollIntoView({behavior: 'smooth'});
  });
};
