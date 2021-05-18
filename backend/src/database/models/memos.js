const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Memos extends AbstractEntityModel {
  constructor() {
    super('memos', 'memos', {
      memosCover: new types.Files(),
      memosTitle: new types.String(null, 20),
      memosDetails: new types.String(null, null),
      memosFrom: new types.RelationToMany(),
      memosStartDate: new types.DateTime(),
      memosEndDate: new types.DateTime(),
      memosTo: new types.String(null, null),
      memoStall: new types.RelationToMany(),
      importHash: new types.String(null, 255),
    });
  }
};
