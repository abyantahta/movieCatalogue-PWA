import config from '../../global/config';
import './customelements/review-list';
import starGenerator from '../../utils/star-generator';

// const dsa = (data) => {
//   const restaurantItem = document.createElement('div');
//   restaurantItem.classList.add('restaurant-item');
//   const stars = starGenerator(data.rating);
//   const imgArea = document.createElement('div');
//   imgArea.classList.add('imgArea');
//   imgArea.innerHTML = `
// eslint-disable-next-line max-len
//           <img src="${config.UrlImage}/${data.pictureId}" alt="Ini adalah foto dari restoran ${data.name}">
//           <h3 class="restaurantLoc">${data.city}</h3>
//           `;
//   const descriptionArea = document.createElement('div');
//   descriptionArea.classList.add('descriptionArea');
//   descriptionArea.innerHTML = `
//             <h2 class="restaurantName" tabindex='0'>${data.name}</h2>
//             <div class="starsArea">
//               <div class="stars">
//               ${stars}
//               </div>
//               <h3 class="rating" aria-label="rating"> (${data.rating})</h3>
//             </div>
//             <h3 class="description">${data.description}</h3>
//             `;
//   const detailsButton = document.createElement('a');
//   detailsButton.classList.add('detailsButton');
//   detailsButton.setAttribute('href', `/#/detail/${data.id}`);
//   detailsButton.innerHTML = 'Detail';
//   descriptionArea.appendChild(detailsButton);
//   restaurantItem.append(imgArea, descriptionArea);
//   return restaurantItem;
// };
// const createRestaurantItemTemplate = (data) => `
//   <div class="restaurant-item">
//     <div class="imgArea">
//       <img src="${config.UrlImage}/${data.pictureId}" alt="Foto restoran" />
//       <h3 class="restaurantLoc">${data.city}</h3>
//     </div>
//     <div class="descriptionArea">
//       <h2 class="restaurantName" tabindex='0'>${data.name}</h2>
//       <div class="starsArea">
//         <div class="stars">
//         ${starGenerator(data.rating)}
//         </div>
//         <h3 class="rating" aria-label="rating"> (${data.rating})</h3>
//       </div>
//       <h3 class="description">${data.description}</h3>
//       <a href="/#/detail/${data.id}" class="detailsButton">Detail</a>
//     </div>
//   </div>
// `;

const showArrayData = (datas) => {
  let dataList = '';
  datas.forEach((data) => {
    dataList += `<li>${data.name}</li>`;
  });
  return dataList;
};
const detailTemplate = (data) => {
  const reviewList = document.createElement('review-list');
  reviewList.reviews = data.customerReviews;
  const reviewString = reviewList.outerHTML.toString();
  const detail = `
      <div class="detailHead">
        <div class="img">
            <img src="${config.UrlImage}/${data.pictureId}" alt="Ini adalah foto dari restoran ${data.name}">
            <div class="detailButtonArea">
              <a href="">Back to Home</a>
              <button class='addToFavorite'>Save Restaurant</button>
            </div>
        </div>
        <div class="details">
            <h2 class="restaurantName" tabindex="0">${data.name}</h2>
            <div class="starsArea">
              <div class="stars">
              ${starGenerator(data.rating)}
              </div>
              <h3 class="rating" tabindex="0" aria-label="rating"> (${data.rating})</h3>
            </div>
            <h3 class="restaurantLocation" tabindex="0">Based in ${data.city}</h3>
            <h3 class="restaurantDesc" tabindex="0">${data.description}</h3>
        </div>
      </div>
      <div class="menuAndReviewContainer">
        <div class="menu">
          <div class="foods">
            <h3>Foods</h3>
            <ul>
              ${showArrayData(data.menus.foods)}
            </ul>
          </div>
          <div class="drinks">
            <h3>Drinks</h3>
            <ul>
              ${showArrayData(data.menus.drinks)}
            </ul>
          </div>
        </div>
        <div class="reviewContainer">
          <h2>Review</h2>
          ${reviewString}
        </div>
      </div>
      `;
  return detail;
};

const addReview = () => `
  <div class="inputArea">
    <input type="text" id="nameReviewer" placeholder="Name..." />
    <label htmlFor="nameReviewer" hidden="hidden">Name</label>
    <input type="text" id="reviewText" placeholder="Put Review Here..."/>
    <label htmlFor="reviewText" hidden="hidden">Text</label >
  </div>
  <button class="sendReviewButton">POST</button>
`;
export {
  detailTemplate,
  addReview,
};
