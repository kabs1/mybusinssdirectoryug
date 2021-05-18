const genericFixture = require('./genericFixture');
const HolidayRepository = require('../database/repositories/holidayRepository');

const holidayFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new HolidayRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = holidayFixture;
