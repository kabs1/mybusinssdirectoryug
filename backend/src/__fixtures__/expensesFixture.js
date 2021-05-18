const genericFixture = require('./genericFixture');
const ExpensesRepository = require('../database/repositories/expensesRepository');

const expensesFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new ExpensesRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = expensesFixture;
