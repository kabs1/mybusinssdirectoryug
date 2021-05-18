module.exports = (app) => {
  app.post(`/tax-class`, require('./taxClassCreate'));
  app.put(`/tax-class/:id`, require('./taxClassUpdate'));
  app.post(`/tax-class/import`, require('./taxClassImport'));
  app.delete(`/tax-class`, require('./taxClassDestroy'));
  app.get(
    `/tax-class/autocomplete`,
    require('./taxClassAutocomplete'),
  );
  app.get(`/tax-class`, require('./taxClassList'));
  app.get(`/tax-class/:id`, require('./taxClassFind'));
};
