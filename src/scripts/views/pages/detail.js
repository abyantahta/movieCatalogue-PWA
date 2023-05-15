import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import getReview from '../../utils/get-review';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import { detailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
        <div id="detailContent">
        </div>
    `;
  },

  async afterRender() {
    const detailContent = document.querySelector('#detailContent');
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const response = await RestaurantSource.getDetail(url.id);
    detailContent.innerHTML = detailTemplate(response);

    const sendReviewButton = document.querySelector('.sendReviewButton');
    sendReviewButton.addEventListener('click', async () => {
      const data = getReview();
      data.id = response.id;
      // eslint-disable-next-line no-unused-vars
      const sendReview = await RestaurantSource.sendReviewData(data);
    });
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('.likeOrLikedButton'),
      restaurant: response,
    });
  },
};

export default Detail;
