const genericFixture = require('./genericFixture');
const SuppliersRepository = require('../database/repositories/suppliersRepository');

const suppliersFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new SuppliersRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = suppliersFixture;
