module.exports = (app) => {
  app.post(`/suppliers`, require('./suppliersCreate'));
  app.put(`/suppliers/:id`, require('./suppliersUpdate'));
  app.post(`/suppliers/import`, require('./suppliersImport'));
  app.delete(`/suppliers`, require('./suppliersDestroy'));
  app.get(
    `/suppliers/autocomplete`,
    require('./suppliersAutocomplete'),
  );
  app.get(`/suppliers`, require('./suppliersList'));
  app.get(`/suppliers/:id`, require('./suppliersFind'));
};
