const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class DocumentTypes extends AbstractEntityModel {
  constructor() {
    super('documentTypes', 'documentTypes', {
      documentTypeTitle: new types.String(null, null),
      documentTypeNote: new types.String(null, 250),
      importHash: new types.String(null, 255),
    });
  }
};
