import axios from 'axios';
import API_ENDPOINT from '../global/api-endpoint';

class RestaurantSource {
  static async getList() {
    console.log(API_ENDPOINT.GETLIST);
    console.log('API_ENDPOINT.GETLIST');
    const response = await axios.get(API_ENDPOINT.GETLIST);
    const data = response.data.restaurants;
    console.log(data);
    // const data = response.restaurants;
    return data;
  }

  static async detailRestaurant(id) {
    const response = await axios.get(API_ENDPOINT.GETDETAIL(id));
    return response.restaurant;
  }
}

export default RestaurantSource;
