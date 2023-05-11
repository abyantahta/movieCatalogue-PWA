// import RestaurantSource from '../data/restaurant-source';

const sendReview = () => {
  const reviewerName = document.querySelector('#nameReviewer').value;
  const text = document.querySelector('#reviewText').value;
  const data = {
    name: reviewerName,
    review: text,
  };
  return data;
};
export default sendReview;
