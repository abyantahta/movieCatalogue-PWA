// import RestaurantSource from '../../data/restaurant-source';
// import UrlParser from '../../routes/url-parser';
// import getReview from '../../utils/get-review';
// import LikeButtonInitiator from '../../utils/like-button-initiator';
// import { detailTemplate } from '../templates/template-creator';

import { hideLoader } from '../../utils/loader-initiator';

const NotFound = {
  async render() {
    return `
        <div class="notFoundContainer">
          <h2>404</h2>
          <h4>Maaf, Halaman yang anda kunjungi tidak tersedia :(</h4>
        </div>
    `;
  },
  // eslint-disable-next-line no-empty-function
  async afterRender() {
    hideLoader();
  },
};

export default NotFound;
