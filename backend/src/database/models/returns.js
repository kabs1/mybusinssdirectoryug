const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Returns extends AbstractEntityModel {
  constructor() {
    super('returns', 'returns', {
      returnRefNo: new types.String(null, 15),
      returnProduct: new types.RelationToOne(),
      returnUnits: new types.Number(null, null),
      returnReason: new types.String(null, null),
      returnsFrom: new types.Enumerator([
        "purchase",
        "sale"
      ]),
      returnIdentifier: new types.String(null, null),
      returnStall: new types.RelationToOne(),
      importHash: new types.String(null, 255),
    });
  }
};
