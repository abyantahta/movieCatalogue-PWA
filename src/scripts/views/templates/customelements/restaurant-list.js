// import './review-item';
import './restaurant-item';

class RestaurantList extends HTMLElement {
  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this.render();
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    // console.log('hai');
    this._restaurants.forEach((restaurant) => {
      const restaurantItemElement = document.createElement('restaurant-item');
      restaurantItemElement.restaurant = restaurant;
      this.appendChild(restaurantItemElement);
      // console.log(restaurant);
    });
    // console.log(this._restaurants);
  }
}
customElements.define('restaurant-list', RestaurantList);
