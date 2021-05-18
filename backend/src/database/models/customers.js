const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Customers extends AbstractEntityModel {
  constructor() {
    super('customers', 'customers', {
      customerProfile: new types.Files(),
      customerNames: new types.String(null, null),
      customerEmail: new types.String(null, null),
      customerUserId: new types.RelationToOne(),
      customerPhoneNumber: new types.String(null, null),
      customerLocation: new types.String(null, null),
      customerDiscount: new types.Number(null, null),
      customerStatus: new types.Enumerator([
        "active",
        "blocked",
        "suspended"
      ]),
      customerCode: new types.Number(null, null),
      customerAccountBalance: new types.Number(null, null),
      customerCustomField: new types.String(null, null),
      customerDocs: new types.Files(),
      customerLoyaltyPoints: new types.Number(null, null),
      customerCreditBalance: new types.Number(null, null),
      importHash: new types.String(null, 255),
    });
  }
};
