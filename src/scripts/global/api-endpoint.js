import config from './config';

const API_ENDPOINT = {
  GETLIST: `${config.BASE_URL}/list`,
  GETIMAGE: (imageId) => `${config.BASE_URL}/images/medium/${imageId}`,
};

export default API_ENDPOINT;
