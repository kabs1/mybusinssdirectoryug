const genericFixture = require('./genericFixture');
const DocumentsRepository = require('../database/repositories/documentsRepository');

const documentsFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new DocumentsRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = documentsFixture;
