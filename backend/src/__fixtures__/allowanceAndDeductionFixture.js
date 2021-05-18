const genericFixture = require('./genericFixture');
const AllowanceAndDeductionRepository = require('../database/repositories/allowanceAndDeductionRepository');

const allowanceAndDeductionFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new AllowanceAndDeductionRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = allowanceAndDeductionFixture;
