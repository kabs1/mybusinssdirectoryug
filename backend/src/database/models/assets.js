const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Assets extends AbstractEntityModel {
  constructor() {
    super('assets', 'assets', {
      assetImage: new types.Files(),
      assetName: new types.String(null, null),
      assetDetails: new types.String(null, 250),
      assetValue: new types.Number(null, null),
      assetDocs: new types.Files(),
      assetsStall: new types.RelationToMany(),
      assetPurchaseDate: new types.Date(),
      importHash: new types.String(null, 255),
    });
  }
};
