const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Purchases extends AbstractEntityModel {
  constructor() {
    super('purchases', 'purchases', {
      purchasesRef: new types.String(null, 10),
      purchaseProduct: new types.RelationToOne(),
      purchaseSupplier: new types.RelationToOne(),
      purchasePaymentStatus: new types.Enumerator([
        "paid",
        "pending"
      ]),
      purchaseUnits: new types.Number(null, null),
      purchaseTotalAmount: new types.Number(null, null),
      purchaseReturnsUnits: new types.Number(null, null),
      purchaseNote: new types.String(null, 250),
      purchaseStall: new types.RelationToOne(),
      purchaseReturnsReason: new types.String(null, null),
      importHash: new types.String(null, 255),
    });
  }
};
