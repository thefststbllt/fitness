const videoButton = document.querySelector('.block-about__video-button');
const videoContainer = document.querySelector('.block-about__video-container');

const addPreview = () => {
  videoContainer.classList.remove('block-about__video-container--opened');
};

const removePreview = () => {
  videoContainer.classList.add('block-about__video-container--opened');
};

export const initVideoPreview = () => {
  addPreview();
  videoButton.addEventListener('click', removePreview);
};

//Модуль не доделан!
