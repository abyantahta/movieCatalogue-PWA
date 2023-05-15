const DrawerInitiator = {
  init({ button, nav, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, button, nav);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, nav);
    });
  },

  _toggleDrawer(event, button, nav) {
    event.stopPropagation();
    button.classList.toggle('transformButton');
    nav.classList.toggle('showNav');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('showNav');
  },
};

export default DrawerInitiator;
