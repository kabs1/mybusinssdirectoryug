const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Variation extends AbstractEntityModel {
  constructor() {
    super('variation', 'variation', {
      variationName: new types.String(null, null),
      variationValues: new types.String(null, 250),
      importHash: new types.String(null, 255),
    });
  }
};
