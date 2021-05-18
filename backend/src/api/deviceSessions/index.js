module.exports = (app) => {
  app.post(`/device-sessions`, require('./deviceSessionsCreate'));
  app.put(`/device-sessions/:id`, require('./deviceSessionsUpdate'));
  app.post(`/device-sessions/import`, require('./deviceSessionsImport'));
  app.delete(`/device-sessions`, require('./deviceSessionsDestroy'));
  app.get(
    `/device-sessions/autocomplete`,
    require('./deviceSessionsAutocomplete'),
  );
  app.get(`/device-sessions`, require('./deviceSessionsList'));
  app.get(`/device-sessions/:id`, require('./deviceSessionsFind'));
};
