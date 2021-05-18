module.exports = (app) => {
  app.post(`/notice`, require('./noticeCreate'));
  app.put(`/notice/:id`, require('./noticeUpdate'));
  app.post(`/notice/import`, require('./noticeImport'));
  app.delete(`/notice`, require('./noticeDestroy'));
  app.get(
    `/notice/autocomplete`,
    require('./noticeAutocomplete'),
  );
  app.get(`/notice`, require('./noticeList'));
  app.get(`/notice/:id`, require('./noticeFind'));
};
