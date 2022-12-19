const seasonsLists = document.querySelectorAll('.season-item');
const buttons = document.querySelectorAll('.buttons-list__button');

export const initSeasonsTabs = () => {
  Array.from(seasonsLists).forEach((list) => {
    list.style.marginBottom = '0';
  });

  Array.from(seasonsLists).slice(1).forEach((list) => {
    list.classList.add('season-item--hidden');
  });

  const findCorrectSeason = (button) => Array.from(seasonsLists).find((season) => season.dataset.period === button.dataset.period);
  const hideAllSeasons = () => seasonsLists.forEach((season) => season.classList.add('season-item--hidden'));
  const makeDefaultButtons = () => buttons.forEach((button) => button.classList.remove('buttons-list__button--current'));

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const correctSeason = findCorrectSeason(button);

      hideAllSeasons();
      makeDefaultButtons();
      correctSeason.classList.remove('season-item--hidden');
      button.classList.add('buttons-list__button--current');
    });
  });
};
