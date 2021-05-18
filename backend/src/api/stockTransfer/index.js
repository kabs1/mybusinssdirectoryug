module.exports = (app) => {
  app.post(`/stock-transfer`, require('./stockTransferCreate'));
  app.put(`/stock-transfer/:id`, require('./stockTransferUpdate'));
  app.post(`/stock-transfer/import`, require('./stockTransferImport'));
  app.delete(`/stock-transfer`, require('./stockTransferDestroy'));
  app.get(
    `/stock-transfer/autocomplete`,
    require('./stockTransferAutocomplete'),
  );
  app.get(`/stock-transfer`, require('./stockTransferList'));
  app.get(`/stock-transfer/:id`, require('./stockTransferFind'));
};
