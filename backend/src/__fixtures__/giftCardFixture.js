const genericFixture = require('./genericFixture');
const GiftCardRepository = require('../database/repositories/giftCardRepository');

const giftCardFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new GiftCardRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = giftCardFixture;
