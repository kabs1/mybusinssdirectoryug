const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Sales extends AbstractEntityModel {
  constructor() {
    super('sales', 'sales', {
      salesInvoiceNo: new types.Number(null, 10),
      salesCustomer: new types.RelationToOne(),
      salesPaymentStatus: new types.Enumerator([
        "credit",
        "paid"
      ]),
      salesTotalAmount: new types.Number(null, null),
      salesSubTotalAmount: new types.Number(null, null),
      salesTotalTax: new types.Number(null, null),
      salesProducts: new types.RelationToMany(),
      salesTotalIUnits: new types.Number(null, null),
      saleNote: new types.String(null, 250),
      salesDiscount: new types.Number(null, null),
      salesPayload: new types.String(null, null),
      saleReturnsProducts: new types.RelationToMany(),
      saleReturnsUnits: new types.RelationToMany(),
      salesReturnReason: new types.String(null, null),
      salePaymentDetails: new types.String(null, null),
      salePaymentType: new types.String(null, null),
      saleCreditBalance: new types.Number(null, null),
      saleDevice: new types.RelationToOne(),
      giftCard: new types.RelationToOne(),
      salesCoupon: new types.RelationToOne(),
      salesStall: new types.RelationToOne(),
      salesRegister: new types.RelationToOne(),
      salesProductsCount: new types.RelationToMany(),
      salesProductsValue: new types.RelationToMany(),
      salesPaymentMethod: new types.RelationToMany(),
      salesItemLoad: new types.String(null, null),
      salesReceipt: new types.String(null, null),
      importHash: new types.String(null, 255),
    });
  }
};
