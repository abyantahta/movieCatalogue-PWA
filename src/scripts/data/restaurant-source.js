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

  static async getDetail(id) {
    const response = await axios.get(API_ENDPOINT.GETDETAIL(id));
    const data = response.data.restaurant;
    return data;
  }

  static async filterRestaurant(query) {
    const response = await axios.get(API_ENDPOINT.FILTERDATA(query));
    const lists = response.data.restaurants;
    // console.log(lists);
    return lists;
  }

  static async sendReviewData(data) {
    const response = await axios.post(API_ENDPOINT.SENDREVIEW, data, {
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(response);
  }
}

export default RestaurantSource;
