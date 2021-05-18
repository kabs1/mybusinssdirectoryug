module.exports = (app) => {
  app.post(`/product-value`, require('./productValueCreate'));
  app.put(`/product-value/:id`, require('./productValueUpdate'));
  app.post(`/product-value/import`, require('./productValueImport'));
  app.delete(`/product-value`, require('./productValueDestroy'));
  app.get(
    `/product-value/autocomplete`,
    require('./productValueAutocomplete'),
  );
  app.get(`/product-value`, require('./productValueList'));
  app.get(`/product-value/:id`, require('./productValueFind'));
};
