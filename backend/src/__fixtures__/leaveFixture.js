const genericFixture = require('./genericFixture');
const LeaveRepository = require('../database/repositories/leaveRepository');

const leaveFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new LeaveRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = leaveFixture;
