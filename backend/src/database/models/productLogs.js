const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class ProductLogs extends AbstractEntityModel {
  constructor() {
    super('productLogs', 'productLogs', {
      productLogRef: new types.String(3, 15),
      productLogProduct: new types.RelationToOne(),
      productLogStall: new types.RelationToOne(),
      productLogSellingPrice: new types.Number(null, null),
      productLogMargin: new types.Number(null, null),
      productLogBuyingPrice: new types.Number(null, null),
      productLogCurrentStock: new types.Number(null, null),
      productLogSoldUnits: new types.Number(null, null),
      productLogAdjustedUnits: new types.Number(null, null),
      productLogDamagedUnits: new types.Number(null, null),
      productLogReturnedUnits: new types.Number(null, null),
      productLogPurchasedUnits: new types.Number(null, null),
      productLogTransferredUnits: new types.Number(null, null),
      productLogPurchaseRef: new types.RelationToMany(),
      productLogSaleRef: new types.RelationToMany(),
      productLogReturnsRef: new types.RelationToMany(),
      productLogAdjustRef: new types.RelationToMany(),
      productLogTransferredRef: new types.RelationToMany(),
      productLogDamageRef: new types.RelationToMany(),
      importHash: new types.String(null, 255),
    });
  }
};
