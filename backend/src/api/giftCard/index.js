module.exports = (app) => {
  app.post(`/gift-card`, require('./giftCardCreate'));
  app.put(`/gift-card/:id`, require('./giftCardUpdate'));
  app.post(`/gift-card/import`, require('./giftCardImport'));
  app.delete(`/gift-card`, require('./giftCardDestroy'));
  app.get(
    `/gift-card/autocomplete`,
    require('./giftCardAutocomplete'),
  );
  app.get(`/gift-card`, require('./giftCardList'));
  app.get(`/gift-card/:id`, require('./giftCardFind'));
};
