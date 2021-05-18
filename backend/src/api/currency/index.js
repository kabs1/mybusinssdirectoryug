module.exports = (app) => {
  app.post(`/currency`, require('./currencyCreate'));
  app.put(`/currency/:id`, require('./currencyUpdate'));
  app.post(`/currency/import`, require('./currencyImport'));
  app.delete(`/currency`, require('./currencyDestroy'));
  app.get(
    `/currency/autocomplete`,
    require('./currencyAutocomplete'),
  );
  app.get(`/currency`, require('./currencyList'));
  app.get(`/currency/:id`, require('./currencyFind'));
};
