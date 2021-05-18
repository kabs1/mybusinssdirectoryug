const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class PaymentMethods extends AbstractEntityModel {
  constructor() {
    super('paymentMethods', 'paymentMethods', {
      paymentMethodLogo: new types.Files(),
      paymentMethodTitle: new types.String(null, 12),
      paymentMethodType: new types.Enumerator([
        "Online",
        "Offline"
      ]),
      paymentMethodParams: new types.String(null, null),
      paymentMethodResponse: new types.String(null, null),
      paymentMethodStatus: new types.String(null, null),
      paymentMethodHeader: new types.String(null, null),
      paymentMethodApi: new types.String(null, null),
      paymentMethodCustom1: new types.String(null, null),
      paymentMethodCustom2: new types.String(null, null),
      importHash: new types.String(null, 255),
    });
  }
};
