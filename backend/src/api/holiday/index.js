module.exports = (app) => {
  app.post(`/holiday`, require('./holidayCreate'));
  app.put(`/holiday/:id`, require('./holidayUpdate'));
  app.post(`/holiday/import`, require('./holidayImport'));
  app.delete(`/holiday`, require('./holidayDestroy'));
  app.get(
    `/holiday/autocomplete`,
    require('./holidayAutocomplete'),
  );
  app.get(`/holiday`, require('./holidayList'));
  app.get(`/holiday/:id`, require('./holidayFind'));
};
