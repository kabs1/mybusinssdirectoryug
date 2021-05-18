const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Units extends AbstractEntityModel {
  constructor() {
    super('units', 'units', {
      unitsTitle: new types.String(null, null),
      unitsCode: new types.String(null, 4),
      unitsType: new types.Enumerator([
        "decimal",
        "integer",
        "none"
      ]),
      importHash: new types.String(null, 255),
    });
  }
};
