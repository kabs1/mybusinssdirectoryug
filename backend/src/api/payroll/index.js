module.exports = (app) => {
  app.post(`/payroll`, require('./payrollCreate'));
  app.put(`/payroll/:id`, require('./payrollUpdate'));
  app.post(`/payroll/import`, require('./payrollImport'));
  app.delete(`/payroll`, require('./payrollDestroy'));
  app.get(
    `/payroll/autocomplete`,
    require('./payrollAutocomplete'),
  );
  app.get(`/payroll`, require('./payrollList'));
  app.get(`/payroll/:id`, require('./payrollFind'));
};
