module.exports = (app) => {
  app.post(`/brands`, require('./brandsCreate'));
  app.put(`/brands/:id`, require('./brandsUpdate'));
  app.post(`/brands/import`, require('./brandsImport'));
  app.delete(`/brands`, require('./brandsDestroy'));
  app.get(
    `/brands/autocomplete`,
    require('./brandsAutocomplete'),
  );
  app.get(`/brands`, require('./brandsList'));
  app.get(`/brands/:id`, require('./brandsFind'));
};
