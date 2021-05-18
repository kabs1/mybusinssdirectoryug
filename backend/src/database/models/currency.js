const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Currency extends AbstractEntityModel {
  constructor() {
    super('currency', 'currency', {
      currencyTitle: new types.String(null, null),
      currencyCode: new types.String(null, 6),
      currencySign: new types.String(null, 4),
      importHash: new types.String(null, 255),
    });
  }
};
