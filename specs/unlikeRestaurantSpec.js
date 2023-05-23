/* eslint-disable no-undef */
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import createLikeButtonPresenterWithRestaurant from './helpers/testFactories';

describe('Unliking A restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div class="likeOrLikedButton"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should display unlike widget when the restaurant has been liked', async () => {
    await createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('.removeFromFavorite'))
      .toBeTruthy();
  });

  it('should not display like widget when the restaurant has been liked', async () => {
    await createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('.addToFavorite'))
      .toBeFalsy();
  });
  it('should be able to remove liked restaurant from the list', async () => {
    await createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('.removeFromFavorite').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await createLikeButtonPresenterWithRestaurant({ id: 1 });

    // hapus dulu film dari daftar film yang disukai
    await FavoriteRestaurantIdb.deleteRestaurant(1);
    // kemudian, simulasikan pengguna menekan widget batal menyukai film
    document.querySelector('.removeFromFavorite').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
