const genericFixture = require('./genericFixture');
const ProductCountRepository = require('../database/repositories/productCountRepository');

const productCountFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new ProductCountRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = productCountFixture;
