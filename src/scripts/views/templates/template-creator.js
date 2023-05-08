// import config from '../../global/config';
// import RestaurantSource from '../../data/restaurant-source';
import starGenerator from '../../utils/star-generator';
// import RestaurantSource from '../../data/restaurant-source';

const createRestaurantItemTemplate = (data) => {
  const restaurantItem = document.createElement('div');
  restaurantItem.classList.add('restaurant-item');

  const stars = starGenerator(data.rating);
  // const imageUrl = await RestaurantSource.getImage(data.imageId);
  // console.log(imageUrl)
  const imgArea = document.createElement('div');
  imgArea.classList.add('imgArea');
  imgArea.innerHTML = `
          <img src="#" alt="Ini adalah foto dari restoran ${data.name}">
          <h3 class="restaurantLoc">${data.city}</h3>
          `;
  const descriptionArea = document.createElement('div');
  descriptionArea.classList.add('descriptionArea');
  descriptionArea.innerHTML = `
            <h2 class="restaurantName" tabindex='0'>${data.name}</h2>
            <div class="starsArea">
              <div class="stars">
              ${stars}
              </div>
              <h3 class="rating" aria-label="rating"> (${data.rating})</h3>
            </div>
            <h3 class="description">${data.description}</h3>
        `;
  const detailsButton = document.createElement('button');
  detailsButton.classList.add('detailsButton');
  //   detailsButton.addEventListener('click', () => getDetails(data));
  detailsButton.innerHTML = 'Details';
  descriptionArea.appendChild(detailsButton);
  restaurantItem.append(imgArea, descriptionArea);
  return restaurantItem;
};

export default createRestaurantItemTemplate;
