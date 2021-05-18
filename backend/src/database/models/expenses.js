const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Expenses extends AbstractEntityModel {
  constructor() {
    super('expenses', 'expenses', {
      expenseCover: new types.Files(),
      expensesTitle: new types.String(null, null),
      expensesCost: new types.Number(null, null),
      expenseMadeTo: new types.RelationToMany(),
      expensesMadeBy: new types.RelationToOne(),
      expensesDate: new types.Date(),
      expensesStatus: new types.Enumerator([
        "completed",
        "pending"
      ]),
      expenseStall: new types.RelationToMany(),
      expenseNote: new types.String(null, null),
      expenseDocs: new types.Files(),
      expenseDoc: new types.Files(),
      importHash: new types.String(null, 255),
    });
  }
};
