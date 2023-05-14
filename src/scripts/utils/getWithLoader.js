import axios from 'axios';
import { showLoader, hideLoader } from './loader-initiator';

const getWithLoader = async (url) => {
  showLoader();
  const response = await axios.get(url);
  hideLoader();
  return response;
};
export default getWithLoader;
