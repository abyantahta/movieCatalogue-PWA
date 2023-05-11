import RestaurantSource from '../../data/restaurant-source';
// import { createRestaurantItemTemplate } from '../templates/template-creator';
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
        <h2 class="subHeading">Find Your <span>Restaurant</span></h2>
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

    const inputFilter = document.querySelector('#searchInput');
    inputFilter.addEventListener('input', async (e) => {
      e.preventDefault();
      restaurants.innerHTML = '';
      // console.log(restaurantList.length);
      const filteredData = await RestaurantSource.filterRestaurant(inputFilter.value);
      if (filteredData.length !== 0) {
        restaurants.restaurants = filteredData;
      } else {
        console.log(restaurants);
        restaurants.innerHTML = `
        <h3 class="notFound">Restaurant tidak ditemukan</h3>
        `;
      }
    });
  },
};

export default Home;
