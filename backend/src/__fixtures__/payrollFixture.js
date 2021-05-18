const genericFixture = require('./genericFixture');
const PayrollRepository = require('../database/repositories/payrollRepository');

const payrollFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new PayrollRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = payrollFixture;
