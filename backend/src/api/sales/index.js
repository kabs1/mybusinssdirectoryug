module.exports = (app) => {
  app.post(`/sales`, require('./salesCreate'));
  app.put(`/sales/:id`, require('./salesUpdate'));
  app.post(`/sales/import`, require('./salesImport'));
  app.delete(`/sales`, require('./salesDestroy'));
  app.get(
    `/sales/autocomplete`,
    require('./salesAutocomplete'),
  );
  app.get(`/sales`, require('./salesList'));
  app.get(`/sales/:id`, require('./salesFind'));
};
