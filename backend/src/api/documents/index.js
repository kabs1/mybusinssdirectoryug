module.exports = (app) => {
  app.post(`/documents`, require('./documentsCreate'));
  app.put(`/documents/:id`, require('./documentsUpdate'));
  app.post(`/documents/import`, require('./documentsImport'));
  app.delete(`/documents`, require('./documentsDestroy'));
  app.get(
    `/documents/autocomplete`,
    require('./documentsAutocomplete'),
  );
  app.get(`/documents`, require('./documentsList'));
  app.get(`/documents/:id`, require('./documentsFind'));
};
