const genericFixture = require('./genericFixture');
const CommissionsRepository = require('../database/repositories/commissionsRepository');

const commissionsFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new CommissionsRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = commissionsFixture;
