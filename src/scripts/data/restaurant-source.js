import axios from 'axios';
import API_ENDPOINT from '../global/api-endpoint';
import getWithLoader from '../utils/getWithLoader';
import errorHandler from '../utils/errorHandler';
import { hideLoader, showLoader } from '../utils/loader-initiator';

class RestaurantSource {
  static async getList() {
    const response = await getWithLoader(API_ENDPOINT.GETLIST);
    const data = response.data.restaurants;
    return data;
  }

  static async getDetail(id) {
    const response = await getWithLoader(API_ENDPOINT.GETDETAIL(id));
    const data = response.data.restaurant;
    return data;
  }

  static async filterRestaurant(query) {
    const response = await getWithLoader(API_ENDPOINT.FILTERDATA(query));
    const lists = response.data.restaurants;
    return lists;
  }

  static async sendReviewData(data) {
    try {
      showLoader();
      // eslint-disable-next-line no-unused-vars
      const response = await axios.post(API_ENDPOINT.SENDREVIEW, data, {
        headers: { 'Content-Type': 'application/json' },
      });
      hideLoader();
    } catch (error) {
      errorHandler(error.message);
    }
  }
}

export default RestaurantSource;
