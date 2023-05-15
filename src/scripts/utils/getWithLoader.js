import axios from 'axios';
import { showLoader, hideLoader } from './loader-initiator';
import errorHandler from './errorHandler';

// eslint-disable-next-line consistent-return
const getWithLoader = async (url) => {
  try {
    showLoader();
    const response = await axios.get(url);
    hideLoader();
    return response;
  } catch (error) {
    errorHandler(error.message);
  }
};
export default getWithLoader;
