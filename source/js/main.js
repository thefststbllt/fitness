import {iosVhFix} from './utils/ios-vh-fix';
import {initSeasonsTabs} from './modules/seasons-tabs/seasons-tabs.js';
import {initStaffSwiper} from './modules/staff-swiper/staff-swiper.js';
import {initVideoPreview} from './modules/preview-clicker/preview-clicker.js';
import {initFeedbackSwiper} from './modules/feedback-swiper/feedback-swiper.js';
import {initScrollTo} from './modules/scroll-to/scroll-to.js';
import {getPhoneMask} from './modules/phone-mask/phone-mask.js';

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();
  initScrollTo();
  initVideoPreview();
  initSeasonsTabs();
  initStaffSwiper();
  initFeedbackSwiper();
  getPhoneMask();
});
