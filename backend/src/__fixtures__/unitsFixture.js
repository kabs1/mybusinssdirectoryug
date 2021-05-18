const genericFixture = require('./genericFixture');
const UnitsRepository = require('../database/repositories/unitsRepository');

const unitsFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new UnitsRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = unitsFixture;
