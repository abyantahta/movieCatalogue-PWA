import 'regenerator-runtime';
import 'iconify-icon';
import '../styles/style.scss';
import '../styles/responsive.scss';

import App from './views/app';
import loaderInitiator from './utils/loader-initiator';

// const ham = document.querySelector('.hamburger');
// console.log(ham);
// eslint-disable-next-line no-unused-vars
const app = new App({
  button: document.querySelector('.hamburger'),
  drawer: document.querySelector('#header'),
  nav: document.querySelector('#nav'),
  content: document.querySelector('#main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});
window.addEventListener('load', () => {
  app.renderPage();
  loaderInitiator();
});
