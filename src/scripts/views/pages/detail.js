const Detail = {
  async render() {
    return `
        <h2>Detail Page</h2>    
    `;
  },

  async afterRender() {
    console.log('Detail');
  },
};

export default Detail;
