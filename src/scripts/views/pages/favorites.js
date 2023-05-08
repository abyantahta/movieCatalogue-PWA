const Favorites = {
  async render() {
    return `
        <h2>Favorites Page</h2>    
    `;
  },

  async afterRender() {
    console.log('Favorites');
  },
};

export default Favorites;
