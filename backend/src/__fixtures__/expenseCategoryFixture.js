const genericFixture = require('./genericFixture');
const ExpenseCategoryRepository = require('../database/repositories/expenseCategoryRepository');

const expenseCategoryFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new ExpenseCategoryRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = expenseCategoryFixture;
