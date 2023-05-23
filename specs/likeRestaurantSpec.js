/* eslint-disable no-undef */
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import createLikeButtonPresenterWithRestaurant from './helpers/testFactories';

describe('liking a restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div class="likeOrLikedButton"></div>';
  };
  beforeEach(() => {
    addLikeButtonContainer();
  });
  it('should show the like button when the restaurant has not been liked before', async () => {
    await createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('.addToFavorite'))
      .toBeTruthy();
  });
  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('.removeFromFavorite'))
      .toBeFalsy();
  });
  it('should be able to like the restaurant', async () => {
    await createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('.addToFavorite').dispatchEvent(new Event('click'));
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);
    expect(restaurant).toEqual({ id: 1 });

    FavoriteRestaurantIdb.deleteRestaurant(1);
  });
  it('should not add a restaurant again when its already liked', async () => {
    await createLikeButtonPresenterWithRestaurant({ id: 1 });

    // Tambahkan film dengan ID 1 ke daftar film yang disukai
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });

    // Simulasikan pengguna menekan tombol suka film
    document.querySelector('.addToFavorite').dispatchEvent(new Event('click'));

    // tidak ada film yang ganda
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([{ id: 1 }]);
    FavoriteRestaurantIdb.deleteRestaurant(1);
  });
  it('should not add a restaurant when it has no id', async () => {
    await createLikeButtonPresenterWithRestaurant({});

    document.querySelector('.addToFavorite').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
