const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Suppliers extends AbstractEntityModel {
  constructor() {
    super('suppliers', 'suppliers', {
      supplierProfile: new types.Files(),
      supplierNames: new types.String(null, null),
      supplierBusinessName: new types.String(null, null),
      supplierEmail: new types.String(null, null),
      supplierLocation: new types.String(null, null),
      supplierPhoneNumber: new types.String(null, null),
      supplierPayTerm: new types.Enumerator([
        "daily",
        "monthly",
        "yearly"
      ]),
      supplierPayType: new types.Enumerator([
        "offline",
        "online"
      ]),
      supplierStatus: new types.Enumerator([
        "active",
        "blocked",
        "pending",
        "suspended"
      ]),
      supplierCreditBalance: new types.Number(null, null),
      supplierDocs: new types.Files(),
      userId: new types.RelationToOne(),
      importHash: new types.String(null, 255),
    });
  }
};
