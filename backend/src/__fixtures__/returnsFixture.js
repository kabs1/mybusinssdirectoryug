const genericFixture = require('./genericFixture');
const ReturnsRepository = require('../database/repositories/returnsRepository');

const returnsFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new ReturnsRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = returnsFixture;
