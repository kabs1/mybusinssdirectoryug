module.exports = (app) => {
  app.post(`/purchases`, require('./purchasesCreate'));
  app.put(`/purchases/:id`, require('./purchasesUpdate'));
  app.post(`/purchases/import`, require('./purchasesImport'));
  app.delete(`/purchases`, require('./purchasesDestroy'));
  app.get(
    `/purchases/autocomplete`,
    require('./purchasesAutocomplete'),
  );
  app.get(`/purchases`, require('./purchasesList'));
  app.get(`/purchases/:id`, require('./purchasesFind'));
};
