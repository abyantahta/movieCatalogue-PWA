import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('.likeOrLikedButton'),
    restaurant,
  });
};

export default createLikeButtonPresenterWithRestaurant;
