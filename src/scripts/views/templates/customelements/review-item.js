class ReviewItem extends HTMLElement {
  set review(review) {
    this._review = review;
    this.render();
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    this.innerHTML = `
        <h4 class="reviewHead">${this._review.name} - <span>${this._review.date}</span> </h4>
        <h4 class="reviewText" tabindex='0'>${this._review.review}</h4>
    `;
  }
}
customElements.define('review-item', ReviewItem);
