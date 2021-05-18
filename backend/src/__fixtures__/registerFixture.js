const genericFixture = require('./genericFixture');
const RegisterRepository = require('../database/repositories/registerRepository');

const registerFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new RegisterRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = registerFixture;
