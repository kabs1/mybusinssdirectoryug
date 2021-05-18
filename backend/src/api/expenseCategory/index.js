module.exports = (app) => {
  app.post(`/expense-category`, require('./expenseCategoryCreate'));
  app.put(`/expense-category/:id`, require('./expenseCategoryUpdate'));
  app.post(`/expense-category/import`, require('./expenseCategoryImport'));
  app.delete(`/expense-category`, require('./expenseCategoryDestroy'));
  app.get(
    `/expense-category/autocomplete`,
    require('./expenseCategoryAutocomplete'),
  );
  app.get(`/expense-category`, require('./expenseCategoryList'));
  app.get(`/expense-category/:id`, require('./expenseCategoryFind'));
};
