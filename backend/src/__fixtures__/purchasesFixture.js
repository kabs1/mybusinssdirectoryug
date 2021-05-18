const genericFixture = require('./genericFixture');
const PurchasesRepository = require('../database/repositories/purchasesRepository');

const purchasesFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new PurchasesRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = purchasesFixture;
