import 'regenerator-runtime';
import 'iconify-icon';
import '../styles/style.scss';
import '../styles/responsive.scss';

import App from './views/app';
import swRegister from './utils/sw-register';

// eslint-disable-next-line no-unused-vars
const app = new App({
  button: document.querySelector('.hamburger'),
  drawer: document.querySelector('#header'),
  nav: document.querySelector('#nav'),
  content: document.querySelector('#main'),
});

const skipLink = document.querySelector('.skip-link');
const mainContent = document.querySelector('#main');

skipLink.addEventListener('click', (e) => {
  e.preventDefault();
  mainContent.scrollIntoView({ behavior: 'smooth' });
  skipLink.blur();
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});
window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
  // loaderInitiator();
});
