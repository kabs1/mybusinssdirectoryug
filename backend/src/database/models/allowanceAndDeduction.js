const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class AllowanceAndDeduction extends AbstractEntityModel {
  constructor() {
    super('allowanceAndDeduction', 'allowanceAndDeduction', {
      adRef: new types.String(3, 15),
      adType: new types.Enumerator([
        "Allowance",
        "Deduction"
      ]),
      adStaff: new types.RelationToOne(),
      adAmmount: new types.Number(null, null),
      adStall: new types.RelationToOne(),
      adDate: new types.Date(),
      adNote: new types.String(null, null),
      adDamages: new types.RelationToMany(),
      adCommissions: new types.RelationToMany(),
      adExpenses: new types.RelationToMany(),
      importHash: new types.String(null, 255),
    });
  }
};
