const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class StockTransfer extends AbstractEntityModel {
  constructor() {
    super('stockTransfer', 'stockTransfer', {
      transferRef: new types.String(5, 15),
      transferProduct: new types.RelationToOne(),
      transferStallFrom: new types.RelationToOne(),
      transferStallTo: new types.RelationToOne(),
      transferUnits: new types.Number(null, null),
      transferNote: new types.String(null, null),
      transferStatus: new types.Enumerator([
        "Done",
        "Pending",
        "Active"
      ]),
      transferExpenses: new types.RelationToMany(),
      importHash: new types.String(null, 255),
    });
  }
};
