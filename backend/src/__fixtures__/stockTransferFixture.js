const genericFixture = require('./genericFixture');
const StockTransferRepository = require('../database/repositories/stockTransferRepository');

const stockTransferFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new StockTransferRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = stockTransferFixture;
