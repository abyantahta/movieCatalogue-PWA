import config from './config';

const API_ENDPOINT = {
  GETLIST: `${config.BASE_URL}/list`,
  GETDETAIL: (id) => `${config.BASE_URL}/detail/${id}`,
  FILTERDATA: (query) => `${config.BASE_URL}/search?q=${query}`,
  SENDREVIEW: `${config.BASE_URL}/review`,
  // GETIMAGE: (imageId) => `${config.BASE_URL}/images/medium/${imageId}`,
};

export default API_ENDPOINT;
