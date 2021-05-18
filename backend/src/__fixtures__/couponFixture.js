const genericFixture = require('./genericFixture');
const CouponRepository = require('../database/repositories/couponRepository');

const couponFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new CouponRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = couponFixture;
