const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class LeaveType extends AbstractEntityModel {
  constructor() {
    super('leaveType', 'leaveType', {
      leaveTypeTitle: new types.String(null, null),
      leaveTypeDetails: new types.String(null, 250),
      leaveCategory: new types.Enumerator([
        "monthly",
        "yearly",
        "None",
        "Sick",
        "Study",
        "Special",
        "Maternity",
        "Paternity",
        "Unauthorised"
      ]),
      importHash: new types.String(null, 255),
    });
  }
};
