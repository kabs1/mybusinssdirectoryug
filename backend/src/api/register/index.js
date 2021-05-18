module.exports = (app) => {
  app.post(`/register`, require('./registerCreate'));
  app.put(`/register/:id`, require('./registerUpdate'));
  app.post(`/register/import`, require('./registerImport'));
  app.delete(`/register`, require('./registerDestroy'));
  app.get(
    `/register/autocomplete`,
    require('./registerAutocomplete'),
  );
  app.get(`/register`, require('./registerList'));
  app.get(`/register/:id`, require('./registerFind'));
};
