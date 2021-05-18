const genericFixture = require('./genericFixture');
const CustomersRepository = require('../database/repositories/customersRepository');

const customersFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new CustomersRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = customersFixture;
