const projectsButtons = document.querySelectorAll('.button');
const infoBlocks = document.querySelectorAll('section');

export const initScrollTo = () => {
  projectsButtons.forEach((button) => {
    button.addEventListener('click', (evt) => {
      evt.preventDefault();
      const correctBlock = Array.from(infoBlocks).find((block) => `to-${block.id}` === evt.target.id);
      if (!correctBlock) {
        return;
      }
      correctBlock.scrollIntoView({behavior: 'smooth'});
    });
  });
};
