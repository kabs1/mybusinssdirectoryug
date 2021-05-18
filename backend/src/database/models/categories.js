const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Categories extends AbstractEntityModel {
  constructor() {
    super('categories', 'categories', {
      categoryCover: new types.Files(),
      categoryTitle: new types.String(null, null),
      categoryShortCode: new types.String(null, 6),
      categoryDetails: new types.String(null, 250),
      importHash: new types.String(null, 255),
    });
  }
};
