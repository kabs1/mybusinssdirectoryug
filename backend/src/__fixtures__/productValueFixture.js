const genericFixture = require('./genericFixture');
const ProductValueRepository = require('../database/repositories/productValueRepository');

const productValueFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new ProductValueRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = productValueFixture;
