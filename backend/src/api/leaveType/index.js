module.exports = (app) => {
  app.post(`/leave-type`, require('./leaveTypeCreate'));
  app.put(`/leave-type/:id`, require('./leaveTypeUpdate'));
  app.post(`/leave-type/import`, require('./leaveTypeImport'));
  app.delete(`/leave-type`, require('./leaveTypeDestroy'));
  app.get(
    `/leave-type/autocomplete`,
    require('./leaveTypeAutocomplete'),
  );
  app.get(`/leave-type`, require('./leaveTypeList'));
  app.get(`/leave-type/:id`, require('./leaveTypeFind'));
};
