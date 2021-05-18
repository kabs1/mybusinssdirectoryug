const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Notice extends AbstractEntityModel {
  constructor() {
    super('notice', 'notice', {
      noticeCover: new types.Files(),
      noticeTitle: new types.String(null, null),
      noticeDetails: new types.String(null, null),
      noticeType: new types.Enumerator([
        "alert",
        "message",
        "notification"
      ]),
      userIds: new types.RelationToMany(),
      noticeDevice: new types.RelationToMany(),
      noticeStall: new types.RelationToMany(),
      importHash: new types.String(null, 255),
    });
  }
};
