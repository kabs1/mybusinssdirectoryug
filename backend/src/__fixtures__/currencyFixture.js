const genericFixture = require('./genericFixture');
const CurrencyRepository = require('../database/repositories/currencyRepository');

const currencyFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new CurrencyRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = currencyFixture;
