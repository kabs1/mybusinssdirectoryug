module.exports = (app) => {
  app.post(`/variation`, require('./variationCreate'));
  app.put(`/variation/:id`, require('./variationUpdate'));
  app.post(`/variation/import`, require('./variationImport'));
  app.delete(`/variation`, require('./variationDestroy'));
  app.get(
    `/variation/autocomplete`,
    require('./variationAutocomplete'),
  );
  app.get(`/variation`, require('./variationList'));
  app.get(`/variation/:id`, require('./variationFind'));
};
