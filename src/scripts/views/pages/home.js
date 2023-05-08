import RestaurantSource from '../../data/restaurant-source';
import createRestaurantItemTemplate from '../templates/template-creator';

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
      <div class="restaurants">
      </div>
    </section>
    `;
  },

  async afterRender() {
    // console.log('hai')
    const movies = await RestaurantSource.getList();
    const restaurants = document.querySelector('.restaurants');
    // console.log(restaurants);
    // console.log('hahaha', movies);
    movies.forEach((data) => {
      // const item = createRestaurantItemTemplate(data);
      restaurants.append(createRestaurantItemTemplate(data));
    });
  },
};

export default Home;
