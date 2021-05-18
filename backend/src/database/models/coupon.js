const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Coupon extends AbstractEntityModel {
  constructor() {
    super('coupon', 'coupon', {
      couponCode: new types.String(5, 10),
      couponType: new types.Enumerator([
        "Percentage",
        "Fixed"
      ]),
      couponValue: new types.Number(null, null),
      couponMinAmount: new types.Number(null, null),
      couponStartDate: new types.Date(),
      couponEndDate: new types.Date(),
      couponStall: new types.RelationToOne(),
      couponStatus: new types.Enumerator([
        "Active",
        "Inactive"
      ]),
      couponMaxUse: new types.Number(null, null),
      couponUsageCount: new types.Number(null, null),
      couponSalesUsed: new types.RelationToMany(),
      importHash: new types.String(null, 255),
    });
  }
};
