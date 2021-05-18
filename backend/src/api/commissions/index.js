module.exports = (app) => {
  app.post(`/commissions`, require('./commissionsCreate'));
  app.put(`/commissions/:id`, require('./commissionsUpdate'));
  app.post(`/commissions/import`, require('./commissionsImport'));
  app.delete(`/commissions`, require('./commissionsDestroy'));
  app.get(
    `/commissions/autocomplete`,
    require('./commissionsAutocomplete'),
  );
  app.get(`/commissions`, require('./commissionsList'));
  app.get(`/commissions/:id`, require('./commissionsFind'));
};
