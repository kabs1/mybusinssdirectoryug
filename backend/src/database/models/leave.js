const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Leave extends AbstractEntityModel {
  constructor() {
    super('leave', 'leave', {
      leaveRef: new types.String(null, 15),
      leaveUserId: new types.RelationToOne(),
      leaveType: new types.RelationToOne(),
      leaveStartDate: new types.Date(),
      leaveEndDate: new types.Date(),
      leaveNote: new types.String(null, null),
      leaveDocs: new types.Files(),
      leaveAssignedStaff: new types.RelationToOne(),
      importHash: new types.String(null, 255),
    });
  }
};
