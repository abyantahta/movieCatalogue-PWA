/* eslint-disable no-param-reassign */
import RestaurantSource from '../data/restaurant-source';

const searchHandler = (restaurants) => {
  const inputFilter = document.querySelector('#searchInput');
  inputFilter.addEventListener('input', async (e) => {
    e.preventDefault();
    restaurants.innerHTML = '';
    const filteredData = await RestaurantSource.filterRestaurant(inputFilter.value);
    if (filteredData.length !== 0) {
      restaurants.restaurants = filteredData;
    } else {
      restaurants.innerHTML = `
        <h3 class="notFound">Restaurant tidak ditemukan</h3>
        `;
    }
  });
};

export default searchHandler;
