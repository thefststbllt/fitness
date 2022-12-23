export const initVideoPreview = () => {
  const videoContainer = document.querySelector('.block-about__video-container');
  const videoButton = document.querySelector('.block-about__video-button');

  const addPreview = () => {
    if (!videoContainer && !videoButton) {
      return;
    }
    videoContainer.classList.remove('block-about__video-container--opened');
  };

  const removePreview = () => {
    if (!videoContainer) {
      return;
    }
    videoContainer.classList.add('block-about__video-container--opened');
  };
  addPreview();
  if (videoButton) {
    videoButton.addEventListener('click', removePreview);
  } else {
    removePreview();
  }
};
