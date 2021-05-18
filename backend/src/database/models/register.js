const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Register extends AbstractEntityModel {
  constructor() {
    super('register', 'register', {
      registerRef: new types.String(null, null),
      registerStall: new types.RelationToOne(),
      registerStaff: new types.RelationToOne(),
      registerOpeningValue: new types.Number(null, null),
      registerClosingValue: new types.Number(null, null),
      registerSaleValue: new types.Number(null, null),
      registerSaleItems: new types.Number(null, null),
      registerSaleRef: new types.RelationToMany(),
      registerReturnsRef: new types.RelationToMany(),
      registerOpenTime: new types.DateTime(),
      registerCloseTime: new types.DateTime(),
      importHash: new types.String(null, 255),
    });
  }
};
