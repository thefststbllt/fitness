const videoContainer = document.querySelector('.block-about__video-container');
const videoButton = videoContainer.querySelector('.block-about__video-button');

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
