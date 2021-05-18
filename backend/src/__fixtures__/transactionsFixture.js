const genericFixture = require('./genericFixture');
const TransactionsRepository = require('../database/repositories/transactionsRepository');

const transactionsFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new TransactionsRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = transactionsFixture;
