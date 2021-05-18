const genericFixture = require('./genericFixture');
const NoticeRepository = require('../database/repositories/noticeRepository');

const noticeFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new NoticeRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = noticeFixture;
