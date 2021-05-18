module.exports = (app) => {
  app.post(`/expenses`, require('./expensesCreate'));
  app.put(`/expenses/:id`, require('./expensesUpdate'));
  app.post(`/expenses/import`, require('./expensesImport'));
  app.delete(`/expenses`, require('./expensesDestroy'));
  app.get(
    `/expenses/autocomplete`,
    require('./expensesAutocomplete'),
  );
  app.get(`/expenses`, require('./expensesList'));
  app.get(`/expenses/:id`, require('./expensesFind'));
};
