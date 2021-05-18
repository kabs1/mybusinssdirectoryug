const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class StockAdjustments extends AbstractEntityModel {
  constructor() {
    super('stockAdjustments', 'stockAdjustments', {
      stockAdjustmentRef: new types.String(null, 15),
      stockAdjustmentProduct: new types.RelationToOne(),
      stockAdjustmentType: new types.Enumerator([
        "increase",
        "decrease"
      ]),
      stockAdjustmentUnits: new types.Number(null, null),
      adjustmentStall: new types.RelationToOne(),
      stockAdjustmentsReason: new types.String(null, 250),
      stockAdjustmentClass: new types.Enumerator([
        "Normal",
        "Abnomal"
      ]),
      stockAdjustmentLoss: new types.Number(null, null),
      stockAdjustmentRecorverdAmount: new types.Number(null, null),
      importHash: new types.String(null, 255),
    });
  }
};
