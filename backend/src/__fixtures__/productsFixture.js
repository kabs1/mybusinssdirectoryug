const genericFixture = require('./genericFixture');
const ProductsRepository = require('../database/repositories/productsRepository');

const productsFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new ProductsRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = productsFixture;
