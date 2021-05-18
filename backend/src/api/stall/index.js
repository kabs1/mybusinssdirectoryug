module.exports = (app) => {
  app.post(`/stall`, require('./stallCreate'));
  app.put(`/stall/:id`, require('./stallUpdate'));
  app.post(`/stall/import`, require('./stallImport'));
  app.delete(`/stall`, require('./stallDestroy'));
  app.get(
    `/stall/autocomplete`,
    require('./stallAutocomplete'),
  );
  app.get(`/stall`, require('./stallList'));
  app.get(`/stall/:id`, require('./stallFind'));
};
