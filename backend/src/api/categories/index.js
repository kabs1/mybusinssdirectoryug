module.exports = (app) => {
  app.post(`/categories`, require('./categoriesCreate'));
  app.put(`/categories/:id`, require('./categoriesUpdate'));
  app.post(`/categories/import`, require('./categoriesImport'));
  app.delete(`/categories`, require('./categoriesDestroy'));
  app.get(
    `/categories/autocomplete`,
    require('./categoriesAutocomplete'),
  );
  app.get(`/categories`, require('./categoriesList'));
  app.get(`/categories/:id`, require('./categoriesFind'));
};
