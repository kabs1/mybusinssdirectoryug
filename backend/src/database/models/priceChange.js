const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class PriceChange extends AbstractEntityModel {
  constructor() {
    super('priceChange', 'priceChange', {
      priceChangeRef: new types.String(3, 15),
      priceChangeType: new types.Enumerator([
        "Buying",
        "Margin"
      ]),
      priceChangeBefore: new types.Number(null, null),
      priceChangeAfter: new types.Number(null, null),
      priceChangeProduct: new types.RelationToOne(),
      priceChangeStall: new types.RelationToOne(),
      priceChangeSession: new types.RelationToOne(),
      priceChangeStatus: new types.Enumerator([
        "Completed",
        "Pending"
      ]),
      importHash: new types.String(null, 255),
    });
  }
};
