const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class ProductValue extends AbstractEntityModel {
  constructor() {
    super('productValue', 'productValue', {
      value: new types.Number(null, null),
      importHash: new types.String(null, 255),
    });
  }
};
