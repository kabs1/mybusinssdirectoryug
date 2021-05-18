module.exports = (app) => {
  app.post(`/assets`, require('./assetsCreate'));
  app.put(`/assets/:id`, require('./assetsUpdate'));
  app.post(`/assets/import`, require('./assetsImport'));
  app.delete(`/assets`, require('./assetsDestroy'));
  app.get(
    `/assets/autocomplete`,
    require('./assetsAutocomplete'),
  );
  app.get(`/assets`, require('./assetsList'));
  app.get(`/assets/:id`, require('./assetsFind'));
};
