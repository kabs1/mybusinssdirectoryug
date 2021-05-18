const genericFixture = require('./genericFixture');
const VariationRepository = require('../database/repositories/variationRepository');

const variationFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new VariationRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = variationFixture;
