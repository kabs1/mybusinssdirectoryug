module.exports = (app) => {
  app.post(`/memos`, require('./memosCreate'));
  app.put(`/memos/:id`, require('./memosUpdate'));
  app.post(`/memos/import`, require('./memosImport'));
  app.delete(`/memos`, require('./memosDestroy'));
  app.get(
    `/memos/autocomplete`,
    require('./memosAutocomplete'),
  );
  app.get(`/memos`, require('./memosList'));
  app.get(`/memos/:id`, require('./memosFind'));
};
