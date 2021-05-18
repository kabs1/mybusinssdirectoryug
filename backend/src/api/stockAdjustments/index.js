module.exports = (app) => {
  app.post(`/stock-adjustments`, require('./stockAdjustmentsCreate'));
  app.put(`/stock-adjustments/:id`, require('./stockAdjustmentsUpdate'));
  app.post(`/stock-adjustments/import`, require('./stockAdjustmentsImport'));
  app.delete(`/stock-adjustments`, require('./stockAdjustmentsDestroy'));
  app.get(
    `/stock-adjustments/autocomplete`,
    require('./stockAdjustmentsAutocomplete'),
  );
  app.get(`/stock-adjustments`, require('./stockAdjustmentsList'));
  app.get(`/stock-adjustments/:id`, require('./stockAdjustmentsFind'));
};
