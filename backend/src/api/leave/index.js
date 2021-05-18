module.exports = (app) => {
  app.post(`/leave`, require('./leaveCreate'));
  app.put(`/leave/:id`, require('./leaveUpdate'));
  app.post(`/leave/import`, require('./leaveImport'));
  app.delete(`/leave`, require('./leaveDestroy'));
  app.get(
    `/leave/autocomplete`,
    require('./leaveAutocomplete'),
  );
  app.get(`/leave`, require('./leaveList'));
  app.get(`/leave/:id`, require('./leaveFind'));
};
