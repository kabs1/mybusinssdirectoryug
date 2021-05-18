const genericFixture = require('./genericFixture');
const ProductLogsRepository = require('../database/repositories/productLogsRepository');

const productLogsFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new ProductLogsRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = productLogsFixture;
