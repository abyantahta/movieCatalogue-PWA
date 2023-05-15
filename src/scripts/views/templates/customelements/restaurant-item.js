import config from '../../../global/config';
import starGenerator from '../../../utils/star-generator';

class RestaurantItem extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    this.innerHTML = `
        <div class="imgArea">
        <img crossorigin="anonymous" src="${config.UrlImage}/${this._restaurant.pictureId}" alt="Foto restoran" />
        <h3 class="restaurantLoc">${this._restaurant.city}</h3>
        </div>
        <div class="descriptionArea">
        <h2 class="restaurantName" tabindex='0'>${this._restaurant.name}</h2>
        <div class="starsArea">
            <div class="stars">
            ${starGenerator(this._restaurant.rating)}
            </div>
            <h3 class="rating" aria-label="rating"> (${this._restaurant.rating})</h3>
        </div>
        <h3 class="description">${this._restaurant.description}</h3>
        <a href="/#/detail/${this._restaurant.id}" class="detailsButton" tabindex='0'>Detail</a>
        </div>
    `;
  }
}
customElements.define('restaurant-item', RestaurantItem);
