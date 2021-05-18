const genericFixture = require('./genericFixture');
const PaymentMethodsRepository = require('../database/repositories/paymentMethodsRepository');

const paymentMethodsFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new PaymentMethodsRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = paymentMethodsFixture;
