import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import detailTemplate from '../templates/template-creator';

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
  },
};

export default Detail;
