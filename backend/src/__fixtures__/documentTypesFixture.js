const genericFixture = require('./genericFixture');
const DocumentTypesRepository = require('../database/repositories/documentTypesRepository');

const documentTypesFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new DocumentTypesRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = documentTypesFixture;
