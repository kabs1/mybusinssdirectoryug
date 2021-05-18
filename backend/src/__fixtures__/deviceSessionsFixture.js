const genericFixture = require('./genericFixture');
const DeviceSessionsRepository = require('../database/repositories/deviceSessionsRepository');

const deviceSessionsFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new DeviceSessionsRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = deviceSessionsFixture;
