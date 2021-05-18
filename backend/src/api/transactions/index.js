module.exports = (app) => {
  app.post(`/transactions`, require('./transactionsCreate'));
  app.put(`/transactions/:id`, require('./transactionsUpdate'));
  app.post(`/transactions/import`, require('./transactionsImport'));
  app.delete(`/transactions`, require('./transactionsDestroy'));
  app.get(
    `/transactions/autocomplete`,
    require('./transactionsAutocomplete'),
  );
  app.get(`/transactions`, require('./transactionsList'));
  app.get(`/transactions/:id`, require('./transactionsFind'));
};
