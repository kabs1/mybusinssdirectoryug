const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Stall extends AbstractEntityModel {
  constructor() {
    super('stall', 'stall', {
      stallCover: new types.Files(),
      stallName: new types.String(null, null),
      stallType: new types.Enumerator([
        "warehouse",
        "outlet",
        "store",
        "counter"
      ]),
      stallInfo: new types.String(null, 250),
      stallLocation: new types.String(null, null),
      stallPhoneNumber: new types.String(null, null),
      stallEmail: new types.String(null, null),
      stallIsStatus: new types.Enumerator([
        "public",
        "private"
      ]),
      stallPos: new types.Enumerator([
        "enabled",
        "disabled"
      ]),
      stallLoyaltyPointValue: new types.Number(null, null),
      stallCustom1: new types.String(null, null),
      stallCustom2: new types.String(null, null),
      importHash: new types.String(null, 255),
    });
  }
};
