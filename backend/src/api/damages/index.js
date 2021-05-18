module.exports = (app) => {
  app.post(`/damages`, require('./damagesCreate'));
  app.put(`/damages/:id`, require('./damagesUpdate'));
  app.post(`/damages/import`, require('./damagesImport'));
  app.delete(`/damages`, require('./damagesDestroy'));
  app.get(
    `/damages/autocomplete`,
    require('./damagesAutocomplete'),
  );
  app.get(`/damages`, require('./damagesList'));
  app.get(`/damages/:id`, require('./damagesFind'));
};
