/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/');
});

// Scenario('showing empty liked movies', (I) => {
//   I.seeElement('#query');
//   // I.seeElement('.query'); // membuat test menjadi gagal
//   I.see('Tidak ada film untuk ditampilkan', '.movie-item__not__found');
// });

Scenario('liking restaurant ', async ({ I }) => {
//   I.see('Tidak ada film untuk ditampilkan', '.movie-item__not__found');
  pause();

  const firstRestaurant = locate('.restaurantName').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  I.seeElement('.detailsButton');
  I.click(locate('.detailsButton').first());

  I.seeElement('.addToFavorite');
  I.click('.addToFavorite');

  const likedRestaurantTitle = await I.grabTextFrom('.restaurantName');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('unliking restaurant ', async ({ I }) => {
  I.seeElement('.detailsButton');
  I.click(locate('.detailsButton').first());

  I.seeElement('.addToFavorite');
  I.click('.addToFavorite');

  I.amOnPage('/#/favorites');
  pause();
  I.seeElement('.restaurantName');
  const firstRestaurant = locate('.restaurantName').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  I.seeElement('.detailsButton');
  I.click(locate('.detailsButton').first());

  I.seeElement('.removeFromFavorite');
  I.click('.removeFromFavorite');

  I.amOnPage('/#/favorites');
  I.dontSeeElement('restaurant-item');
});
