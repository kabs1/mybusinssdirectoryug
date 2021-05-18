const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Documents extends AbstractEntityModel {
  constructor() {
    super('documents', 'documents', {
      documentTitle: new types.String(null, 20),
      documentDetails: new types.String(null, null),
      documentType: new types.RelationToOne(),
      docStall: new types.RelationToMany(),
      documentFile: new types.Files(),
      importHash: new types.String(null, 255),
    });
  }
};
