const genericFixture = require('./genericFixture');
const TaxClassRepository = require('../database/repositories/taxClassRepository');

const taxClassFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new TaxClassRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = taxClassFixture;
