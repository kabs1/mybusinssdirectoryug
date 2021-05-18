const genericFixture = require('./genericFixture');
const StallRepository = require('../database/repositories/stallRepository');

const stallFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new StallRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = stallFixture;
