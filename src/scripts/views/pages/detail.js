import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import getReview from '../../utils/get-review';
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
    console.log(sendReviewButton);
    sendReviewButton.addEventListener('click', async () => {
      // console.log('hai');
      const data = getReview();
      data.id = response.id;
      console.log(data);
      // eslint-disable-next-line no-unused-vars
      const sendReview = await RestaurantSource.sendReviewData(data);
      window.location.reload();
    });
  },
};

export default Detail;
