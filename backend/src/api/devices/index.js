module.exports = (app) => {
  app.post(`/devices`, require('./devicesCreate'));
  app.put(`/devices/:id`, require('./devicesUpdate'));
  app.post(`/devices/import`, require('./devicesImport'));
  app.delete(`/devices`, require('./devicesDestroy'));
  app.get(
    `/devices/autocomplete`,
    require('./devicesAutocomplete'),
  );
  app.get(`/devices`, require('./devicesList'));
  app.get(`/devices/:id`, require('./devicesFind'));
};
