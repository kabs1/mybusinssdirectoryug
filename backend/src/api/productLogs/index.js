module.exports = (app) => {
  app.post(`/product-logs`, require('./productLogsCreate'));
  app.put(`/product-logs/:id`, require('./productLogsUpdate'));
  app.post(`/product-logs/import`, require('./productLogsImport'));
  app.delete(`/product-logs`, require('./productLogsDestroy'));
  app.get(
    `/product-logs/autocomplete`,
    require('./productLogsAutocomplete'),
  );
  app.get(`/product-logs`, require('./productLogsList'));
  app.get(`/product-logs/:id`, require('./productLogsFind'));
};
