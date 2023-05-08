const starGenerator = (rating) => {
  const floorRating = Math.floor(rating);
  let stars = '';
  let desimal = rating - floorRating;
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= 5; i++) {
    if (i <= floorRating) {
      stars += '<iconify-icon class=\'star\' icon="material-symbols:star-rate-rounded"></iconify-icon>';
    } else if (desimal >= 0.5) {
      desimal = 0;
      stars += '<iconify-icon class=\'star\' icon="material-symbols:star-rate-half-rounded"></iconify-icon>';
    } else {
      stars += '<iconify-icon class=\'star\' icon="material-symbols:star-outline-rounded"></iconify-icon>';
    }
  }
  return stars;
};

export default starGenerator;
