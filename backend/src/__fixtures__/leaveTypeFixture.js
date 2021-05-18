const genericFixture = require('./genericFixture');
const LeaveTypeRepository = require('../database/repositories/leaveTypeRepository');

const leaveTypeFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new LeaveTypeRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = leaveTypeFixture;
