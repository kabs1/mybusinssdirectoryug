module.exports = (app) => {
  app.post(`/price-change`, require('./priceChangeCreate'));
  app.put(`/price-change/:id`, require('./priceChangeUpdate'));
  app.post(`/price-change/import`, require('./priceChangeImport'));
  app.delete(`/price-change`, require('./priceChangeDestroy'));
  app.get(
    `/price-change/autocomplete`,
    require('./priceChangeAutocomplete'),
  );
  app.get(`/price-change`, require('./priceChangeList'));
  app.get(`/price-change/:id`, require('./priceChangeFind'));
};
