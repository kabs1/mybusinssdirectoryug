module.exports = (app) => {
  app.post(`/payment-methods`, require('./paymentMethodsCreate'));
  app.put(`/payment-methods/:id`, require('./paymentMethodsUpdate'));
  app.post(`/payment-methods/import`, require('./paymentMethodsImport'));
  app.delete(`/payment-methods`, require('./paymentMethodsDestroy'));
  app.get(
    `/payment-methods/autocomplete`,
    require('./paymentMethodsAutocomplete'),
  );
  app.get(`/payment-methods`, require('./paymentMethodsList'));
  app.get(`/payment-methods/:id`, require('./paymentMethodsFind'));
};
