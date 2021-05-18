module.exports = (app) => {
  app.post(`/returns`, require('./returnsCreate'));
  app.put(`/returns/:id`, require('./returnsUpdate'));
  app.post(`/returns/import`, require('./returnsImport'));
  app.delete(`/returns`, require('./returnsDestroy'));
  app.get(
    `/returns/autocomplete`,
    require('./returnsAutocomplete'),
  );
  app.get(`/returns`, require('./returnsList'));
  app.get(`/returns/:id`, require('./returnsFind'));
};
