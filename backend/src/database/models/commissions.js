const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Commissions extends AbstractEntityModel {
  constructor() {
    super('commissions', 'commissions', {
      commStaff: new types.RelationToOne(),
      commSale: new types.RelationToOne(),
      commStall: new types.RelationToOne(),
      commRegister: new types.RelationToOne(),
      commAmount: new types.Number(null, null),
      importHash: new types.String(null, 255),
    });
  }
};
