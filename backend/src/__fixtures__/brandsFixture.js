const genericFixture = require('./genericFixture');
const BrandsRepository = require('../database/repositories/brandsRepository');

const brandsFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new BrandsRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = brandsFixture;
