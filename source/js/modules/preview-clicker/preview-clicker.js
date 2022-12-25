export const initVideoPreview = () => {
  const videoContainer = document.querySelector('.block-about__video-container');
  const pageVideo = document.querySelector('.block-about__video');
  const videoButton = document.querySelector('.block-about__video-button');

  const addPreview = () => {
    if (!videoContainer && !videoButton && !pageVideo) {
      return;
    }
    pageVideo.style.display = ('none');
    videoContainer.classList.remove('block-about__video-container--opened');
  };

  const removePreview = () => {
    if (!videoContainer) {
      return;
    }
    videoContainer.classList.add('block-about__video-container--opened');
    pageVideo.style.display = ('block');
  };
  addPreview();
  if (videoButton) {
    videoButton.addEventListener('click', removePreview);
  } else {
    removePreview();
  }
};
