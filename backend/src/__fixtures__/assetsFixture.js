const genericFixture = require('./genericFixture');
const AssetsRepository = require('../database/repositories/assetsRepository');

const assetsFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new AssetsRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = assetsFixture;
