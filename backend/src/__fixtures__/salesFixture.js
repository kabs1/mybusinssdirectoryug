const genericFixture = require('./genericFixture');
const SalesRepository = require('../database/repositories/salesRepository');

const salesFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new SalesRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = salesFixture;
