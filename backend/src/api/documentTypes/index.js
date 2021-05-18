module.exports = (app) => {
  app.post(`/document-types`, require('./documentTypesCreate'));
  app.put(`/document-types/:id`, require('./documentTypesUpdate'));
  app.post(`/document-types/import`, require('./documentTypesImport'));
  app.delete(`/document-types`, require('./documentTypesDestroy'));
  app.get(
    `/document-types/autocomplete`,
    require('./documentTypesAutocomplete'),
  );
  app.get(`/document-types`, require('./documentTypesList'));
  app.get(`/document-types/:id`, require('./documentTypesFind'));
};
