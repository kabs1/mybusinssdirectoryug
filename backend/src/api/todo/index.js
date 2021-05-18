module.exports = (app) => {
  app.post(`/todo`, require('./todoCreate'));
  app.put(`/todo/:id`, require('./todoUpdate'));
  app.post(`/todo/import`, require('./todoImport'));
  app.delete(`/todo`, require('./todoDestroy'));
  app.get(
    `/todo/autocomplete`,
    require('./todoAutocomplete'),
  );
  app.get(`/todo`, require('./todoList'));
  app.get(`/todo/:id`, require('./todoFind'));
};
