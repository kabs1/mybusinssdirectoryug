module.exports = (app) => {
  app.post(`/customers`, require('./customersCreate'));
  app.put(`/customers/:id`, require('./customersUpdate'));
  app.post(`/customers/import`, require('./customersImport'));
  app.delete(`/customers`, require('./customersDestroy'));
  app.get(
    `/customers/autocomplete`,
    require('./customersAutocomplete'),
  );
  app.get(`/customers`, require('./customersList'));
  app.get(`/customers/:id`, require('./customersFind'));
};
