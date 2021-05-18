module.exports = (app) => {
  app.post(`/products`, require('./productsCreate'));
  app.put(`/products/:id`, require('./productsUpdate'));
  app.post(`/products/import`, require('./productsImport'));
  app.delete(`/products`, require('./productsDestroy'));
  app.get(
    `/products/autocomplete`,
    require('./productsAutocomplete'),
  );
  app.get(`/products`, require('./productsList'));
  app.get(`/products/:id`, require('./productsFind'));
};
