const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Payroll extends AbstractEntityModel {
  constructor() {
    super('payroll', 'payroll', {
      payrollRef: new types.String(3, 15),
      payrollStaff: new types.RelationToOne(),
      payrollSalary: new types.Number(null, null),
      payrollAd: new types.RelationToMany(),
      payrollDocs: new types.Files(),
      payrollWorkingType: new types.Enumerator([
        "Days",
        "Hours",
        "Weeks",
        "Months"
      ]),
      payrollWorkingTime: new types.Number(null, null),
      payrollStatus: new types.Enumerator([
        "Pending",
        "Completed"
      ]),
      payrollDate: new types.Date(),
      importHash: new types.String(null, 255),
    });
  }
};
