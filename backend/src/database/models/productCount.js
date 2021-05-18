const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class ProductCount extends AbstractEntityModel {
  constructor() {
    super('productCount', 'productCount', {
      count: new types.Number(null, null),
      importHash: new types.String(null, 255),
    });
  }
};
