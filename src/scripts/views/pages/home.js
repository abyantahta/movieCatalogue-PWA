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
    // console.log(image);
    const restaurants = document.querySelector('.restaurants');
    // console.log(restaurants);
    // console.log('hahaha', movies);
    movies.forEach(async (data) => {
      const item = await createRestaurantItemTemplate(data);
      restaurants.append(item);
      // const imageUrl = await RestaurantSource.getImage(data.pictureId);
      // console.log(imageUrl);
      // const
    });
  },
};

export default Home;
