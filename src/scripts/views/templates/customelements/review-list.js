// import './review-item';
import './review-item';

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
    console.log(this._reviews);
  }
}
customElements.define('review-list', ReviewList);
