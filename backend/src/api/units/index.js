module.exports = (app) => {
  app.post(`/units`, require('./unitsCreate'));
  app.put(`/units/:id`, require('./unitsUpdate'));
  app.post(`/units/import`, require('./unitsImport'));
  app.delete(`/units`, require('./unitsDestroy'));
  app.get(
    `/units/autocomplete`,
    require('./unitsAutocomplete'),
  );
  app.get(`/units`, require('./unitsList'));
  app.get(`/units/:id`, require('./unitsFind'));
};
