const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Transactions extends AbstractEntityModel {
  constructor() {
    super('transactions', 'transactions', {
      transactionRef: new types.String(3, 15),
      transactionClass: new types.Enumerator([
        "Purchase",
        "Sales",
        "Customer",
        "Assets",
        "Expenses",
        "Salary",
        "AD"
      ]),
      transactionType: new types.Enumerator([
        "Debit",
        "Credit"
      ]),
      transactionValue: new types.Number(null, null),
      transactionIdentifier: new types.String(null, null),
      transactionSession: new types.RelationToOne(),
      importHash: new types.String(null, 255),
    });
  }
};
