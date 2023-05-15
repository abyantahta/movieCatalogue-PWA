import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { hideLoader } from '../../utils/loader-initiator';

const Favorites = {
  async render() {
    return `
      <div id="favorites">
        <h2 class="subHeading" tabindex='0'>Your Favorite <span>Restaurant</span></h2>  
        <restaurant-list class="restaurants">
        </restaurant-list>
      </div>

    `;
  },

  async afterRender() {
    const restaurantList = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurants = document.querySelector('restaurant-list');
    restaurants.restaurants = restaurantList;
    hideLoader();
  },
};

export default Favorites;
