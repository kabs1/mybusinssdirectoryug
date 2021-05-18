const genericFixture = require('./genericFixture');
const PriceChangeRepository = require('../database/repositories/priceChangeRepository');

const priceChangeFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new PriceChangeRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = priceChangeFixture;
