const genericFixture = require('./genericFixture');
const StockAdjustmentsRepository = require('../database/repositories/stockAdjustmentsRepository');

const stockAdjustmentsFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new StockAdjustmentsRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = stockAdjustmentsFixture;
