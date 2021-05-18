module.exports = (app) => {
  app.post(`/product-count`, require('./productCountCreate'));
  app.put(`/product-count/:id`, require('./productCountUpdate'));
  app.post(`/product-count/import`, require('./productCountImport'));
  app.delete(`/product-count`, require('./productCountDestroy'));
  app.get(
    `/product-count/autocomplete`,
    require('./productCountAutocomplete'),
  );
  app.get(`/product-count`, require('./productCountList'));
  app.get(`/product-count/:id`, require('./productCountFind'));
};
