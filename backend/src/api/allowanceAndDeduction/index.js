module.exports = (app) => {
  app.post(`/allowance-and-deduction`, require('./allowanceAndDeductionCreate'));
  app.put(`/allowance-and-deduction/:id`, require('./allowanceAndDeductionUpdate'));
  app.post(`/allowance-and-deduction/import`, require('./allowanceAndDeductionImport'));
  app.delete(`/allowance-and-deduction`, require('./allowanceAndDeductionDestroy'));
  app.get(
    `/allowance-and-deduction/autocomplete`,
    require('./allowanceAndDeductionAutocomplete'),
  );
  app.get(`/allowance-and-deduction`, require('./allowanceAndDeductionList'));
  app.get(`/allowance-and-deduction/:id`, require('./allowanceAndDeductionFind'));
};
