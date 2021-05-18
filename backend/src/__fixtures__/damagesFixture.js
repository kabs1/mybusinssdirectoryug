const genericFixture = require('./genericFixture');
const DamagesRepository = require('../database/repositories/damagesRepository');

const damagesFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new DamagesRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = damagesFixture;
