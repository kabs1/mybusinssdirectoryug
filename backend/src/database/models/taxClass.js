const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class TaxClass extends AbstractEntityModel {
  constructor() {
    super('taxClass', 'taxClass', {
      taxClassName: new types.String(null, null),
      taxClassPercentage: new types.Number(0, 100),
      taxClassDetails: new types.String(null, null),
      importHash: new types.String(null, 255),
    });
  }
};
