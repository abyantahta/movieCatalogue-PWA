const showLoader = () => {
  const loader = document.querySelector('.overlay');
  loader.style.display = 'flex';
};
const hideLoader = () => {
  const loader = document.querySelector('.overlay');
  loader.style.display = 'none';
};

export {
  showLoader,
  hideLoader,
};
