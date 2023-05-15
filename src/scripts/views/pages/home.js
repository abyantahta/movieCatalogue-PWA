import RestaurantSource from '../../data/restaurant-source';
import { hideLoader } from '../../utils/loader-initiator';
import searchHandler from '../../utils/search-handler';
import '../templates/customelements/restaurant-list';

const Home = {
  async render() {
    return `
    <section class="jumbotronContainer">
      <div class="container">
        <div class="textContent">
          <h1>Hungers</h1>
          <h2>Find a place to overcome your hunger</h3>
        </div>
      </div>
    </section>
    <section class="restaurantCatalog" id="mainContent">
      <div class="subHeadingContainer">
        <h2 class="subHeading" tabindex='0'>Find Your <span>Restaurant</span></h2>
        <form action="">
          <iconify-icon icon="ic:baseline-search"></iconify-icon>
          <input type="text" id="searchInput" placeholder="Search Restaurants Here...">
          <label for="searchInput" hidden="hidden">Search your Restaurant</label>
        </form>
      </div>
      <restaurant-list class="restaurants">
      </restaurant-list>
    </section>
    `;
  },

  async afterRender() {
    const restaurantList = await RestaurantSource.getList();
    const restaurants = document.querySelector('restaurant-list');
    restaurants.restaurants = restaurantList;

    searchHandler(restaurants);
    hideLoader();
  },
};

export default Home;
