const genericFixture = require('./genericFixture');
const MemosRepository = require('../database/repositories/memosRepository');

const memosFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new MemosRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = memosFixture;
