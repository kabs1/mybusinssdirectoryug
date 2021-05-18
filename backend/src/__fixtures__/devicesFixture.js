const genericFixture = require('./genericFixture');
const DevicesRepository = require('../database/repositories/devicesRepository');

const devicesFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new DevicesRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = devicesFixture;
