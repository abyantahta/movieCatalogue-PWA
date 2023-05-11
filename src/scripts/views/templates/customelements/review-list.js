// import './review-item';
import './review-item';
// eslint-disable-next-line import/no-cycle
import { addReview } from '../template-creator';

class ReviewList extends HTMLElement {
  set reviews(reviews) {
    this._reviews = reviews;
    this.render();
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    this._reviews.forEach((review) => {
      const reviewItemElement = document.createElement('review-item');
      reviewItemElement.review = review;
      this.appendChild(reviewItemElement);
      console.log(review);
    });
    const form = document.createElement('form');
    form.innerHTML = addReview();
    console.log(form);
    this.appendChild(form);
  }
}
customElements.define('review-list', ReviewList);
